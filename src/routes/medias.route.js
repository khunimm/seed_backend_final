const express = require("express");
const router = express.Router();
var path = require('path');

const mediaService = require("../service/medias.service");

router.get("/", async (req, res) => {
  try {
    // console.log('media route');
    res.json(await mediaService.find());
  } catch (error) {
    res.json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    var media = req.body;
    res.json(await mediaService.addMedia(media));
  } catch (error) {
    res.json(error);
  }
});

router.post("/editorUpload", async (req, res) => {
  try {
    var date = new Date().toISOString();
    const file = req.files.medias;

    var filepath = `/../public/editor/` + date + "_" + file.name;
    console.log("🚀 ~ file: medias.route.js:32 ~ router.post ~ filepath", filepath)
    file.mv(`${__dirname}${filepath}`, function (err, result) {});
    // var res_path =  path.relative(__dirname, filepath);
    console.log("🚀 ~ file: medias.route.js:34 ~ router.post ~ res_path", res_path)
    return res.status(200).json({url: filepath});
  } catch (err) {}
});

module.exports = {
  router,
};
