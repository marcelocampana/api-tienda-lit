import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";

export class Color extends Model {
  static async addColor(data) {
    try {
      const newColor = await this.create(data);
      return { success: true, color: newColor };
    } catch (error) {
      return { success: false, error };
    }
  }
  static async getAllColors() {
    try {
      const colors = await this.findAll();
      return { success: true, colors };
    } catch (error) {
      return { success: false, error };
    }
  }
}
Color.init(
  {
    color_id: {
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
    modelName: "Color",
    tableName: "colors",
    underscored: true,
  }
);
