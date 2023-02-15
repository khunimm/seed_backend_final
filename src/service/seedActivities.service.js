const db = require("./../config/sqlconfig");
const { QueryTypes } = require('sequelize');
const { seedActivities, seedMembers } = db;
db.sequelize.sync();

async function find() {
  try {
     // console.log('this is service activities')
  // var result = await seedActivities.findAll()
  // console.log(result)
  // var count = result.length;
  // console.log(count)
  // return 1
  // console.log('this is service')
  var result = await seedActivities.findAll();
  // console.log(result)
  var count = result.length;
  // console.log(count)
  return {result:result,count:count}
  } catch (error) {
    console.log(error.message);
    return {status:'error',data:error.message};

  }
 
}

module.exports = {
  find
};