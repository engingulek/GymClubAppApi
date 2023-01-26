const mongoose = require('mongoose')
const GymSportInfoSchema = new mongoose.Schema({
    imageName : {type:String,required:true},
    name : {type:String,required:true},
})
module.exports = mongoose.model("GymSportInfo",GymSportInfoSchema)