import { Router } from "express";
import { addOrder, getAllOrders, getOrder } from "../controllers/orders.js";

const router = Router();
// "/api/v1/products"
router.get("/:id", getOrder);
router.get("/", getAllOrders);
router.post("/", addOrder);

export default router;
