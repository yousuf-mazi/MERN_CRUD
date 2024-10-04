const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const userSchema = require('../schema/userSchema')
const User = new mongoose.model("User", userSchema)


// Get all the users
router.get('/', async(req,res)=>{
    try{
        const Users = await User.find()
        res.json(Users);
    }catch{
        res.status(500).json(
            {error:'There was a server side error!'               
        });
    }
});


// post todo
router.post('/', async(req,res)=>{
    try{
        const newUser = new User (req.body);
        await newUser.save()
        res.status(200).json(
            {mss:'User eas inserted successFully !'
        })
    }catch{
        res.status(500).json(
            {error:'There was a server side error!'               
        });
    }

});

// update user
router.put('/:id', async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({user})
    }catch{
        res.status(500).json(
            {error:'There was a server side error!'               
        });
    }
});


// delete User
router.delete('/:id', async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json(
            {error:'User eas Delete successFully !'
        })
    }catch{
        res.status(500).json(
            {error:'There was a server side error!'               
        });
    }
});

module.exports = router
