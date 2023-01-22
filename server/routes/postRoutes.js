import express from "express"
import * as dotenv from "dotenv"
import { v2 as cloudinary } from "cloudinary"

dotenv.config()

const router = express.Router()

router.route("/").post(async (req, res) => {
  
})

export default router