import app from "./server.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 8000


app.listen(port, ()=> {
    console.log(`listening on port : ${port}`)
})

