import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class PaymentMethod extends Model {}
PaymentMethod.init(
  {
    paymentMethodId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fee: {
      type: DataTypes.NUMERIC(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "PaymentMethod",
    tableName: "payment_methods",
    underscored: true,
  }
);
