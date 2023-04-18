import { Router } from "express";
import {
  getCategory,
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";

const router = Router();

// Routes
router.get("/category/:id", getCategory);
router.get("/", getAllCategories);
router.post("/add-category", addCategory);
router.put("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);

export default router;
