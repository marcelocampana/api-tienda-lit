import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class Role extends Model {}
Role.init(
  {
    role_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true,
    },
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    underscored: true,
  }
);
