import { DataTypes, Model } from "sequelize";
import sequelize from "../services/db_connection.js";
import { Role } from "./role.js";
import { hashPassword } from "../utils/hashPassword.js";

export class User extends Model {
  static async getUser(email) {
    try {
      const users = await User.findOne({
        where: {
          email: email,
        },
        attributes: [
          [sequelize.col("User.user_id"), "userId"],
          [sequelize.col("User.name"), "userName"],
          "email",
          "password",
          [sequelize.col("Role.name"), "roleName"],
        ],
        include: { model: Role, attributes: [] },
      });
      return { success: true, users };
    } catch (error) {
      return { success: false, error };
    }
  }

  static async addUser(data) {
    try {
      const hashedPassword = await hashPassword(data.password);
      const newUser = await this.create({
        name: data.name,
        email: data.email,
        password: hashedPassword,
      });
      const user = await User.findOne({
        where: {
          email: newUser.email,
        },
        attributes: [
          [sequelize.col("User.name"), "userName"],
          "email",
          "password",
          [sequelize.col("Role.name"), "roleName"],
        ],
        include: { model: Role, attributes: [] },
      });
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  }
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: { type: DataTypes.TEXT, allowNull: false, unique: true },
    password: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    underscored: true,
  }
);

User.belongsTo(Role, {
  foreignKey: { allowNull: false, defaultValue: 1, name: "role_id" },
});
Role.hasMany(User, {
  foreignKey: { allowNull: false, defaultValue: 1, name: "role_id" },
});
