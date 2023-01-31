const mongoose = require('mongoose')
const CoachSchema = new mongoose.Schema ({
     createUserId: {type:String,required:true},
     imageURL : {type:String,required:true},
     name : {type:String,required:true},
     category : {type:Object,required:true},
     location :{type:Object,required:true},
     destination : {type:String,required:true},
     rating : {type:Number,required:true},
     payPeriod : {type:Object,required:true},
     
})

module.exports = mongoose.model("Coach",CoachSchema)