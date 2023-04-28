import { Router } from "express";
import { validateToken, login, createUser } from "../controllers/auth.js";

const router = Router();

// "/api/v1/auth"
router.post("/valtk", validateToken);
router.post("/", login);
router.post("/new-user", createUser);

export default router;
