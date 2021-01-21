const router = require('express').Router();
const User = require('../db').import('../models/user');

/*  ****USER SIGN UP***** */


router.post('/create', function (req, res) {

    User.create({
        email: req.body.user.email,
        password: req.body.user.password
    })
   
    .then(res.send("This is our user/create endpoint!")); 

});

module.exports = router;
