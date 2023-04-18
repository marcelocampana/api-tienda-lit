import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class Tax extends Model {}

Tax.init(
  {
    tax_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    percentage: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false,
    },
    applicability: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Tax",
    tableName: "taxes",
    underscored: true,
  }
);
