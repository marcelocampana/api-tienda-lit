import { Size } from "../models/size.js";

export async function addSize(req, res) {
  const result = await Size.addSize(req.body);

  if (result.success) {
    res.status(201).json(result.size);
  } else {
    res
      .status(400)
      .json({ message: "Error creating size", error: result.error });
  }
}

export async function getAllSizes(req, res) {
  const result = await Size.getAllSizes();

  if (result.success) {
    res.status(200).json(result.colors);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching sizes", error: result.error });
  }
}
