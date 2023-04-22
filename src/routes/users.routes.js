import { Router } from "express";
import { getUser, addUser } from "../controllers/users.js";

const router = Router();

// "/api/auth/";
router.post("/token", getUser);
router.post("/", addUser);

export default router;
