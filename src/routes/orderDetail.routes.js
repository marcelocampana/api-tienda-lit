import { Router } from "express";
import {
  addOrderDetail,
  getAllOrderDetails,
  getOrderDetail,
  getProductsByOrder,
} from "../controllers/orderDetails.js";

const router = Router();
// "/api/v1/products"
router.get("/:id", getOrderDetail);
router.get("/products/:id", getProductsByOrder);
router.get("/", getAllOrderDetails);
router.post("/", addOrderDetail);

export default router;
