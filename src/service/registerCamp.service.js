const db = require("./../config/sqlconfig");
const { QueryTypes } = require('sequelize');
const { user } = require("./../config/sqlconfig");
const { registerCamp, camps , seedMembers } = db;
db.sequelize.sync();

async function find() {
  var result = await registerCamp.findAll();

  // // console.log(result)
  var count = result.length;
  return {
    data: result,
    count_all: count,
    count_camp1: camp_1,
    count_camp2: camp_2,
    count_camp3: camp_3,
    count_camp4: camp_4,
  };
}
//Update approved start-------------------------------------------
async function updateIsApproved(id, target) {
  // console.log("dfsdfs")
  // // console.log("id: ", id," target: ", target);
  var result = await registerCamp.update(
    {
      isApproved: target,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return result;
}
//Update approved end-----------------------------------------------

//Find single detail start------------------------------------------
async function findForSingleDetails(id) {
  var result = await registerCamp.findOne({
    where: {
      id: id,
    },
  });
  return result;
}

async function displayParticipants(approvedStatus) {
  //test
  var participants = [];
  var camps_result = await camps.findAll(); //* หาจำนวนแคมป์ที่ is-show
  //// console.log(camps_result)

  for (var i = 0, l = camps_result.length; i < l; i++) {
    var seed_time = camps_result[i].time;
    //// console.log('post',seed_time)

    var result = await registerCamp.findAll({
      where: {
        isApproved: approvedStatus,
        seed_times: seed_time,
      },
    });

    result.map((to_push) => {
      participants.push(to_push);
    });
  }

  return participants;
}

//search
async function searchValues(search_values, approved_status) {
  try {

    var obj = {};
    var count_all = 0
    isFirst = true;
    var query_str = 'SELECT * FROM registers_camp WHERE '

    if (approved_status == 1) {
      query_str = 'SELECT * FROM registers_camp WHERE isApproved = 1 AND '
    }
    else if (approved_status == 0) {
      query_str = 'SELECT * FROM registers_camp WHERE isApproved = 0 AND '
    }

    if (search_values.Name_) {
      isFirst ? null : query_str += 'AND '
      query_str += `CONCAT(first_name_th, first_name_en) LIKE '%${search_values.Name_}%'`
      isFirst = false;
    }

    if (search_values.Lastname_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(last_name_th, last_name_en) LIKE '%${search_values.Lastname_}%'`
      isFirst = false;
    }

    if (search_values.Nickname_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(nickname_th, nickname_en) LIKE '%${search_values.Nickname_}%'`
      isFirst = false;
    }

    if (search_values.age_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` age = ${search_values.age_} `
      isFirst = false
    }

    if (search_values.Seed_time_) {
      isFirst ? null : query_str += 'AND '
      query_str += `seed_times = ${search_values.Seed_time_} `
      isFirst = false
    }

    if (search_values.university_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(school) LIKE '%${search_values.university_}%'`
      isFirst = false
    }

    if (search_values.affiliation_name_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(affiliation_name) LIKE '%${search_values.affiliation_name_}%'`
      isFirst = false
    }

    if (search_values.affiliation_year_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(affiliation_year) LIKE '%${search_values.affiliation_year_}%'`
      isFirst = false
    }

    if (search_values.reward_year_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(reward_year) LIKE '%${search_values.reward_year_}%'`
      isFirst = false
    }

    if (search_values.activity_year_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(activity_year) LIKE '%${search_values.activity_year_}%'`
      isFirst = false
    }

    if (search_values.contact_) {
      isFirst ? null : query_str += 'AND '
      query_str += ` CONCAT(tel,line,email,social_media) LIKE '%${search_values.contact_}%'`
      isFirst = false
    }




    // if(search_values.Nickname_){
    //   query_str += `CONCAT(nickname_th, nickname_en) LIKE '%${search_values.Nickname_} `
    // }


    var result = await db.sequelize.query(
      query_str,
      {
        type: QueryTypes.SELECT
      }
    )

    // var result = await registerCamp.findAll({
    //   where: {  

    // [db.op.or]: [
    //   { last_name_th: { [db.op.substring]: search_values.Lastname_ } },
    //   { last_name_en: { [db.op.substring]: search_values.Lastname_ } },
    // ],
    // [db.op.or]: [
    //   { nickname_th: { [db.op.substring]: search_values.Nickname_ } },
    //   { nickname_en: { [db.op.substring]: search_values.Nickname_ } },
    // ],
    // seed_times: search_values.Seed_time,
    // age: search_values.age_,
    //   },
    // });
    // console.log(query_str)
    count_all = result.length
    return {
      status: "success",
      result: result,
      count_all: count_all
    }
  } catch (err) {
    // console.log(err);
    return { status: "error", result: err }
  }
}


// async function kaneFunction() {
//   try {
//     var seeds = await seedMembers.findAll()

//     for(var seed of seeds){
//       await user.create({
//         username: seed.email,
//         password: seed.thai_id,
//         sid:seed.sid
//       })
//     }
//     return "success"
//   } catch (error) {
//     // console.log(error.message);
//   }

// }

module.exports = {
  find,
  updateIsApproved,
  findForSingleDetails,
  displayParticipants,
  searchValues,
  // kaneFunction
};
















// //find approved start---------------------------------------------
// async function findByApprovedStatus() {
//   var result = await registerCamp.findAll({
//     where: {
//       isApproved: 1,
//     },
//   });
//   var count = result.length;
//   //camp count
//   var camp_1 = await registerCamp.count({
//     where: {
//       seed_times:1,
//       isApproved:1
//     }
//   });
//   var camp_2 = await registerCamp.count({
//     where: {
//       seed_times:2,
//       isApproved:1
//     }
//   });
//   var camp_3 = await registerCamp.count({
//     where: {
//       seed_times:3,
//       isApproved:1
//     }
//   });
//   var camp_4 = await registerCamp.count({
//     where: {
//       seed_times:4,
//       isApproved:1
//     }
//   });
//   return {
//     result : result,
//     count_all : count,
//     count_camp1 : camp_1,
//     count_camp2 : camp_2,
//     count_camp3 : camp_3,
//     count_camp4 : camp_4,
//   };
// }
// //find approved end-----------------------------------------------

// //find unapproved start-------------------------------------------
// async function findByUnApprovedStatus() {
//   var result = await registerCamp.findAll({
//     where: {
//       isApproved: 0,
//     },
//   });
//   var count = result.length;

//   // //camp count
//   var camp_1 = await registerCamp.count({
//     where: {
//       seed_times:1
//     }
//   });
//   var camp_2 = await registerCamp.count({
//     where: {
//       seed_times:2
//     }
//   });
//   var camp_3 = await registerCamp.count({
//     where: {
//       seed_times:3
//     }
//   });
//   var camp_4 = await registerCamp.count({
//     where: {
//       seed_times:4
//     }
//   });

//   return {
//     result : result,
//     count_all : count,
//     count_camp1 : camp_1,
//     count_camp2 : camp_2,
//     count_camp3 : camp_3,
//     count_camp4 : camp_4,
//   };
// }
// //find unapproved end---------------------------------------------
