import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class CouponDiscount extends Model {}
CouponDiscount.init(
  {
    couponsDiscountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    discountType: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    value: {
      type: DataTypes.NUMERIC(10),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    conditions: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "CouponDiscount",
    tableName: "coupons_discounts",
    underscored: true,
  }
);
