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

    try {
        var create_var = await news.create({
            name: News.name,
            img: path,
            description: News.description,
        })

        return { result: create_var }
    } catch (error) {
        console.log(error)
    }
}

async function editNews(path, info) {
    try {
      var result = await news.update(
        {
          name: info.name,
          description: info.description,
          img: path
        },
        {
          where: {
            n_id: info.n_id,
          },
        }
      );
      return { status: "success", result: result };
    } catch (error) {
      return { status: "error", result: error.message };
    }
  }
  
  async function findNewsDetails(id) {
    var result = await news.findOne({
      where: {
        n_id: id,
      },
    });
    return result;
  }

module.exports = {
    find,
    mobileFind,
    addNews,
    editNews,
    findNewsDetails
    
    }