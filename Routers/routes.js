import express from "express"
import {index, show}from "../Controller/controller.js"

const router = express.Router();

router.get("/", index)

router.get("/:id", show)

export default router