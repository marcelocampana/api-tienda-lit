import express from "express";
const app = express();
import cors from "cors";
import {
  auth,
  categories,
  colors,
  orderDetails,
  orders,
  products,
  shoppingCarts,
  users,
} from "./routes/index.js";
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
  Size,
  Variant,
  User,
  Role,
} from "./models/index.js";
import modelSync from "./utils/modelSync.js";

// Middlewares
app.set("port", process.env.PORT || 4000);
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: "*",
  })
);

// API Routes
app.use("/api/v1/categories", categories);
app.use("/api/v1/colors", colors);
app.use("/api/v1/products", products);
app.use("/api/v1/shopping-carts", shoppingCarts);
app.use("/api/users", users);
app.use("/api/v1/auth", auth);
app.use("/api/v1/orders", orders);
app.use("/api/v1/order-details", orderDetails);

//Sequelize DB Sync
//Descomentar hará que una tabla se vuelva a crear
(async function () {
  //await modelSync(Category);
  //await modelSync(Role);
  //await modelSync(User);
  //await modelSync(Color);
  //await modelSync(Size);
  //await modelSync(Product);
  //await modelSync(Variant);
  //await modelSync(CouponDiscount);
  //await modelSync(PaymentMethod);
  //await modelSync(Tax);
  //await modelSync(Order);
  // await modelSync(OrderDetail);
  //await modelSync(ShippingMethod);
  // await modelSync(ShoppingCart);

  app.listen(app.get("port"), () => {
    console.log(`Server on http://localhost:${app.get("port")}`);
  });
})();
