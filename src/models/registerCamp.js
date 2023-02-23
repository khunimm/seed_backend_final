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
        e_id: { type: Sequelize.INTEGER(), allowNull: true, field: 'e_id' },
        identity_id: { type: Sequelize.STRING(255), allowNull: true, field: 'identity_id' },
        seed_id: { type: Sequelize.STRING(20), allowNull: true, field: 'seed_id' },
        title_th: { type: Sequelize.STRING(255), allowNull: true, field: 'title_th' },
        first_name_th: { type: Sequelize.STRING(255), allowNull: true, field: 'first_name_th' },
        last_name_th: { type: Sequelize.STRING(255), allowNull: true, field: 'last_name_th' },
        title_en: { type: Sequelize.STRING(255), allowNull: true, field: 'title_en' },
        first_name_en: { type: Sequelize.STRING(255), allowNull: true, field: 'first_name_en' },
        last_name_en: { type: Sequelize.STRING(255), allowNull: true, field: 'last_name_en' },
        nickname_th: { type: Sequelize.STRING(255), allowNull: true, field: 'nickname_th' },
        nickname_en: { type: Sequelize.STRING(255), allowNull: true, field: 'nickname_en' },
        sex: { type: Sequelize.STRING(10), allowNull: true, field: 'sex' },
        birthdate: { type: Sequelize.STRING(), allowNull: true, field: 'birthdate' },
        age: { type: Sequelize.STRING(), allowNull: true, field: 'age' },
        education: { type: Sequelize.STRING(), allowNull: true, field: 'education' },
        grade: { type: Sequelize.INTEGER(), allowNull: true, field: 'grade' },
        school: { type: Sequelize.STRING(255), allowNull: true, field: 'school' },
        schoolProvince: { type: Sequelize.STRING(), allowNull: true, field: 'schoolProvince' },
        address: { type: Sequelize.TEXT(), allowNull: true, field: 'address' },
        province: { type: Sequelize.STRING(30), allowNull: true, field: 'province' },
        tel: { type: Sequelize.STRING(11), allowNull: true, field: 'tel' },
        line: { type: Sequelize.STRING(255), allowNull: true, field: 'line' },
        email: { type: Sequelize.STRING(255), allowNull: true, field: 'email' },
        social_media: { type: Sequelize.STRING(255), allowNull: true, field: 'social_media' },
        affiliation_name: { type: Sequelize.STRING(255), allowNull: true, field: 'affiliation_name' },
        position: { type: Sequelize.STRING(255), allowNull: true, field: 'position' },
        activity_year: { type: Sequelize.TEXT(), allowNull: true, field: 'activity_year' },
        reward_year: { type: Sequelize.TEXT(), allowNull: true, field: 'reward_year' },
        inquiry: { type: Sequelize.BOOLEAN(), allowNull: true, field: 'inquiry' },
        inquiry_text: { type: Sequelize.STRING(255), allowNull: true, field: 'inquiry_text' },
        ans_1: { type: Sequelize.TEXT(), allowNull: true, field: 'ans_1' },
        ans_2: { type: Sequelize.TEXT(), allowNull: true, field: 'ans_2' },
        ans_3: { type: Sequelize.TEXT(), allowNull: true, field: 'ans_3' },

        file: { type: Sequelize.TEXT(), allowNull: true, field: 'file' },

        status_id: { type: Sequelize.INTEGER(), allowNull: true, field: 'status_id' },
        isSeedMember: { type: Sequelize.INTEGER(), allowNull: true, field: 'isSeedMember' },
        created_at: { type: Sequelize.DATE(), field: 'created_at' },
        updated_at: { type: Sequelize.DATE(), field: 'updated_at' }

        
    },
    {
        tableName: 'registers_camp' 
    }
  );
  
  return registerCamp;
}