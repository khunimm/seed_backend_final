const db = require('./../config/sqlconfig');
const { news } = db;

db.sequelize.sync();

async function find() {
    try {
        var result = await news.findAll();
    
        var count = result.length;
    
        return { result: result, count: count }
        
    } catch (error) {
        console.log(error);
    }

}
async function mobileFind(query) {

    
    try {
        var total = parseInt(query.total)

        // // console.log(typeof(total));
        var result = await news.findAll({
            order: [['created_at', 'DESC']],

            limit: total
        });
    
        var count = result.length;
    
        return { result: result, count: count }
        
    } catch (error) {
        console.log(error);
        return { status: "error", data: error.message }
    }

}

async function addNews(path, News) {
    console.log("🚀 ~ file: news.service.js:44 ~ addNews ~ path", path)
    console.log("🚀 ~ file: news.service.js:44 ~ addNews ~ News", News)
    try {
        var create_var = await news.create({
            name: News.name,
            img: path,
            description: News.description,
        })
        console.log("🚀 ~ file: news.service.js:52 ~ addNews ~ create_var", create_var)
        return { result: create_var }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    find,
    mobileFind,
    addNews,
    
    }