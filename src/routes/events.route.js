const express = require('express');
const router = express.Router();

const eventsService = require('../service/events.service')


router.get('/', async (req, res) => {
    try {
        // console.log('news route');
        res.json(await eventsService.find());
    } catch (error) {
        res.json(error);
    }
})

router.get('/mobile/', async (req, res) => {
    try {
        // // console.log(req.query);
        // console.log('news route');
        res.json(await eventsService.mobileFind(req.query));
    } catch (error) {
        res.json(error);
    }
})

router.post('/add', async (req, res) => {
    try {
        var date = new Date().toISOString();
        const file = req.files.file
        console.log("🚀 ~ file: events.route.js:30 ~ router.post ~ file", file)
        var filepath = `/../public/event/` + date + "_" + file.name;
        file.mv(`${__dirname}${filepath}`, function (err, result) {})

        var info = req.body.form
        var obj = JSON.parse(info)
        console.log(obj)
        // var path_rel = path.relative(__dirname, filepath);
        // console.log("🚀 ~ file: news.route.js:26 ~ router.post ~ path_rel", path_rel)
        res.json(await eventsService.addEvents(filepath, obj));
    } catch (err) {
        res.json(err);
    }
})

router.get("/getById/:id", async (req, res) => {
    try {
      var id = req.params.id;
      // console.log(id)
      res.json(await eventsService.findEventDetails(id));
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  });
  
  router.patch("/edit", async (req, res) => {
    try {
  
      var info = req.body.form;
      var obj = JSON.parse(info);
      res.json(await eventsService.editEvents(obj));
    } catch (err) {
      res.json(err);
    }
  });

module.exports = {
    router
}