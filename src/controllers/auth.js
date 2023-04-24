import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";

export async function encryptPassword(req, res) {
  const saltRounds = 10;
  const { body } = req;
  const { name, email, password } = body;

  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  try {
    fetch("");
  } catch (error) {}

  response.status(201).json(savedUser);
}

export async function checkIfUserExists(req, res) {
  const { body } = req;
  const { name, email, password } = body;
}

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

function createToken(userData) {
  //userData = {id, name, email, role}
  console.log(userData);
  try {
    const token = jwt.sign(userData, process.env.SECRET_KEY);
    console.log(token);
    return token;
  } catch (error) {
    console.error("Error al crear el token:", error);
  }
}

export async function login(req, res) {
  const userExits = await User.getUser(req.body.email);
  if (userExits.success) {
    bcrypt.compare(
      req.body.password,
      userExits.users.password,
      function (err, result) {
        //     console.log(userExits.users);
        console.log(userExits.users);
        result
          ? createToken({
              userId: userExits.users.dataValues.userId,
              nombre: userExits.users.dataValues.userName,
              email: userExits.users.email,
              password: userExits.users.password,
              roleName: userExits.users.dataValues.roleName,
            })
          : "nada"; //result trae boolean
      }
    );

    res.status(200).json(userExits.users);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching user", error: result.error });
  }
}

export async function createUser(req, res) {
  const result = await User.getUser(req.body.email);
  if (result.users === null) {
    const newUser = await User.addUser(req.body);
    if (newUser.success) {
      res.status(200).json(newUser.user);
    }
  } else if (result.users) {
    res.status(400).json({ message: "User already exists " });
  }
}
