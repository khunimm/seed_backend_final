const db = require('./../config/sqlconfig');
const { medias } = db;

db.sequelize.sync();

async function find() {
    var result = await medias.findAll();
    
    var count = result.length;

    return { result: result, count: count }
}

async function addMedia(media) {
    try {
        var create_var = await medias.create({
            name: media.name,
            size: media.size,
            dimension: media.dimension,
            type: media.type,
            path: media.path,
        })
    } catch (error) {
        console.log(error.message);
    }
    
}


module.exports = {
    find,
    addMedia
}