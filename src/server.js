import express from "express";
const app = express();
import {
  categories,
  colors,
  products,
  sizes,
  variants,
  shoppingCarts,
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
} from "./models/index.js";
import modelSync from "./utils/modelSync.js";

// Middlewares
app.set("port", process.env.PORT || 4000);
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// API Routes
app.use("/api/v1/categories", categories);
app.use("/api/v1/colors", colors);
app.use("/api/v1/sizes", sizes);
app.use("/api/v1/products", products);
app.use("/api/v1/variants", variants);
app.use("/api/v1/carts", shoppingCarts);

//DB Sync
(async function () {
  // await modelSync(Category);
  // await modelSync(User);
  // await modelSync(Color);
  // await modelSync(Size);
  //await modelSync(Product);
  await modelSync(Variant);
  // await modelSync(CouponDiscount);
  // await modelSync(PaymentMethod);
  // await modelSync(Tax);
  // await modelSync(Order);
  // await modelSync(OrderDetail);
  // await modelSync(ShippingMethod);
  // await modelSync(ShoppingCart);

  app.listen(app.get("port"), () => {
    console.log(`Server on http://localhost:${app.get("port")}`);
  });
})();
