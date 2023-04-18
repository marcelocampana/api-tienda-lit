import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { PaymentMethod } from "./paymentMethod.js";
import { CouponDiscount } from "./couponDiscount.js";
import { Tax } from "./tax.js";

export class Order extends Model {}
Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    billing_address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shipping_method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: "users",
          schema: "auth",
        },
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    underscored: true,
  }
);

Order.belongsTo(CouponDiscount, { foreignKey: "coupon_discount_id" });
CouponDiscount.hasMany(Order, { foreignKey: "coupon_discount_id" });

Order.belongsTo(PaymentMethod, { foreignKey: "payment_method_id" });
PaymentMethod.hasMany(Order, { foreignKey: "payment_method_id" });

Order.belongsTo(Tax, { foreignKey: "tax_id" });
Tax.hasMany(Order, { foreignKey: "tax_id" });
