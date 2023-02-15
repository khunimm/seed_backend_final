require('dotenv').config()
 // remove this after you've confirmed it working

const { Sequelize, Op } = require('sequelize');

var host = process.env.DB_HOST || 'localhost';
console.log(host)

//อันนี้เป็นส่วนที่ใช้ในการบอก Sequelize ว่าเราจะ connect ไปที่ไหน
const sequelize = new Sequelize(
  process.env.DB_NAME || 'seed_db', // นี่เป็นชื่อ DB ของเรานะครับ
  process.env.DB_USERNAME || 'root', // user ที่ใช้สรการเข้าไปยัง db
  process.env.DB_PASSWORD || 'password', // password 
  {
  host: process.env.DB_HOST || 'localhost', // host ของ db ที่เราสร้างเอาไว้
  //port:3040,
  dialect: process.env.DB_TYPE || 'mariadb', // 'mysql' | 'mariadb' | 'postgres' | 'mssql'   พวกนี้ใช่ก็ใช้ได้นะจ๊ะ
  define: {
    timestamps: false //ส่วนตรงนี้ก็เป็นการตั้งค่าเพิ่มเติม
  },
  logging: false
});

  const db = {};
  db.op = Op

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

//ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
  db.registerCamp = require("./../models/registerCamp")( sequelize , Sequelize );
  db.camps = require("./../models/camps")( sequelize , Sequelize );
  db.educationLevels = require('./../models/educationLevels.model')( sequelize, Sequelize );
  db.events = require("./../models/events.model")( sequelize, Sequelize );
  db.medias = require("./../models/medias.model")( sequelize, Sequelize );
  db.news = require('./../models/news.model')( sequelize, Sequelize );
  db.points = require('./../models/points.model')( sequelize, Sequelize );
  db.ranks = require('./../models/ranks.model')( sequelize, Sequelize );
  db.regisEvents = require('./../models/regisEvents.model')( sequelize, Sequelize );
  db.regisStatus = require('./../models/regisStatus.model')( sequelize, Sequelize );
  db.seedMembers = require('./../models/seedMembers')(sequelize ,Sequelize );
  db.user = require('./../models/users.model')( sequelize, Sequelize );
  db.zones = require('./../models/zones.model')( sequelize, Sequelize );
  db.responseEducation = require('./.././models/responseEducation.model')(sequelize ,Sequelize);
  db.rewardRank = require('./.././models/rewardRank.model')(sequelize ,Sequelize);
  db.seedActivities = require('./.././models/seedActivities')(sequelize ,Sequelize);

  db.uploadFile = require('./.././models/seedActivities')( sequelize , Sequelize)

  //++++++++++++++++
  db.role = require('../models/role.model')(sequelize , Sequelize)
  //++++++++++++++++
  //++++++++++++++++
  db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
  db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  });

  
  db.ROLES = ["user", "admin", "moderator"];
  //++++++++++++++++


  //ส่วนนี้เป็นการตั้งต่า relation นะครับ โดยเป็นการบอกว่าใน 1 team มีได้หลาย player ง่ายๆ ก็คือ relation แบบ 1:M 
  // db.team.hasMany(
  //   db.player,
  //   {
  //       foreignKey: { name: 'tid', field: 'tid' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
  //   }
  // );
  db.educationLevels.hasMany(
    db.seedMembers,
    {
      foreignKey: { name: 'el_id', field: 'el_id'},
    }
  );

  db.events.hasMany(db.regisEvents,{foreignKey: "e_id"});
  
  db.regisEvents.belongsTo(db.events, {foreignKey: "e_id", targetKey: "e_id"});

  db.regisStatus.hasMany(db.regisEvents, {foreignKey: "status_id", })
  db.regisEvents.belongsTo(db.regisStatus, {foreignKey: "status_id", targetKey: "status_id"});

  db.seedMembers.hasMany(db.regisEvents, {foreignKey: "s_id"})
  db.regisEvents.belongsTo(db.seedMembers, {foreignKey: "s_id", targetKey: "s_id"});


  
//ส่วนนี้เป็นการตั้ง relation แบบกลับกันกับด้านบน จริงแล้วเราไม่ตั้งก็ได้นะครับแต่ผมแนะนำให้ตั้งเอาไว้ เพราะเวลาที่เราไม่ได้ใส่ 
//line นี้จะทำให้เราสามารถใช้  team ในการหา player ได้อย่างเดียวและไม่สามารถใช้ player หา team ได้
  // db.player.belongsTo(db.team, { foreignKey: 'tid' });


  // db.events.belongsTo(db.regisEvents, { foreignKey: 'e_id' });

  module.exports = db;