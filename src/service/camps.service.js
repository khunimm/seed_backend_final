const db = require("./../config/sqlconfig");
const { camps, registerCamp } = db;
db.sequelize.sync();

async function findAndCountCamps(is_approved_camp) { //* รับ params is_approved
  try {
    var camps_result = await camps.findAll()   //* หาจำนวนแคมป์ที่ is-show

    var count_details_and_properties = []
    var count_all = 0;
    //// console.log(camps_result.length)
    //// console.log(camps_result[2].is_expired)

    for (var i = 0, l = camps_result.length; i < l; i++) {
        var seed_time = camps_result[i].time
        //// console.log(seed_time)
        var count_result = await registerCamp.count({
            where:{
                seed_times: seed_time,
                isApproved:is_approved_camp
            }
        })
        //// console.log(count_result)
        count_all = count_all + count_result
        //// console.log(count_all)

        
        count_details_and_properties.push({
            time : seed_time,
            count : count_result,
            display_text : camps_result[i].display_text,
            location:camps_result[i].location,
            is_expired:camps_result[i].is_expired,
        })
    }

      return {
        count_details_and_properties: count_details_and_properties,
        count_all: count_all
      };

    // // console.log(test);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    findAndCountCamps,
};
