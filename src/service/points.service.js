const db = require('./../config/sqlconfig');
const { points } = db;

db.sequelize.sync();

async function find() {
    var result = await points.findAll();
    
    var count = result.length;

    return { result: result, count: count }
}

async function addPoints(point) {
    try {
        var create_var = await points.create({
            product: point.product,
            img: point.img,
            score_product: point.score_product,
        })
        return { result: create_var }
    } catch (error) {
        return { result: error.message }
    }
    
}


module.exports = {
    find,
    addPoints
}