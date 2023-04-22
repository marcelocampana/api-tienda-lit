import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Color } from "./color.js";
import { Category } from "./category.js";

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
        raw: true,
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
  },
  {
    sequelize,
    modelName: "Product",
    tableName: "products",
    underscored: true,
  }
);
