import express from "express";
const app = express();
import cors from "cors";
import {
  auth,
  categories,
  colors,
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
//app.use(cors());
app.use(
  cors({
    origin: "http://localhost:3000",
    allowedHeaders: "*",
  })
);

/* app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); */

// API Routes
app.use("/api/v1/categories", categories);
app.use("/api/v1/colors", colors);
app.use("/api/v1/products", products);
app.use("/api/v1/shopping-carts", shoppingCarts);
app.use("/api/users", users);
app.use("/api/v1/auth", auth);

//DB Sync
(async function () {
  // await modelSync(Category);
  //await modelSync(Role);
  //await modelSync(User);
  // await modelSync(Color);
  // await modelSync(Size);
  //await modelSync(Product);
  // await modelSync(Variant);
  // await modelSync(CouponDiscount);
  // await modelSync(PaymentMethod);
  // await modelSync(Tax);
  // await modelSync(Order);
  // await modelSync(OrderDetail);
  // await modelSync(ShippingMethod);
  //await modelSync(ShoppingCart);

  app.listen(app.get("port"), () => {
    console.log(`Server on http://localhost:${app.get("port")}`);
  });
})();
