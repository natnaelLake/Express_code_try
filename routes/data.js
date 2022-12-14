const express = require('express');
const router = express.Router();
const Store = require('../models/Store');
const {check,validationResult} = require('express-validator')
const db = require('../app')
// var entries = [];
// router.locals.entries = entries;

router.post('/', async (req, res)=>{

        const store = new Store({
            name: req.body.name,
            last: req.body.lname,
            email: req.body.email,
            status:req.body.status
        })
        const data = await store.save();
        res.render('index', {
            user: data
        })
    
});
module.exports = router;