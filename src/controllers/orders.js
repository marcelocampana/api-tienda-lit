import { Order } from "../models/order.js";

export async function addOrder(req, res) {
  const result = await Order.addOrder(req.body);
  console.log(result);
  if (result.success) {
    res.status(201).json(result.order);
  } else {
    res
      .status(400)
      .json({ message: "Error creating order", error: result.error });
  }
}

export async function getOrder(req, res) {
  const result = await Order.getOrder(req.params.id);

  if (result.success) {
    res.status(200).json(result.orders);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching order", error: result.error });
  }
}

export async function getAllOrders(req, res) {
  const result = await Order.getAllOrders();
  if (result.success) {
    res.status(200).json(result.orders);
  } else {
    res
      .status(400)
      .json({ message: "Error fetching orders", error: result.error });
  }
}
