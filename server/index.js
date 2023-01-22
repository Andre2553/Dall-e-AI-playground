import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

import connectDB from "./mongodb/connect.js"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: "50mb" }))

app.get("/", async (req, res) => {
  res.send("hello Human from DALL-E ")
})

const startServer = async () => {
  const port = 8080
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(port, () => console.log(`started at http://localhost:${port}`))
  } catch (error) {
    console.error(error)
  }
}

startServer()