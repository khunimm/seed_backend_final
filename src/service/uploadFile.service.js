const db = require("./../config/sqlconfig");
const { QueryTypes } = require('sequelize');
const { uploadFile } = db;
db.sequelize.sync();

async function upload(file, create_activity) {

    var type_of_file = file.name.split('.')

    // console.log("activity name :",create_activity.create_activities)

    var concat_name = create_activity.create_activities.concat(".",type_of_file.slice(-1))
    // console.log("concat",concat_name)

    file.name = concat_name
    // console.log(file)

    file.mv(`${__dirname}/../public/activities/`+file.name,function(err){
        // console.log(err)
    })
    // console.log("complete")
    try {
        var upload_var = await uploadFile.create({
            name: create_activity.create_activities,
            image: file.name,
            organized_date: create_activity.test,
            end_date: create_activity.test2
        })
        // // console.log("auto-generated ID:", upload_var.id);
        // console.log("tetst")
        
    } catch (err) {
        console.log(err)
    }

}

async function deleteActivity(id){
    // console.log("ID",id)
    result = await uploadFile.destroy(
        {
            where:
            {
                id : id
            }
        }
    )
}


async function updateActivity(name,time_start,time_end,file){
    var result = await uploadFile.update(
        {
            
        }
    )
}
module.exports = {
  upload,
  deleteActivity,
  updateActivity
};











