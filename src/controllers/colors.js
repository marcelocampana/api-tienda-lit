import { Color } from "../models/color.js";

export async function addColor(req, res) {
  const result = await Color.addColor(req.body);

  if (result.success) {
    res.status(201).json(result.color);
  } else {
    res
      .status(400)
      .json({ message: "Error creating color", error: result.error });
  }
}
