// const { registerCamp } = require("../config/sqlconfig");
module.exports = ( sequelize , Sequelize ) => {
    const registerCamp = sequelize.define(
      'registers_camp',
      {
  // ด้านล่างเป็นการตั้งค่า attribute ของ table นะครับ
  // ชื่อตัวแปรที่เราใช้เรียกแทน: { type: Sequelize.STRING(50), allowNull: false, field: 'ชื่อของ attribute' } 
  // สามารถใส่ option เพิ่มเติมได้นะครับเช่น primaryKey: true อะไรแบบนี้ 
  // แล้วก็อันนี้สำคัญ ** ไม่จำเป็นต้องสร้าง attribute ที่เป็น FK จาก table อื่นนะครับ เพราะเราจะไปกำหนด relation กันใน file index
          id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'id' },
          seed_id: { type: Sequelize.STRING(20), allowNull: false, field: 'seed_id' },
          first_name_th: { type: Sequelize.STRING(255), allowNull: false, field: 'first_name_th' },
          last_name_th: { type: Sequelize.STRING(255), allowNull: false, field: 'last_name_th' },
          first_name_en: { type: Sequelize.STRING(255), allowNull: false, field: 'first_name_en' },
          last_name_en: { type: Sequelize.STRING(255), allowNull: false, field: 'last_name_en' },
          nickname_th: { type: Sequelize.STRING(255), allowNull: false, field: 'nickname_th' },
          nickname_en: { type: Sequelize.STRING(255), allowNull: false, field: 'nickname_en' },

          province: { type: Sequelize.STRING(30), allowNull: false, field: 'province' },
          
          sex: { type: Sequelize.STRING(10), allowNull: false, field: 'sex' },
          age: { type: Sequelize.STRING(), allowNull: false, field: 'age' },
          
          school: { type: Sequelize.STRING(255), allowNull: false, field: 'school' },
          tel: { type: Sequelize.STRING(11), allowNull: false, field: 'tel' },
          line: { type: Sequelize.STRING(255), allowNull: false, field: 'line' },
          email: { type: Sequelize.STRING(255), allowNull: false, field: 'email' },
          grade: { type: Sequelize.INTEGER(), allowNull: true, field: 'grade' },

          affiliation_name: { type: Sequelize.STRING(255), allowNull: true, field: 'affiliation_name' },
          file: { type: Sequelize.TEXT(), allowNull: true, field: 'file' },
          affiliation_year: { type: Sequelize.TEXT(), allowNull: true, field: 'affiliation_year' },
          reward_year: { type: Sequelize.TEXT(), allowNull: true, field: 'reward_year' },
          activity_year: { type: Sequelize.TEXT(), allowNull: true, field: 'activity_year' },
          joined_seed_name: { type: Sequelize.STRING(255), allowNull: true, field: 'joined_seed_name' },
          hasJoinSeedBefore: { type: Sequelize.BOOLEAN(), allowNull: false, field: 'hasJoinSeedBefore' },
          seed_times: { type: Sequelize.STRING(1), allowNull: false, field: 'seed_times' },

          ans_1: { type: Sequelize.TEXT(), allowNull: false, field: 'ans_1' },
          ans_2: { type: Sequelize.TEXT(), allowNull: false, field: 'ans_2' },
          ans_3: { type: Sequelize.TEXT(), allowNull: false, field: 'ans_3' },

          whereComeFrom: { type: Sequelize.STRING(255), allowNull: false, field: 'whereComeFrom' },
          social_media: { type: Sequelize.STRING(255), allowNull: true, field: 'social_media' },
          address: { type: Sequelize.TEXT(), allowNull: false, field: 'address' },
          identity_id: { type: Sequelize.STRING(255), allowNull: false, field: 'identity_id' },
          isApproved: { type: Sequelize.BOOLEAN(), allowNull: false, field: 'isApproved' },
          isSeedMember: { type: Sequelize.INTEGER(), allowNull: false, field: 'isSeedMember' },

          created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
          // updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
          
      },
      {
          tableName: 'registers_camp' 
      }
    );
    
    return registerCamp;
  }