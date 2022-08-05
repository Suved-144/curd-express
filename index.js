const { json } = require('body-parser')
const express = require('express')
//const { PromiseProvider } = require('mongoose')
const app = express()
// const port = 2000
const mongoose = require("mongoose")
require ("dotenv").config()
const bodyParser = require("body-parser")
const coursesRouter = require("./routes/courses")
app.use(bodyParser.json())

app.use('/',coursesRouter)
mongoose.connect(process.env.DB_URL,() =>{
    console.log("Connected")
})

app.listen(process.env.PORT, () =>{
    console.log(`server is running on ${process.env.PORT}`)
})