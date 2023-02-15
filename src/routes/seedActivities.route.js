const express = require("express");
const router = express.Router();

const seedActivitiesService = require("./../service/seedActivities.service")

router.get("/", async (req, res) => {
  try {
    // console.log('this is route activities')
    res.json(await seedActivitiesService.find());
  } catch (err) {
    console.log(err)
    res.json(err);
  }
});

module.exports = {
  router
}
