import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();

// Define user-related routes here
router.get("/", getUsers);

export default router;
