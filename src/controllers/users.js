import { User } from "../models/user.js";

export async function addUser(req, res) {
  console.log(req.body);
  const result = await User.addUser(req.body);

  if (result.success) {
    res.status(201).json(result.user);
  } else {
    res
      .status(400)
      .json({ message: "Error creating user", error: result.error });
  }
}
export async function getUser(req, res) {
  console.log("aca", req);
  const result = await User.getUser(req.body);

  if (result.success) {
    res.status(200).json(result.users);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching user", error: result.error });
  }
}
