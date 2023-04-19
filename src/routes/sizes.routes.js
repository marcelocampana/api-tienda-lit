import { Router } from "express";
import { getAllSizes, addSize } from "../controllers/sizes.js";

const router = Router();

// "/api/v1/sizes";
router.get("/", getAllSizes);
router.post("/", addSize);

export default router;
