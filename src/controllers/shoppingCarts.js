import { ShoppingCart } from "../models/shoppingCart.js";

export async function addProductToCart(req, res) {
  console.log(req.body);
  const result = await ShoppingCart.addProductToCart({
    product_id: req.body.product_id,
    userId: "d841a2d9-d82b-44ae-b1cc-66c8b100ac10",
    quantity: 1,
  });

  if (result.success) {
    // res.status(201).json(result.shoppingCart);
    res.redirect("/");
  } else {
    res
      .status(400)
      .json({ message: "Error creating cart", error: result.error });
  }
}
