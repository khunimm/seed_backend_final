const db = require("./../config/sqlconfig");
const { QueryTypes } = require('sequelize');
const { seedMembers, registerCamp, ranks } = db;
db.sequelize.sync();

async function find() {
  // console.log('this is service')
  var result = await seedMembers.findAll();
  // console.log(result)
  var count = result.length;
  // console.log(count)
  return { result: result, count: count }
}

async function findSearch(search_values) {

  try {
    // console.log('this is Search service')
    // console.log(search_values.personal_information)
    var result = await seedMembers.findAll({
      where: {
        [db.op.or]: {
          name: { [db.op.like]: '%' + search_values.personal_information + '%' },
          gender: { [db.op.like]: '%' + search_values.personal_information + '%' },
          thai_id: { [db.op.like]: '%' + search_values.personal_information + '%' },
          // birthday:  search_values.personal_information.toString(),
          religion: { [db.op.like]: '%' + search_values.personal_information + '%' },
        }

        // name: search_values.personal_information,
      },
    })
    // var result = await seedMembers.findAll();
    // // console.log(result)
    // var count = result.length;
    var count = result.length
    // // console.log(result)
    return {
      result: result,
      count: count
    }
  }
  catch (err) {
    console.log(err)
  }

}
async function addSeedMembers(person_arr) {
  var status
  try {
    var result
    for (let person of person_arr) {
      result = await seedMembers.count({
        where: {
          thai_id: person.identity_id
        }
      })
      // console.log("i", result)
      if (result == 0) {
        // console.log(person.id);
        var is_seed_member = await registerCamp.update(
          {
            isSeedMember: 1
          },
          {
            where: {
              id: person.id
            }
          })

        var create_var = await seedMembers.create({
          name: person.first_name_th,
          surname: person.last_name_th,
          gender: person.sex,
          province: person.province,
          email: person.email,
          tel: person.tel,
          school: person.school,
          thai_id: person.identity_id
        })
        _status = 'success'
      }
      else {
        _status = 'duplicate'
      }

    }
    return _status
  } catch (err) {
    console.log(err)
  }
}

async function mobileFindById(sid) {
  // // console.log(sid);
  try {
    var result = await seedMembers.findOne({
      where: {
        s_id: sid,
      }
    })
    return { status: "success", data: result }
  } catch (error) {
    return { status: "error", data: error.message }

  }
}

async function mobileFindScoreRankById(score_rank) {
  // // console.log(score_rank);
  try {
    var result = await ranks.findOne({
      // order: [ [ 'score', 'DESC' ]],
      where: {
        score: { [db.op.gte]: score_rank }
      },
      attributes: ["name"],
    })

    if (result == null) {
      var result = await ranks.findOne({
        order: [['score', 'DESC']],

        attributes: ["name"],
      })
    }
    return { status: "success", data: result }
  } catch (error) {
    return { status: "error", data: error.message }

  }
}


async function updateProfile(body, files) {
  // console.log(body);
  try {
    if (files == null) {
      var result = await seedMembers.update(
        {
          email: body.email,
          phone_number: body.phone_number,
        },
        {
          where: {
            s_id: body.s_id,
          },
        }
      );
    }
    else {
      var result = await seedMembers.update(
        {
          email: body.email,
          phone_number: body.phone_number,
          img_profile: files
        },
        {
          where: {
            s_id: body.s_id,
          },
        }
      );
    }

    return { status: 'success', data: result }
  } catch (error) {
    return { status: "error", data: error.message }
  }
}

async function myRank(query) {
  // console.log(query)

  try {

    let myRank = await seedMembers.findOne({
      where: {
        s_id: query.s_id,
      },
      attributes: ["first_name_th", "score_rank", "img_profile"],
    })

    let topRegion = await seedMembers.findAll({
      attributes: ["first_name_th", "score_rank", "s_id", "img_profile"],
      order: [['score_rank', 'DESC']],
      limit: 50,
    })

    let topZone = await seedMembers.findAll({
      where: {
        z_id: query.z_id,
      },
      attributes: ["first_name_th", "score_rank", "s_id", "img_profile"],
      order: [['score_rank', 'DESC']],
      limit: 50,
    })



    return { status: 'success', myRank: myRank, topTenRegion: topRegion, topTenZone: topZone }
  } catch (error) {
    return { status: "error", data: error.message }
  }
}


module.exports = {
  find,
  findSearch,
  addSeedMembers,
  mobileFindById,
  updateProfile,
  mobileFindScoreRankById,
  myRank
};