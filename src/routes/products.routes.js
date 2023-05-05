import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getCategoriesCount,
  getProduct,
  getProductRanking,
  updateProduct,
} from "../controllers/products.js";

const router = Router();
// "/api/v1/products"
router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/count/:id", getCategoriesCount);
router.get("/ranking/product", getProductRanking);

export default router;
