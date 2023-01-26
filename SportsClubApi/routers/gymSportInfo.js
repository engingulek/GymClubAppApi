const express = require('express');
const router = express.Router();

const GymClubSportInfo = require("../models/GymSportInfo")

router.get("/gymClubInfos",(req,res)=>{
    GymClubSportInfo.find()
    .then(gymClubSportInfos=>{
        res.json({
            list:gymClubSportInfos,
            success : 1
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/createGymClubInfo",(req,res)=>{
    const gymClubSportInfo = new GymClubSportInfo({
        imageName : req.body.imageName,
        name : req.body.name
    })
    gymClubSportInfo.save()
    res.json({
        success : 1,
        message : "success"
    })
})

module.exports = router