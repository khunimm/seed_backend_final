const express = require("express");
const router = express.Router();

const regisEventsService = require("../service/regis_events.service");

router.get("/", async (req, res) => {
  try {
    // console.log('news route');
    res.json(await regisEventsService.find());
  } catch (error) {
    res.json(error);
  }
});

router.get("/mobile/", async (req, res) => {
  try {
    // // console.log('req.query');
    // // // console.log('news route');
    res.json(await regisEventsService.mobileFind());
  } catch (error) {
    res.json(error);
  }
});

router.post("/mobile/register/events", async (req, res) => {
  try {
    // // console.log('req.query');
    // // // console.log('news route');
    res.json(await regisEventsService.mobileRegister(req.body));
  } catch (error) {
    res.json(error);
  }
});

router.get("/mobile/register/check", async (req, res) => {
  try {
    // // console.log('req.query');
    // // // console.log('news route');
    res.json(await regisEventsService.checkDataRegis(req.query));
  } catch (error) {
    res.json(error);
  }
});

router.delete("/mobile/register/cancel", async (req, res) => {
  try {
    // // console.log('req.query');
    // // // console.log('news route');
    res.json(await regisEventsService.cancelRegis(req.body));
  } catch (error) {
    res.json(error);
  }
});

router.get("/mobile/register/checkStatus", async (req, res) => {
  try {
    // // console.log('req.query');
    // // // console.log('news route');
    res.json(await regisEventsService.checkStatus(req.query));
  } catch (error) {
    res.json(error);
  }
});

router.get("/mobile/countEventsSuccess/:s_id", async (req, res) => {
  try {
    //   // console.log('find id success');
    // // console.log(req.params.s_id);
    res.json(await regisEventsService.countEventsSuccess(req.params.s_id));
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.patch("/update/isApproved", async (req, res) => {
  try {
    var id = req.body.re_id;
    var target = req.body.target;
    res.json(await regisEventsService.updateStatus(id, target));
  } catch (err) {
    res.json(err);
  }
});

router.patch("/update/point", async (req, res) => {
  try {
    var re_id = req.body.re_id;
    var target = req.body.target;
    var s_id = req.body.s_id;
    var point = req.body.point;
    res.json(await regisEventsService.updatePoint(re_id, target, s_id, point));
  } catch (err) {
    res.json(err);
  }
});

router.get("/findPendingMembers/:approved_status", async (req, res) => {
  try {
    var status_id = req.params.approved_status
    res.json(await regisEventsService.findPendingMembers(status_id));
  } catch (err) {
    res.json(err);
  }
})

router.get("/findApprovedMembers/:approved_status", async (req, res) => {
  try {
    var status_id = req.params.approved_status
    res.json(await regisEventsService.findApprovedMembers(status_id));
  } catch (err) {
    res.json(err);
  }
})

module.exports = {
  router,
};
