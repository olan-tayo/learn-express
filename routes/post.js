import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/posts/postControllers.js";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get a post
router.get("/:id", getPost);

// create a new post
router.post("/", createPost);

// update a  post
router.patch("/:id", updatePost);

// delete a  post
router.delete("/:id", deletePost);

export default router;
