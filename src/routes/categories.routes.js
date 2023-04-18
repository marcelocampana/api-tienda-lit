import { Router } from "express";
import {
  getCategory,
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const router = Router();

// "/api/v1/categories";
router.get("/:id", getCategory);
router.get("/", getAllCategories);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
