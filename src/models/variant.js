import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Size } from "./size.js";
import { Color } from "./color.js";
import { Product } from "./product.js";

export class Variant extends Model {
  static async getVariant(id) {
    try {
      const variants = await this.findByPk(id);
      return { success: true, variants };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async getAllVariants() {
    try {
      const variants = await this.findAll({
        include: [
          {
            model: Color,
            attributes: ["name"],
            as: "color",
          },
          {
            model: Category,
            attributes: ["name"],
            as: "category",
          },
        ],
        raw: true,
      });
      return { success: true, variants };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addVariant(data) {
    try {
      const newVariant = await this.create(data);
      return { success: true, variant: newVariant };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async updateVariant(id, data) {
    try {
      const variant = await this.findByPk(id);
      if (!variant) {
        return { success: false, message: "Variant not found" };
      }

      await variant.update(data);
      return { success: true, variant };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async deleteVariant(id) {
    try {
      const variant = await this.findByPk(id);
      if (!variant) {
        return { success: false, message: "Variant not found" };
      }

      await variant.destroy();
      return { success: true, message: "Variant deleted successfully" };
    } catch (error) {
      return { success: false, error };
    }
  }
}

Variant.init(
  {
    variant_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Variant",
    tableName: "variants",
    underscored: true,
  }
);

Size.hasMany(Variant, {
  foreignKey: "size_id",
  onDelete: "CASCADE",
});
Variant.belongsTo(Size, {
  foreignKey: "size_id",
  onDelete: "CASCADE",
});

Color.hasMany(Variant, { foreignKey: "color_id", onDelete: "CASCADE" });
Variant.belongsTo(Color, {
  foreignKey: "color_id",
  onDelete: "CASCADE",
  as: "color",
});

Product.hasMany(Variant, {
  foreignKey: { name: "product_id", allowNull: false, onDelete: "CASCADE" },
});
Variant.belongsTo(Product, {
  foreignKey: { name: "product_id", allowNull: false, onDelete: "CASCADE" },
});
