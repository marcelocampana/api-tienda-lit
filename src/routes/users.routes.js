import { Router } from "express";
import { getUser, addUser } from "../controllers/users.js";

const router = Router();

// "/api/auth/";
router.post("/token", addUser);
router.get("/:email", getUser);

export default router;
