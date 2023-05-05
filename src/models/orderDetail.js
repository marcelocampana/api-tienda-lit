import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Order } from "./order.js";
import { Product } from "./product.js";

export class OrderDetail extends Model {
  static async getOrderDetail(id) {
    try {
      const orders = await this.findByPk(id);
      return { success: true, orders };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getAllOrderDetails() {
    try {
      const orderDetails = await this.findAll();
      return { success: true, orderDetails };
    } catch (error) {
      return { success: false, errorDetails };
    }
  }

  static async addOrderDetail(data) {
    try {
      const newOrderDetail = await this.create(data);
      return { success: true, orderDetail: newOrderDetail };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getProductsByOrder(orderId) {
    try {
      const orders = await this.findAll({
        where: { order_id: orderId },
        attributes: [
          [sequelize.col("Product.name"), "product"],
          [sequelize.col("Product.price"), "price"],
          [sequelize.col("Product.image_url"), "image_url"],
          "OrderDetail.quantity",
        ],
        include: {
          model: Product,
          attributes: [],
        },
        raw: true,
      });
      return { success: true, orders };
    } catch (error) {
      return { success: false, error };
    }
  }
}
OrderDetail.init(
  {
    order_detail_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.NUMERIC(10),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.NUMERIC(10, 2),
    },
  },
  {
    sequelize,
    modelName: "OrderDetail",
    tableName: "order_details",
    underscored: true,
  }
);

OrderDetail.belongsTo(Order, { foreignKey: "order_id", onDelete: "CASCADE" });
Order.hasMany(OrderDetail, { foreignKey: "order_id", onDelete: "CASCADE" });
