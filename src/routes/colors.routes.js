import { Router } from "express";
import { addColor, getAllColors } from "../controllers/colors.js";

const router = Router();

//"/api/v1/colors";
router.get("/", getAllColors);
router.post("/", addColor);

export default router;
