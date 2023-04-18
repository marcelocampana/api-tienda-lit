import { Router } from "express";
import { addColor } from "../controllers/colors.js";

const router = Router();

// Routes

router.post("/add-color", addColor);

export default router;
