const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require('path');

const seedMembersService = require("./../service/seedMembers.service")

router.get("/", async (req, res) => {
  try {
    // console.log('this is route')
    res.json(await seedMembersService.find());
  } catch (err) {
    res.json(err);
  }
});

router.patch("/search", async (req, res) => {
  try {
    // console.log('this is Search route')
    var search_values = req.body.search_values
    res.json(await seedMembersService.findSearch(search_values));
  } catch (err) {
    console.log(err)
    res.json(err);
  }
});

router.post("/add", async (req, res) => {
  try {
    var person = req.body
    res.json(await seedMembersService.addSeedMembers(person));
  } catch (err) {
    console.log(err);
    res.json(err)
  }
})

router.get("/mobile/findById/:s_id", async (req, res) => {
  try {
    // // console.log('find id success');
    // // console.log(req.params.s_id);
    res.json(await seedMembersService.mobileFindById(req.params.s_id));

  } catch (err) {
    console.log(err);
    res.json(err)
  }
})

router.get("/mobile/mobileFindScoreRankById/:score_rank", async (req, res) => {
  try {
    // // console.log('find id success');
    // // console.log(req.params.score_rank);
    res.json(await seedMembersService.mobileFindScoreRankById(req.params.score_rank));

  } catch (err) {
    console.log(err);
    res.json(err)
  }
})

router.patch("/mobile/updateProfile/:s_id", async (req, res) => {
  try {
    // var date = new Date().toISOString();
    // const file = req.files.file
    // var filepath = `/../public/profile/` + date + "_" + file.name;
    // // console.log(filepath);
    // file.mv(`${__dirname}${filepath}`, function (err, result) { })


    // console.log('--------------------------------')
    // console.log(req.body)
    // console.log(req.files)
    // console.log('--------------------------------')

    var folder_path = path.join(__dirname, '../public/profile/' + req.body.s_id);
    if (req.files != null) {
      fs.mkdir(folder_path, async (err) => {
        if (err) {
          // return console.error(err);
          fs.readdir(folder_path, (err, files) => {
            if (err) throw err;

            for (const file of files) {
              fs.unlink(path.join(folder_path, file), (err) => {
                if (err) throw err;
              });
            }
            // console.log('del')
          });
        }
        // console.log('Directory created successfully!');
        //continue
        // console.log('1')
        var date = new Date().toISOString();
        const file = req.files.file
        var filepath = `/../public/profile/` + req.body.s_id + '/' + date + "_" + file.name;
        // console.log('2')
        // console.log(filepath);
        file.mv(`${__dirname}${filepath}`, function (err, result) { })
        // console.log('3')
        res.json(await seedMembersService.updateProfile(req.body, filepath));
      });
    }
    else{
      res.json(await seedMembersService.updateProfile(req.body, null));
    }



  } catch (err) {
    console.log(err);
    res.json(err)
  }
})


router.get("/mobile/myRank/", async (req, res) => {
  try {
    // // console.log('updateProfile success');
    // // console.log("efef");
    res.json(await seedMembersService.myRank(req.query));

  } catch (err) {
    console.log(err);
    res.json(err)
  }
})



module.exports = {
  router
}
