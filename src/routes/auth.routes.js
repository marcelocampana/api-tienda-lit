import { Router } from "express";
import {
  encryptPassword,
  validateToken,
  login,
  createUser,
} from "../controllers/auth.js";

const router = Router();

// "/api/v1/auth"
router.get("/validate-token", validateToken);
router.post("/encrypt-password", encryptPassword);
router.post("/", login);
router.post("/new-user", createUser);

export default router;
