const express = require('express');
const router = express.Router();

const pointsService = require('../service/points.service')

router.get('/', async (req, res) => {
    try {
        // // console.log('point route');
        res.json(await pointsService.find());
    } catch (error) {
        res.json(error);
    }
})

router.post('/add', async (req, res) => {
    try {
        var point = req.body
        res.json(await pointsService.addPoints(point));
    } catch (error) {
        res.json(error);
    }
})

module.exports = {
    router
}