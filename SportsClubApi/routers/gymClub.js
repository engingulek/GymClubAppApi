const express = require('express');
const router = express.Router();

const GymClub = require('../models/GymClub')

router.get("/gymClubs",(req,res)=>{
    GymClub.find()
    .then(gymClubs=>{
        res.json({
            list:gymClubs,
            success : 1
        })
    }).catch(err=>{
        console.log(err)
    })
})


router.post("/createGymClub",(req,res)=>{
    const newGymClub = new GymClub ({
        createUserId : req.body.createUserId,
        imageUrl : req.body.imageUrl,
        name : req.body.name,
        rating : req.body.rating,
        location : req.body.location,
        gymSportInfo : req.body.gymSportInfo,
        destination : req.body.destination,
        startClock : req.body.startClock,
        finishClock : req.body. finishClock,
        payPeriod : req.body.payPeriod,
        comment : req.body.comment,
        registeredUsers  : req.body.registeredUsers 
    })
    newGymClub.save()
    res.json({
        success : 1,
        message : "success"
    })
})


module.exports = router