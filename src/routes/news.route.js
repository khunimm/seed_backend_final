const express = require("express");
const router = express.Router();
var path = require("path");

const newsService = require("../service/news.service");

router.get("/", async (req, res) => {
  try {
    // console.log('news route');
    res.json(await newsService.find());
  } catch (error) {
    res.json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    var date = new Date().toISOString();
    const file = req.files.file;
    var filepath = `/../public/news/` + date + "_" + file.name;
    file.mv(`${__dirname}${filepath}`, function (err, result) {});

    var info = req.body.form;
    var obj = JSON.parse(info);
    console.log(obj);
    // var path_rel = path.relative(__dirname, filepath);
    // console.log("🚀 ~ file: news.route.js:26 ~ router.post ~ path_rel", path_rel)
    res.json(await newsService.addNews(filepath, obj));
  } catch (err) {
    res.json(err);
  }
});

router.get("/mobile", async (req, res) => {
  try {
    // // console.log(req.query);
    // // console.log('news route');
    res.json(await newsService.mobileFind(req.query));
  } catch (error) {
    res.json(error);
  }
});

router.patch("/edit", async (req, res) => {
  try {
    var date = new Date().toISOString();
    const file = req.files.file;
    var filepath = `/../public/news/` + date + "_" + file.name;
    file.mv(`${__dirname}${filepath}`, function (err, result) {});

    var info = req.body.form;
    var obj = JSON.parse(info);
    res.json(await newsService.editNews(filepath, obj));
  } catch (err) {
    res.json(err);
  }
});

module.exports = {
  router,
};
