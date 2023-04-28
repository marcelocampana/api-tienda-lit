import { Router } from "express";
import {
  addShoppingCartItem,
  deleteShoppingCartItem,
  getShoppingCartItems,
  updateShoppingCartItem,
} from "../controllers/ShoppingCarts.js";

const router = Router();

// Routes

// "/api/v1/shopping-carts";
router.get("/:userId", getShoppingCartItems);
router.post("/", addShoppingCartItem);
router.put("/:id", updateShoppingCartItem);
router.delete("/:id", deleteShoppingCartItem);

export default router;
