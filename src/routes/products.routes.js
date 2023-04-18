import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
} from "../controllers/products.js";

const router = Router();

// Routes
router.get("/product/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
// router.put("/update-category/:id", updateCategory);
// router.delete("/delete-category/:id", deleteCategory);

export default router;
