import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.get("/", controller.getTodos);
router.post("/", controller.createTodo);

export default router;
