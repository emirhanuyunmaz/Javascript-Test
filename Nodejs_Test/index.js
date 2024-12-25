// import express from "express"
// import dotenv from "dotenv"
// import cors from "cors"
// import mongoose from "mongoose"
// import todoRouter from "./router/todoRouter.js"

const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const todoRouter = require("./router/todoRouter")
const mongoose = require("mongoose")
const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

async function DB_connect (){
    mongoose.connect(process.env.DB_URL).then(() => console.log("DB connected")).catch((e) => console.log("DB ERR:",e))
}

DB_connect()

app.use("/todo",todoRouter)

app.get("/",(req,res) => {
    console.log("asd:",process.env.PORT);
    res.send("<h1>TODO APP API </h1>")
})

const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`Listen port ${port}`);
})

module.exports = app