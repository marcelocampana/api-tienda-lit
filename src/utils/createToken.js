import jwt from "jsonwebtoken";

export function createToken(user) {
  return jwt.sign(
    {
      userId: user.dataValues.userId,
      nombre: user.dataValues.userName,
      email: user.email,
      password: user.password,
      roleName: user.dataValues.roleName,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
}
