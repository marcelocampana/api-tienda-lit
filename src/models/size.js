import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class Size extends Model {}
Size.init(
  {
    size_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    size_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Size",
    tableName: "sizes",
    underscored: true,
  }
);
