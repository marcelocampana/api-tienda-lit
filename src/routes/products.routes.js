import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/products.js";

const router = Router();

// "/api/v1/products"
router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
// router.delete("/delete-category/:id", deleteCategory);

export default router;
