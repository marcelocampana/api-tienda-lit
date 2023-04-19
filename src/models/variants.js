import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Size } from "./size.js";
import { Color } from "./color.js";
import { Product } from "./product.js";

export class Variant extends Model {}
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
});
Variant.belongsTo(Size, {
  foreignKey: "size_id",
});

Color.hasMany(Variant, { foreignKey: "color_id" });
Variant.belongsTo(Color, { foreignKey: "color_id", as: "color" });

Product.hasMany(Variant, { foreignKey: "product_id" });
Variant.belongsTo(Product, { foreignKey: "product_id" });
