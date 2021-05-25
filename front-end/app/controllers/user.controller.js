const db = require('../models')
const bcrypt=require('bcrypt');
const config = require('../config/auth.config')
const jwt = require('jsonwebtoken');
const { request } = require('express');
const User = db.user;


signUp = (req,res,err)=>{
    const user = new User({
        firstName:req.body.firstname,
        lastName:req.body.lastname,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8),
    })
    user.save((err,user)=>{
       if(err){
           res.status(500).send({message:err})
       }
        res.status(200).send({message:`user inserted successfully!`})
    })
}

signIn=(req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({email:req.body.email}).exec((err,user)=>{
        if(err){
            res.status(500).send({message:err});
            return;
        }
        if(!user){
           return res.status(404).send({message:"user not found"});
        }
        const passwordIsValid= bcrypt.compareSync(req.body.password,user.password);
        if(!passwordIsValid){
            return res.status(404).send({
                accessToken:null,
                message:"Inavlid password"})
        }
        token = jwt.sign({id:user.id},config.secret,{expiresIn:86400})
        req.session.user_id=user.id;
        req.session.isLoggedIn = true;
        console.log(user);
        res.status(200).send({user})
    })
}

const userCont = { 
    signUp,
    signIn
}
module.exports = userCont;