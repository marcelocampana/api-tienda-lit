import { ShoppingCart } from "../models/shoppingCart.js";

export async function getShoppingCartItems(req, res) {
  const result = await ShoppingCart.getShoppingCartItems(req.params.userId);

  if (result.success) {
    res.status(200).json(result.cartItem);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching cart item", error: result.error });
  }
}

export async function addShoppingCartItem(req, res) {
  const result = await ShoppingCart.addShoppingCartItem(req.body);

  if (result.success) {
    res.status(201).json(result.cartItem);
  } else {
    res
      .status(400)
      .json({ message: "Error creating cart", error: result.error });
  }
}

export async function updateShoppingCartItem(req, res) {
  const result = await ShoppingCart.updateShoppingCartItem(
    req.params.id,
    req.body
  );

  if (result.success) {
    res.status(200).json(result.itemIntoCart);
  } else {
    res.status(400).json({
      message: result.message || "Error updating cart item",
      error: result.error,
    });
  }
}

export async function deleteShoppingCartItem(req, res) {
  const result = await ShoppingCart.deleteShoppingCartItem(req.params.id);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(400).json({
      message: result.message || "Error deleting cart item",
      error: result.error,
    });
  }
}
