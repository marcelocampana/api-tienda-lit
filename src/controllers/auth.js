import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import { createToken } from "../utils/createToken.js";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = __dirname + "/log/connections.txt";

function getLocalIP() {
  const networkInterfaces = os.networkInterfaces();
  for (const name in networkInterfaces) {
    for (const iface of networkInterfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return null;
}

async function appendToFile(filePath, userId) {
  fs.appendFile(
    filePath,
    `New connection from:${getLocalIP()} on ${new Date()} by user id:${userId}.`,
    function (err) {
      if (err) throw err;
      console.log("El contenido ha sido agregado al archivo.");
    }
  );
}

export function validateToken(req, res) {
  try {
    const decoded = jwt.verify(req.body.tk, process.env.SECRET_KEY);
    res.status(200).json({
      success: true,
      payload: decoded,
    });
  } catch (error) {
    const message = {
      success: false,
      error: error.message,
    };
    res.status(403).json({ message: "Error fetching user", error: message });
  }
}

export async function login(req, res) {
  const userExits = await User.getUser(req.body.email);

  if (userExits.users !== null && userExits.success) {
    const match = await bcrypt.compare(
      req.body.password,
      userExits.users.password
    );
    if (match) {
      const token = createToken(userExits.users);
      const userData = userExits.users.toJSON();

      appendToFile(filePath, userData.userId);

      res.status(200).json({ ...userData, token });
    } else {
      res.status(400).json({ message: "Invalid password" });
    }
  } else {
    res.status(400).json({ message: "Invalid user" });
  }
}

export async function createUser(req, res) {
  const result = await User.getUser(req.body.email);
  if (result.users === null) {
    const newUser = await User.addUser(req.body);
    if (newUser.success) {
      const token = createToken(newUser.user);
      const userData = newUser.user.toJSON();
      const data = {
        userId: userData.userId,
        name: userData.name,
        email: userData.email,
        role: userData.roleName,
      };
      res.status(200).json({ ...userData, token });
    }
  } else if (result.users) {
    res.status(400).json({ message: "User already exists " });
  }
}
