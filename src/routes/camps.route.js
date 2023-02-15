const express = require("express");
const router = express.Router();

const campsService = require('./../service/camps.service')

router.get("/findAndCount/:is_approved_camp", async (req, res) => {
  try {
    var is_approved_camp = req.params.is_approved_camp
    res.json(await campsService.findAndCountCamps(is_approved_camp));
  } catch (err) {
    res.json(err);
  }
});

module.exports = {
  router
}
