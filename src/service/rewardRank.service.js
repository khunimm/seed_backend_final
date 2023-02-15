const db = require('../config/sqlconfig');
const { rewardRank } = db;

db.sequelize.sync();

async function findAll(query){
    try {
        // console.log('query');
        let result = await rewardRank.findAll()
        return { result: result, status: 'success search events' }

    } catch (error) {
        // console.log(error.message);
        return { status: "error", data: error.message }
    }

}

async function redeemReward(body) {
    // // console.log('rewardRank test service')
    try {
        // // console.log(body);
        let result = await rewardRank.count({
            where: {
                s_id: body.s_id,
            }
        })
        // // console.log(body);
        if (result == 0) {
            let create_var = await rewardRank.create({
                s_id: body.s_id,
                el_id: body.el_id,
                first_name: body.first_name,
                last_name: body.last_name,
                phone_number: body.phone_number,
                email: body.email,
                address_description: body.address_description,
                district: body.district,
                sub_district: body.sub_district,
                province: body.province,
                zip_code: body.zip_code,
                status_response: body.status_response
            })
            _status = 'success'
        }
        else {
            _status = 'duplicate'
        }



        return { result: result, status: _status }
    } catch (err) {
        console.log(err)
        return { status: "error", data: err.message }
    }
}


module.exports = {
    findAll,
    redeemReward
}
