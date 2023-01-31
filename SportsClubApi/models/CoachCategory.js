const mongoose = require('mongoose')
const CoachCategorySchema = new mongoose.Schema({
    imageName : {type:String,required:true},
    name : {type:String,required:true},
})
module.exports = mongoose.model("CoachCategory",CoachCategorySchema )