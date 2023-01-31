const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser  = require('body-parser')
const gymClubRouter = require('./routers/gymClub')
const gymClubSportInfoRouter = require('./routers/gymSportInfo')
const coachRouter = require("./routers/coach")
const coachCategoryRouter = require("./routers/coachCategory")
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://sportsClubApp:OnngmSpMbiriSkYx@engingulek.hscve.mongodb.net/sportsClubAppDatabase?retryWrites=true&w=majority")
mongoose.connection.once("open",()=>{
    console.log("Connect to DB!")

}).on("error",(error)=>{
    console.log("Failed to connect" + error)
})

app.use("/",gymClubRouter)
app.use("/",gymClubSportInfoRouter)
app.use("/",coachRouter)
app.use("/",coachCategoryRouter)


app.listen(3000,()=> { 
    console.log("Server is running on port 8080")
    })