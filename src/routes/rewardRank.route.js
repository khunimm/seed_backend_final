const express = require('express');
const router = express.Router();

const rewardRank = require('../service/rewardRank.service')

router.get('/findAll', async (req, res) => {
    try {
        console.log('test');
        // console.log('news route');
        res.json(await rewardRank.findAll(req.query));
    } catch (error) {
        res.json(error);
    }
})

router.post('/redeemReward', async (req, res) => {
    try {
        // console.log('requestResponseEducation test route');
        // console.log('news route');
        res.json(await rewardRank.redeemReward(req.body));
    } catch (error) {
        res.json(error);
    }
})

module.exports = {
    router
}