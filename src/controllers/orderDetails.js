import { OrderDetail } from "../models/orderDetail.js";

export async function addOrderDetail(req, res) {
  const result = await OrderDetail.addOrderDetail(req.body);

  if (result.success) {
    res.status(201).json(result.orderDetail);
  } else {
    res
      .status(400)
      .json({ message: "Error creating order detail", error: result.error });
  }
}

export async function getOrderDetail(req, res) {
  const result = await OrderDetail.getOrderDetail(req.params.id);

  if (result.success) {
    res.status(200).json(result.orders);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching order detail", error: result.error });
  }
}

export async function getAllOrderDetails(req, res) {
  const result = await OrderDetail.getAllOrderDetails();
  if (result.success) {
    res.status(200).json(result.orderDetails);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching order details", error: result.error });
  }
}

export async function getProductsByOrder(req, res) {
  const result = await OrderDetail.getProductsByOrder(req.params.id);
  if (result.success) {
    res.status(200).json(result.orders);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching order details", error: result.error });
  }
}
