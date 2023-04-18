import express from "express";
const app = express();
import { categories, colors, products, shoppingCarts } from "./routes/index.js";
import {
  Category,
  Color,
  CouponDiscount,
  Order,
  OrderDetail,
  PaymentMethod,
  Product,
  ShippingMethod,
  Tax,
  ShoppingCart,
} from "./models/index.js";
import modelSync from "./utils/modelSync.js";

// Middlewares
app.set("port", process.env.PORT || 4000);
app.use(express.json());

// API Routes
app.use("/api/v1/categories", categories);
app.use("/api/v1/colors", colors);
app.use("/api/v1/products", products);
app.use("/api/v1/cart", shoppingCarts);

//DB Sync
(async function () {
  await modelSync(Category);
  await modelSync(Color);
  await modelSync(Product);
  await modelSync(CouponDiscount);
  await modelSync(PaymentMethod);
  await modelSync(Tax);
  await modelSync(Order);
  await modelSync(OrderDetail);
  await modelSync(ShippingMethod);
  await modelSync(ShoppingCart);

  app.listen(app.get("port"), () => {
    console.log(`Server on http://localhost:${app.get("port")}`);
  });
})();
