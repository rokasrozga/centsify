import "reflect-metadata"
import express from "express"
import dotenv from "dotenv"
import router from "./routes/routes"
import { database } from "./lib/db"

dotenv.config()
const app = express()

app.use(express.json())
app.use("/api", router)

database.initialize()
.then(() => {
    console.log("Database connected")
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Express server started on port: ${process.env.SERVER_PORT}`)
    })
})
.catch(error => {
    console.log(error)
})
