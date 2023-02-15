const express = require('express');
const router = express.Router();

const regisEventsService = require('../service/regis_events.service')

router.get('/', async (req, res) => {
    try {
        // console.log('news route');
        res.json(await regisEventsService.find());
    } catch (error) {
        res.json(error);
    }
})

router.get('/mobile/', async (req, res) => {
    try {
        // // console.log('req.query');
        // // // console.log('news route');
        res.json(await regisEventsService.mobileFind());
    } catch (error) {
        res.json(error);
    }
})

router.post('/mobile/register/events', async (req, res) => {
    try {
        // // console.log('req.query');
        // // // console.log('news route');
        res.json(await regisEventsService.mobileRegister(req.body));
    } catch (error) {
        res.json(error);
    }
})

router.get('/mobile/register/check', async (req, res) => {
    try {
        // // console.log('req.query');
        // // // console.log('news route');
        res.json(await regisEventsService.checkDataRegis(req.query));
    } catch (error) {
        res.json(error);
    }
})

router.delete('/mobile/register/cancel', async (req, res) => {
    try {
        // // console.log('req.query');
        // // // console.log('news route');
        res.json(await regisEventsService.cancelRegis(req.body));
    } catch (error) {
        res.json(error);
    }
})

router.get('/mobile/register/checkStatus', async (req, res) => {
    try {
        // // console.log('req.query');
        // // // console.log('news route');
        res.json(await regisEventsService.checkStatus(req.query));
    } catch (error) {
        res.json(error);
    }
})

router.get("/mobile/countEventsSuccess/:s_id", async (req, res) => {
    try {
    //   // console.log('find id success');
      // // console.log(req.params.s_id);
      res.json(await regisEventsService.countEventsSuccess(req.params.s_id));
  
    } catch (err) {
      console.log(err);
      res.json(err)
    }
  })
module.exports = {
    router
}