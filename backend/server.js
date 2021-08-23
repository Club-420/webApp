import express from "express"
import cors from "cors"
import website from "./api/website_test.route.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/testing", website)
app.use("*", (req, res) => res.status(404).json({message: "where are you looking son"}))

export default app

