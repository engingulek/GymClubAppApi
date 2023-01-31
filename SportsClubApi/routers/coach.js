const express = require('express');
const router = express.Router();

const Coach = require('../models/Coach')

router.get("/coachs",(req,res)=>{
    Coach.find()
    .then(coachs=>{
        res.json({
            list:coachs,
            success : 1
        })
    }).catch(err=>{
        console.log(err)
    })
})

router.post("/createCoach",(req,res)=>{
    const newCreateCoach = new Coach({
        createUserId: req.body.createUserId,
        imageURL : req.body.imageURL,
        name : req.body.name,
     category : req.body.category,
       location : req.body.location,
    destination :req.body.destination,
        rating:req.body.rating,
        payPeriod : req.body.payPeriod,
        

    })
  
    newCreateCoach.save()
    res.json({
        list : [newCreateCoach],
        message : "success"
    })

})


module.exports = router