const db = require('../config/sqlconfig');
const { responseEducation } = db;

db.sequelize.sync();

async function findAll() {
    try {
        // // console.log('query');
        let result = await responseEducation.findAll()
        return { result: result, status: 'success search events' }

    } catch (error) {
        console.log(error.message);
        return { status: "error", data: error.message }
    }

}

async function requestResponseEducation(body, files) {
    // // console.log('requestResponseEducation test service')

    // console.log(body);
    try {
        let result = await responseEducation.count({
            where: {
                s_id: body.s_id,
            }
        })
        // // console.log(result);
        if (result == 0) {
            let create_var = await responseEducation.create({
                s_id: body.s_id,
                img: files
            })
            _status = 'success'
        }
        else {
            let create_var = await responseEducation.update({
                // s_id: body.s_id,
                img: files
            },
                {
                    where: {
                        s_id: body.s_id,
                    },
                }
            )
            _status = 'duplicate'
        }



        return { result: result, status: 'success search events' }
    } catch (err) {
        console.log(err)
        return { status: "error", data: err.message }
    }
}
module.exports = {
    findAll,
    requestResponseEducation,
}
