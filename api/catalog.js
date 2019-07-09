/* catalogue des smoothies */

var express = require('express');
const Smoothie = require('../models/smoothie');
const mongoose = require('mongoose');

var router = express.Router();

/* GET users listing. */
router.get('/list', async (req, res, next) => {

    try {
        const smoothies = await Smoothie.find({});
        console.log('Liste des smoothies : ', smoothies);
        res.send(smoothies);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }


    // var kiwi = smoothie.findById( ObjectId("5d244caa5549ceceb1a92344"));
    // console.log(kiwi);

    // res.send(smoothie); 
});

router.get('/:id', async (req, res, next) => {
    console.log('ok');
    try {
        const smoothie = await Smoothie.findById(mongoose.Types.ObjectId(req.params.id)).exec();
        console.log('Recette du :', smoothie);
        res.send(smoothie);

    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

module.exports = router;
