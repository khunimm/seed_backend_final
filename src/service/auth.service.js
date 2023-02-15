const db = require("./../config/sqlconfig");

const { QueryTypes } = require("sequelize");

const jwt = require("../service/jwt.service");
const bcrypt = require("bcryptjs");

const { seedMembers, user } = db;

db.sequelize.sync();



async function signIn(user) {
  //* user.username / password
  // console.log('1', user);
  var found = await db.user.findOne({
    where: { username: user.username }
  });
  // console.log('2', found);
  if (found) {
    // var isValid = await bcrypt.compare(user.password, found.password);
    var isValid = user.password === found.password;

    if (isValid) {
      var token = jwt.signToken({
        id: found.id,
        username: found.username,
        email: found.email,
      });
      // console.log("complete");
      return {
        token: token,
        data: found,
        result: "sign success"
      }
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}

async function signOut(user) {
  // console.log("sign out service");

}

async function register(user) {
  hashed = await bcrypt.hash(user.password, 12);
}

async function findAll(user) {
  // console.log("find All service");

  try {
    var result = await seedMembers.findAll();

    return { status: "success", result: result }
  } catch (error) {

    return { status: "error", result: error }
  }
}

async function login(body) {
  // console.log(body);
  try {
    var result = await user.findOne({
      where: {
        email: body.email,
        // password: body.password
      }

    })
    if (result) {
      if (result.password == body.password) {

        var z_id = await seedMembers.findOne({
          where: {
            s_id: result.s_id,
          },
          // attributes: ["z_id"]
        })
        return { status: "success", data: result.s_id, zid: z_id.z_id }
      }
      else {
        return { status: "failed password" }
      }
      //login ถูก
      // return { status: "success", data: result }
    } else {
      //login ผิด
      return { status: "failed username" }
    }

  } catch (error) {
    console.log(error.message)
    return { status: "error", data: error.message }

  }
}

async function check_server() {
  try {
    return { status: "success" }
  } catch (error) {
    console.log(error.message)
    return { status: error.message }

  }
}


module.exports = {
  signIn,
  register,
  signOut,
  findAll,
  login,
  check_server
};
