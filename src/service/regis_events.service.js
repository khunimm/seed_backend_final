const db = require("./../config/sqlconfig");
const { regisEvents, events, regisStatus, seedMembers } = db;

db.sequelize.sync();

async function find() {
  try {
    var result = await regisEvents.findAll({
      include: [{ model: regisStatus , require:true },
                { model: events, require:true},
                { model: seedMembers, require:true}],
    });

    var count = result.length;

    return { result: result, count: count };
  } catch (error) {
    console.log(error);
  }
}

async function mobileFind() {
  // // console.log('test')

  try {
    // // console.log(typeof(total));
    var result = await regisEvents.findAll();

    return { status: "success", result: result };
  } catch (error) {
    console.log(error);
    return { status: "error", data: error.message };
  }
}

async function mobileRegister(body) {
  // // console.log('test')

  try {
    var result = await regisEvents.count({
      where: {
        s_id: body.s_id,
        e_id: body.e_id,
      },
    });
    if (result == 0) {
      var create_var = await regisEvents.create({
        e_id: body.e_id,
        s_id: body.s_id,
        status_id: body.approve_status,
        approve_by: body.approve_by,
      });
      _status = "success";
    } else {
      _status = "duplicate";
    }

    return { status: _status };
  } catch (err) {
    console.log(err);
    return { status: "error", data: err.message };
  }
}

async function checkDataRegis(query) {
  // console.log(query)

  try {
    var result = await regisEvents.findOne({
      attributes: ["status_id"],
      where: {
        s_id: query.s_id,
        e_id: query.e_id,
      },
    });
    // // console.log(result.[approve_status[0]]);

    return { status: "success", data: result };
  } catch (err) {
    console.log(err);
    return { status: "error", data: err.message };
  }
}

async function cancelRegis(body) {
  try {
    // // console.log(body.s_id, body.e_id)

    var result = await regisEvents.destroy({
      where: {
        s_id: body.s_id,
        e_id: body.e_id,
      },
    });
    return { status: "delete success", data: result };
  } catch (err) {
    console.log(err);
    return { status: "error", data: err.message };
  }
}

async function checkStatus(query) {
  try {
    // // console.log(query)
    var limit = parseInt(query.limit);
    var result = await regisEvents.findAll({
      limit: limit,
      order: [["updated_at", "DESC"]],

      where: {
        s_id: query.s_id,
        status_id: query.approve_status,
      },
      include: [
        {
          model: events,
          required: true,
        },
      ],
    });
    return { status: "pending status success", data: result };
  } catch (err) {
    console.log(err);
    return { status: "error", data: err.message };
  }
  // // console.log(query)
}

async function countEventsSuccess(sid) {
  // // console.log(sid)

  try {
    var events = await regisEvents.count({
      where: {
        status_id: 3,
        s_id: sid,
      },
    });

    return { status: "event status success", data: events };
  } catch (err) {
    console.log(err);
    return { status: "error", data: err.message };
  }
}

async function updateStatus(id, target) {
  // console.log("dfsdfs")
  var result = await regisEvents.update(
    {
      status_id: target,
    },
    {
      where: {
        re_id: id,
      },
    }
  );
  return result;
}

module.exports = {
  find,
  mobileFind,
  mobileRegister,
  checkDataRegis,
  cancelRegis,
  checkStatus,
  countEventsSuccess,
};
