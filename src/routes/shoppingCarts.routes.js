import { Router } from "express";
import { addProductToCart } from "../controllers/shoppingCarts.js";

const router = Router();

// Routes

router.post("/add", addProductToCart);

export default router;
