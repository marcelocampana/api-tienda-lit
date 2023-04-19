import { Router } from "express";
import {} from "../controllers/categories.js";
import { addVariant, getAllVariant } from "../controllers/variants.js";

const router = Router();

// "/api/v1/variant";
router.get("/", getAllVariant);
router.post("/", addVariant);

export default router;
