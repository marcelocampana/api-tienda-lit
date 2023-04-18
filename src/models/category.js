import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Product } from "./product.js";

export class Category extends Model {
  static async getCategory(id) {
    try {
      const categories = await this.findByPk(id);
      return { success: true, categories };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getAllCategories() {
    try {
      const categories = await this.findAll();
      return { success: true, categories };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addCategory(data) {
    try {
      const newCategory = await this.create(data);
      return { success: true, category: newCategory };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async updateCategory(id, data) {
    try {
      const category = await this.findByPk(id);
      if (!category) {
        return { success: false, message: "Category not found" };
      }

      await category.update(data);
      return { success: true, category };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async deleteCategory(id) {
    try {
      const category = await this.findByPk(id);
      if (!category) {
        return { success: false, message: "Category not found" };
      }

      await category.destroy();
      return { success: true, message: "Category deleted successfully" };
    } catch (error) {
      return { success: false, error };
    }
  }
}

Category.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
    underscored: true,
  }
);

Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });
