const express = require("express");
const router = express.Router();

const registerCampService = require("./../service/registerCamp.service");

router.get("/", async (req, res) => {
  try {
    res.json(await registerCampService.find());
  } catch (err) {
    res.json(err);
  }
});
//find approved start-----------------------------------------------------------
router.get("/approved", async (req, res) => {
  try {
    res.json(await registerCampService.findByApprovedStatus());
  } catch (err) {
    res.json(err);
  }
});
//find approved end-------------------------------------------------------------

//find unapproved start---------------------------------------------------------
router.get("/unapproved", async (req, res) => {
  try {
    res.json(await registerCampService.findByUnApprovedStatus());
  } catch (err) {
    res.json(err);
  }
});
//find unapproved end-------------------------------------------------------------

//update approved status start----------------------------------------------------
router.patch("/update/isApproved", async (req, res) => {
  try {
    var id = req.body.id;
    console.log("🚀 ~ file: registerCamp.route.js:37 ~ router.patch ~ id", id)
    var target = req.body.target;
    console.log("🚀 ~ file: registerCamp.route.js:39 ~ router.patch ~ target", target)
    
    res.json(await registerCampService.updateIsApproved(id, target));
  } catch (err) {
    res.json(err);
  }
});
//update approved status end------------------------------------------------------

//find single details-------------------------------------------------------------
router.get("/getById/:id", async (req, res) => {
  try {
    var id = req.params.id;
    // console.log(id)
    res.json(await registerCampService.findForSingleDetails(id));
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
//find single details-------------------------------------------------------------

router.get("/displayParticipants/:approvedStatus", async (req, res) => {
  try {
    var approvedStatus = req.params.approvedStatus;
    res.json(await registerCampService.displayParticipants(approvedStatus));
  } catch (err) {
    res.json(err);
  }
});

//search
router.patch("/search", async (req, res) => {
  try {
    //// console.log("test")
    var search_values = req.body.search_values;
    var approved_status = req.body.approved_status;

    Object.keys(search_values).forEach((key) => {
      if (
        ["Name_", "Lastname_", "Nickname_"].includes(key) &&
        !search_values[key]
      ) {
        search_values[key] = null;
      } else if (["age_"].includes(key) && !search_values[key]) {
        search_values[key] = null;
      }
    });
    res.json(
      await registerCampService.searchValues(search_values, approved_status)
    );
  } catch (err) {
    res.json(err);
  }
});

router.post("/addInfo", async (req, res) => {
  try {
    var date = new Date().toISOString();
    const file = req.files.file;
    var filepath = `/../public/news/` + date + "_" + file.name;
    file.mv(`${__dirname}${filepath}`, function (err, result) {});

    var info = JSON.parse(req.body.form);
    res.json(await registerCampService.registerMember(file, info));
    console.log(info);
  } catch (err) {
    res.json(err);
  }
});

router.get("/checkStatus", async (req, res) => {
  try {
    console.log(req.query);
    var id = req.query.id;
    console.log(id);
    res.json(await registerCampService.checkRegisterStatus(id));
  } catch (err) {
    //console.log(err)
    res.json(err);
  }
});

// router.get('/kane-lor-mak', async (req, res) => {
//     try{
//         res.json(await registerCampService.kaneFunction());
//     } catch (err) {
//         res.json(err);
//     }
// });

module.exports = {
  router,
};
