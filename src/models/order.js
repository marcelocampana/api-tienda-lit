import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { PaymentMethod } from "./paymentMethod.js";
import { CouponDiscount } from "./couponDiscount.js";
import { Tax } from "./tax.js";
import { User } from "./user.js";

export class Order extends Model {
  static async getOrder(id) {
    try {
      const orders = await this.findByPk(id);
      return { success: true, orders };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getAllOrders() {
    try {
      const orders = await this.findAll({ order: [["order_id", "DESC"]] });
      return { success: true, orders };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addOrder(data) {
    try {
      const newOrder = await this.create(data);
      return { success: true, order: newOrder };
    } catch (error) {
      return { success: false, error };
    }
  }
}
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
    customer_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customer_email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customer_phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customer_postalcode: {
      type: DataTypes.TEXT,
    },
    guest_id: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4,
      unique: true,
    },
    shipping_address: {
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
  },
  {
    sequelize,
    modelName: "Order",
    tableName: "orders",
    underscored: true,
  }
);

Order.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Order, { foreignKey: "user_id" });

Order.belongsTo(CouponDiscount, { foreignKey: "coupon_discount_id" });
CouponDiscount.hasMany(Order, { foreignKey: "coupon_discount_id" });

Order.belongsTo(PaymentMethod, { foreignKey: "payment_method_id" });
PaymentMethod.hasMany(Order, { foreignKey: "payment_method_id" });

Order.belongsTo(Tax, { foreignKey: "tax_id" });
Tax.hasMany(Order, { foreignKey: "tax_id" });
