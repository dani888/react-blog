import express from "express";
import { getPosts, createPost, getSinglePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

router.get("/:topic", getSinglePost);

export default router;
