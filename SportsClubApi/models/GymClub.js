const mongoose = require('mongoose')
const GymClubSchema = new mongoose.Schema({
    createUserId : {type:String,required:true},
    imageUrl : {type:String,required:true},
    name : {type:String,required:true},
    rating : {type:Number,required:true},
    location : {type:Object,required:true},
    gymSportInfo : {type:Array,required:true},
    destination : {type:String,required:true},
    startClock : {type:String,required:true},
    finishClock : {type:String,required:true},
    payPeriod : {type:Object,required:true},
    
})

module.exports = mongoose.model("GymClub",GymClubSchema)