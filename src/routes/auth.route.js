const express = require("express");
const router = express.Router();

const authService = require('./../service/auth.service')

//test
router.post("/signin", async (req, res) => {
  try {
    // console.log("singin route")
    // console.log("body",req.body.username)
    
    res.json(await authService.signIn(req.body));
  } catch (err) {
    res.json(err);
    console.log(err)
  }
});

router.post("/signout", async (req, res) => {
    try {
        // console.log("sing out route")
        // // console.log("body",req.body)
        
        res.json(await authService.signOut(req.body));
    } catch (error) {
        res.json(err)
    }
})

router.get("/findAll", async (req, res) => {
  try {
      // console.log("findAll route")
      
      res.json(await authService.findAll(req.body));
  } catch (error) {
      res.json(err)
  }
})

router.post("/mobile/login", async (req, res) => {
  try {
      // console.log("findAll route")
      
      res.json(await authService.login(req.body));
  } catch (error) {
      res.json(err)
  }
})

router.get("/mobile/check_server", async (req, res) => {
  try {
      // console.log("check server success")
      
      res.json(await authService.check_server());
  } catch (error) {
      res.json(err)
  }
})

module.exports = {
  router
}
