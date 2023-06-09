import { DataTypes, Model, Op } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Category } from "./category.js";
import { OrderDetail } from "./orderDetail.js";

export class Product extends Model {
  static async getProduct(id) {
    try {
      const products = await this.findByPk(id);
      return { success: true, products };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getAllProducts() {
    try {
      const products = await this.findAll({
        attributes: [
          "product_id",
          "name",
          "price",
          [sequelize.col("category.name"), "categoryName"],
          "stock",
          "image_url",
        ],
        include: { model: Category, attributes: [], as: "category" },
        raw: true,
        order: [["name", "ASC"]],
      });
      return { success: true, products };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addProduct(data) {
    try {
      const newProduct = await this.create(data);
      return { success: true, product: newProduct };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async updateProduct(id, data) {
    try {
      const product = await this.findByPk(id);
      if (!product) {
        return { success: false, message: "product not found" };
      }

      await product.update(data);
      return { success: true, product };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async deleteProduct(id) {
    try {
      const product = await this.findByPk(id);
      if (!product) {
        return { success: false, message: "Product not found" };
      }

      await product.destroy();
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getCategoriesCount(id) {
    try {
      const products = await this.findAll({
        attributes: [
          [
            sequelize.fn("COUNT", sequelize.col("Product.product_id")),
            "total_productos",
          ],
        ],
        include: { model: Category, attributes: ["name"], as: "category" },
        group: ["category.name"],
        raw: true,
      });
      return { success: true, products };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getproductRanking() {
    try {
      const products = await this.findAll({
        attributes: [
          "Product.product_id",
          "Product.name",
          "Product.image_url",
          [
            sequelize.fn(
              "SUM",
              sequelize.fn(
                "COALESCE",
                sequelize.col("OrderDetails.quantity"),
                0
              )
            ),
            "quantity",
          ],
        ],
        include: { model: OrderDetail, attributes: [] },
        group: ["Product.product_id"],
        raw: true,
        order: [["quantity", "DESC"]],
      });
      return { success: true, products };
    } catch (error) {
      return { success: false, error };
    }
  }
}

Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sku: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.NUMERIC(10),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
    },
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    underscored: true,
  }
);

OrderDetail.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Product.hasMany(OrderDetail, { foreignKey: "product_id", onDelete: "CASCADE" });
