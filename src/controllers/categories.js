import { Category } from "../models/category.js";

export async function addCategory(req, res) {
  const result = await Category.addCategory(req.body);

  if (result.success) {
    res.status(201).json(result.category);
  } else {
    res
      .status(400)
      .json({ message: "Error creating category", error: result.error });
  }
}
export async function getCategory(req, res) {
  const result = await Category.getCategory(req.params.id);

  if (result.success) {
    res.status(200).json(result.categories);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching category", error: result.error });
  }
}

export async function getAllCategories(req, res) {
  const result = await Category.getAllCategories();

  if (result.success) {
    res.status(200).json(result.categories);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching categories", error: result.error });
  }
}

export async function updateCategory(req, res) {
  const result = await Category.updateCategory(req.params.id, req.body);

  if (result.success) {
    res.status(200).json(result.category);
  } else {
    res.status(400).json({
      message: result.message || "Error updating category",
      error: result.error,
    });
  }
}

export async function deleteCategory(req, res) {
  const result = await Category.deleteCategory(req.params.id);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(400).json({
      message: result.message || "Error deleting category",
      error: result.error,
    });
  }
}
