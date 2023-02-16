const e = require('express');
const db = require('./../config/sqlconfig');
const moment = require('moment');
const { events, seedMembers, regisEvents } = db;

db.sequelize.sync();

async function find() {
    try {
        var result = await events.findAll();

        var count = result.length;

        return { result: result, count: count }

    } catch (error) {
        console.log(error);
    }
}

async function mobileFind(query) {



    // // console.log(now.format());
    // // console.log(moment().subtract(7, 'days').toDate());

    // console.log(query);

    try {
        let now = moment();
        let el_id_keep = await seedMembers.findOne(

            {
                order: [['created_at', 'DESC']],

                where: { s_id: query.s_id }
            }
        )

        el_id_keep = el_id_keep.el_id
        // console.log(el_id_keep);
        if (el_id_keep) {
            let total = parseInt(query.total)

            // // console.log(typeof(total));
            let result = await events.findAll({

                where: {
                    el_id: el_id_keep,
                    end_recruit_date: {
                        [
                        db.op.gte
                        ]: now
                    },
                    z_id: query.z_id
                }, 
                limit: total,
                order: [['e_id', 'DESC']],
                include: [{
                    model: regisEvents,
                    required: false,
                    where: {
                        s_id: query.s_id
                    }
                }],
            });

            let count = result.length;

            return { result: result, count: count, status: 'success search events' }
        } else {
            return { status: 'failed search events' }
        }
    } catch (error) {
        console.log(error);
        return { status: "error", data: error.message }
    }

}

async function addEvents(path, info) {

    try {
        var result = await events.create({
            name: info.name,
            z_id: info.z_id,
            el_id: info.el_id,
            description: info.description,
            start_recruit_date: info.start_recruit_date,
            end_recruit_date: info.end_recruit_date,
            start_date: info.start_date,
            end_date: info.end_date,
            member_amount: info.member_amount,
            member_limit: info.member_limit,
            img: path,
            point: info.point,
        })

        return { status: 'success', result: result }
    } catch (error) {
        return { status: 'error', result: error.message }
    }

}

async function editEvents(info) {
  try {
    var result = await events.update(
      {
        name: info.name,
        zone: info.zone,
      },
      {
        where: {
          e_id: info.e_id,
        },
      }
    );

    return { status: "success", result: result };
  } catch (error) {
    return { status: "error", result: error.message };
  }
}

async function findEventDetails(id) {
  var result = await events.findOne({
    where: {
      e_id: id,
    },
  });
  return result;
}

module.exports = {
    find,
    mobileFind,
    addEvents,
    editEvents,
    findEventDetails
}