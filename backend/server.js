import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config()
import productRoutes from "./routes/productRoutes.js"

connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("API is running...")
})
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
