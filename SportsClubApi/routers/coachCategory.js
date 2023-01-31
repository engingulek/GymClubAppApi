const express = require('express');
const router = express.Router();

const CoachCategory = require("../models/CoachCategory")


router.get("/coachCategories",(req,res)=>{
    CoachCategory.find()
    .then(coachCategories=>{
        res.json({
            list:coachCategories,
            success : 1
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/createCoachCategory",(req,res)=>{
    const coachCategory = new CoachCategory({
        imageName : req.body.imageName,
        name : req.body.name
    })
    coachCategory.save()
    res.json({
        success : 1,
        message : "success"
    })
})

module.exports = router