import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class ShippingMethod extends Model {}

ShippingMethod.init(
  {
    shipping_method_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    delivery_time: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ShippingMethod",
    tableName: "shipping_methods",
    underscored: true,
  }
);
