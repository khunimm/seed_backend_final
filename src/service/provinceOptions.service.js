const db = require('./../config/sqlconfig');
const { provinceOptions } = db;

db.sequelize.sync();

async function find() {
    var result = await provinceOptions.findAll();
    
    var count = result.length;

    return { result: result, count: count }
}


module.exports = {
    find
};