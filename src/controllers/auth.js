import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { createToken } from "../utils/createToken.js";

export function validateToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return {
      success: true,
      payload: decoded,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

export async function login(req, res) {
  const userExits = await User.getUser(req.body.email);
  console.log(userExits);
  if (userExits.success) {
    const match = await bcrypt.compare(
      req.body.password,
      userExits.users.password
    );
    if (match) {
      const token = createToken(userExits.users);
      const userData = userExits.users.toJSON();
      res.status(200).json({ ...userData, token });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } else {
    res
      .status(400)
      .json({ message: "Error fetching user", error: userExits.error });
  }
}

export async function createUser(req, res) {
  const result = await User.getUser(req.body.email);
  if (result.users === null) {
    const newUser = await User.addUser(req.body);
    if (newUser.success) {
      const token = createToken(newUser.user);
      const userData = newUser.user.toJSON();
      res.status(200).json({ ...userData, token });
    }
  } else if (result.users) {
    res.status(400).json({ message: "User already exists " });
  }
}
