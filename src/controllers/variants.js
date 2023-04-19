import { Variant } from "../models/variant.js";

export async function addVariant(req, res) {
  const result = await Variant.addVariant(req.body);

  if (result.success) {
    res.status(201).json(result.variant);
  } else {
    res
      .status(400)
      .json({ message: "Error creating variant", error: result.error });
  }
}

export async function getAllVariant(req, res) {
  const result = await Variant.getAllVariant();

  if (result.success) {
    res.status(200).json(result.variants);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching variants", error: result.error });
  }
}
