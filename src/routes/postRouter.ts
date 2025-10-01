import { Router } from "express";

import { getPosts } from "../controllers/posts.controller";

const router = Router();

// Define post-related routes here
router.get("/", getPosts);

export default router;