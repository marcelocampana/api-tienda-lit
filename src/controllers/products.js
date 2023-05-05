import { Product } from "../models/product.js";

export async function addProduct(req, res) {
  const result = await Product.addProduct(req.body);

  if (result.success) {
    res.status(201).json(result.product);
  } else {
    res
      .status(400)
      .json({ message: "Error creating product", error: result.error });
  }
}

export async function getProduct(req, res) {
  const result = await Product.getProduct(req.params.id);

  if (result.success) {
    res.status(200).json(result.products);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching product", error: result.error });
  }
}

export async function getAllProducts(req, res) {
  const result = await Product.getAllProducts();
  if (result.success) {
    res.status(200).json(result.products);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching products", error: result.error });
  }
}

export async function updateProduct(req, res) {
  const result = await Product.updateProduct(req.params.id, req.body);
  if (result.success) {
    res.status(200).json(result.product);
  } else {
    res
      .status(400)
      .json({ message: "Error updating product", error: result.error });
  }
}

export async function deleteProduct(req, res) {
  const result = await Product.deleteProduct(req.params.id);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(400).json({
      message: result.message || "Error deleting category",
      error: result.error,
    });
  }
}

export async function getCategoriesCount(req, res) {
  const result = await Product.getCategoriesCount(req.params.id);

  if (result.success) {
    res.status(200).json(result.products);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching product", error: result.error });
  }
}

export async function getProductRanking(req, res) {
  console.log("controler");
  const result = await Product.getproductRanking();
  console.log(result);
  if (result.success) {
    res.status(200).json(result.products);
  } else {
    res
      .status(400)
      .json({ message: "Error ranking product", error: result.error });
  }
}
