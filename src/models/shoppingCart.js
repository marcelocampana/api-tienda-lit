import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Product } from "./product.js";

export class ShoppingCart extends Model {
  static async addProductToCart(data) {
    try {
      const newShoppingCart = await this.create(data);
      return { success: true, category: newShoppingCart };
    } catch (error) {
      return { success: false, error };
    }
  }
}

ShoppingCart.init(
  {
    shoppingCartId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
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
    modelName: "ShoppingCart",
    tableName: "shopping_carts",
    underscored: true,
  }
);

ShoppingCart.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Product.hasMany(ShoppingCart, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
