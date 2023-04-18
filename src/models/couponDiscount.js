import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class CouponDiscount extends Model {}
CouponDiscount.init(
  {
    coupon_discount_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    discount_type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    value: {
      type: DataTypes.NUMERIC(10),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
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
    tableName: "coupon_discounts",
    underscored: true,
  }
);
