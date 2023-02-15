const { rejects } = require("assert");
const express = require("express");
const router = express.Router();

const uploadFileService = require("./../service/uploadFile.service")

router.post("/", async (req, res) => {
  try {
    // console.log('this is upload file route')
    //// console.log(req.files.data)
    var file = req.files.data
    var create_activity = JSON.parse(req.body.form)
    // // console.log("create activity:",create_activity.test)
    // // console.log("file:",create_activity)

    res.json(await uploadFileService.upload(file, create_activity));

    

  } catch (err) {
    console.log(err)
    res.json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
    try {
       // console.log('this is delete route')
       var id =  req.params.id
       res.json(await uploadFileService.deleteActivity(id));
    } catch (err) {
        res.json(err)
    }
})

router.patch("/updateActivity", async (req, res) => {
    try {
        // console.log('this is update route')
        var name = req.body.name
        var time_start = req.body.test
        var time_end = req.body.test2
        var file = req.body.file
        res.json(await uploadFileService.updateActivity(name,time_start,time_end,file))

    } catch (err) {
        res.json(err)
    }
})


module.exports = {
  router
}