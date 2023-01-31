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


router.post("/userGymAdvert",(req,res)=>{
    GymClub.find()
    .then(gymClubs => {
        var userGymClubAdvert = gymClubs.filter(g => g.createUserId == req.body.createUserId)
        
        if (userGymClubAdvert.length == 0 ){
            res.json({
                list: [],
                success : 1
            }) 
        }else{
    
            res.json({
                list :userGymClubAdvert,
                success : 0
            })      
        }
    })
})


router.post("/createGymClub",(req,res)=>{
    console.log("create çalıştı")
    console.log(req.body)
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
        
    })
    console.log(newGymClub)
    newGymClub.save()
   res.json({
        list : [newGymClub],
        message : "success"
    })
})






module.exports = router