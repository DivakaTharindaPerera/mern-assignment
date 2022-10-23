const { request } = require('express');
const express =  require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/signupmodels');
const bcrypt = require('bcrypt');

router.post('/signup', async(req,res) =>{

    const salt = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, salt)

    const signUpUser = new signUpTemplateCopy({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:securePassword
    })
    signUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error => {
        res.json(error)
    })
})



module.exports = router;