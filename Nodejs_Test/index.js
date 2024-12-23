const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const app = express()

dotenv.config()
app.use(cors())

app.get("/",(req,res) => {
    console.log("asd:",process.env.PORT);
    res.status(200).json({message:"Hello World"})
})

const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`Listen port ${port}`);
})