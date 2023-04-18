import express from "express";
import path from "path";
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
app.set("port", process.env.PORT || 3001);
app.use(express.json());
const __dirname = path.dirname(new URL(import.meta.url).pathname);
//static files
app.use(express.static(path.join(__dirname, "./public")));
// API Routes
app.use("/api/categories", categories);
app.use("/api/colors", colors);
app.use("/api/products", products);
app.use("/api/cart", shoppingCarts);

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
