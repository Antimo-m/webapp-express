import express from "express"
import index from "../Controller/controller.js"

const router = express.Router();

router.get("/", index)

export default router