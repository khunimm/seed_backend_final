const express = require('express');
const router = express.Router();

const provinceService = require('../service/provinceOptions.service')

router.get('/', async (req, res) => {
    try {
        console.log('province route');
        res.json(await provinceService.find());
    } catch (error) {
        res.json(error);
    }
})

module.exports = {
    router
}