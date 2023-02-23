const db = require("./../config/sqlconfig");
const { QueryTypes } = require("sequelize");
const { user } = require("./../config/sqlconfig");
const { registerCamp, regisStatus, events, camps, seedMembers } = db;
const { Op } = require("sequelize");
db.sequelize.sync();

async function find() {
  // console.log('first')
  // created_at = new Date().toDateString()
  // console.log('created_at: ', created_at)
  var result = await registerCamp.findAll({
    include: [
      { model: regisStatus, require: true },
      { model: events, require: true },
    ],
    where: {
      created_at: {
        [Op.gt]: new Date("2023-02-01 00:00:00"),
      },
    },
  });

  // // console.log(result)
  var count = result.length;
  return { result: result, count: count };
}
//Update approved start-------------------------------------------
async function updateIsApproved(id, target) {
  // console.log("dfsdfs")
  console.log("id: ", id," target: ", target);
  var result = await registerCamp.update(
    {
      status_id: target,
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
  var result = await registerCamp.findAll({
    include: [
      { model: regisStatus, require: true },
      { model: events, require: true },
    ],
    where: {
      status_id: approvedStatus,
    },
  });
  var count = result.length;

  return { result: result, count: count };
}

//search
async function searchValues(search_values, approved_status) {
  try {
    var obj = {};
    var count_all = 0;
    isFirst = true;
    var query_str = "SELECT * FROM registers_camp WHERE ";

    if (approved_status == 1) {
      query_str = "SELECT * FROM registers_camp WHERE isApproved = 1 AND ";
    } else if (approved_status == 0) {
      query_str = "SELECT * FROM registers_camp WHERE isApproved = 0 AND ";
    }

    if (search_values.Name_) {
      isFirst ? null : (query_str += "AND ");
      query_str += `CONCAT(first_name_th, first_name_en) LIKE '%${search_values.Name_}%'`;
      isFirst = false;
    }

    if (search_values.Lastname_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(last_name_th, last_name_en) LIKE '%${search_values.Lastname_}%'`;
      isFirst = false;
    }

    if (search_values.Nickname_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(nickname_th, nickname_en) LIKE '%${search_values.Nickname_}%'`;
      isFirst = false;
    }

    if (search_values.age_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` age = ${search_values.age_} `;
      isFirst = false;
    }

    if (search_values.Seed_time_) {
      isFirst ? null : (query_str += "AND ");
      query_str += `seed_times = ${search_values.Seed_time_} `;
      isFirst = false;
    }

    if (search_values.university_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(school) LIKE '%${search_values.university_}%'`;
      isFirst = false;
    }

    if (search_values.affiliation_name_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(affiliation_name) LIKE '%${search_values.affiliation_name_}%'`;
      isFirst = false;
    }

    if (search_values.affiliation_year_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(affiliation_year) LIKE '%${search_values.affiliation_year_}%'`;
      isFirst = false;
    }

    if (search_values.reward_year_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(reward_year) LIKE '%${search_values.reward_year_}%'`;
      isFirst = false;
    }

    if (search_values.activity_year_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(activity_year) LIKE '%${search_values.activity_year_}%'`;
      isFirst = false;
    }

    if (search_values.contact_) {
      isFirst ? null : (query_str += "AND ");
      query_str += ` CONCAT(tel,line,email,social_media) LIKE '%${search_values.contact_}%'`;
      isFirst = false;
    }

    // if(search_values.Nickname_){
    //   query_str += `CONCAT(nickname_th, nickname_en) LIKE '%${search_values.Nickname_} `
    // }

    var result = await db.sequelize.query(query_str, {
      type: QueryTypes.SELECT,
    });

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
    count_all = result.length;
    return {
      status: "success",
      result: result,
      count_all: count_all,
    };
  } catch (err) {
    // console.log(err);
    return { status: "error", result: err };
  }
}

async function registerMember(file, info) {
  try {
    var result = await registerCamp.create({
      e_id: info.e_id,
      identity_id: info.identity_id,
      title_th: info.title_th,
      first_name_th: info.first_name_th,
      last_name_th: info.last_name_th,
      title_en: info.title_en,
      first_name_en: info.first_name_en,
      last_name_en: info.last_name_en,
      nickname_th: info.nickname_th,
      nickname_en: info.nickname_en,
      sex: info.sex,
      birthdate: info.birthdate,
      age: info.age,
      education: info.education,
      grade: info.grade,
      school: info.school,
      schoolProvince: info.school,
      address: info.address,
      province: info.province,
      tel: info.tel,
      line: info.line,
      email: info.email,
      social_media: info.social_media,
      affiliation_name: info.affiliation_name,
      position: info.position,
      activity_year: info.activity_year,
      reward_year: info.reward_year,
      inquiry: info.inquiry,
      inquiry_text: info.inquiry_text,
      ans_1: info.ans_1,
      ans_2: info.ans_2,
      ans_3: info.ans_3,
      file: file.name,
    });
    return result;
  } catch (err) {
    console.log(
      "🚀 ~ file: registerCamp.service.js:253 ~ registerMember ~ err",
      err
    );
    return { result: err.message };
  }
}

async function checkRegisterStatus(id) {
  var result = await registerCamp.findOne({
    where: {
      identity_id: id,
    },
  });
  return result;
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
  registerMember,
  checkRegisterStatus,
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
