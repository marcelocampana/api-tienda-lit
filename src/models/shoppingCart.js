import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Product } from "./product.js";
import { User } from "./user.js";

export class ShoppingCart extends Model {
  static async getShoppingCartItems(userId) {
    try {
      const cartItem = await this.findAll({
        attributes: ["shopping_cart_id", "user_id", "product_id", "quantity"],
        where: {
          user_id: userId,
        },
      });
      return { success: true, cartItem };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addShoppingCartItem(data) {
    try {
      const newShoppingCartItem = await this.create(data);
      return { success: true, cartItem: newShoppingCartItem };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async updateShoppingCartItem(id, data) {
    try {
      const itemIntoCart = await this.findByPk(id);
      if (!itemIntoCart) {
        return { success: false, message: "Item into cart not found" };
      }

      await itemIntoCart.update(data);
      return { success: true, itemIntoCart };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async deleteShoppingCartItem(id) {
    try {
      const itemIntoCart = await this.findByPk(id);
      if (!itemIntoCart) {
        return { success: false, message: "Cart Item not found" };
      }

      await itemIntoCart.destroy();
      return { success: true, message: "Cart item deleted successfully" };
    } catch (error) {
      return { success: false, error };
    }
  }
}

ShoppingCart.init(
  {
    shopping_cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  foreignKey: { name: "product_id", allowNull: false, onDelete: "CASCADE" },
});
Product.hasMany(ShoppingCart, {
  foreignKey: { name: "product_id", allowNull: false, onDelete: "CASCADE" },
});

ShoppingCart.belongsTo(User, {
  foreignKey: { name: "user_id", allowNull: false, onDelete: "CASCADE" },
});
User.hasMany(ShoppingCart, {
  foreignKey: { name: "user_id", allowNull: false, onDelete: "CASCADE" },
});
