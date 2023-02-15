module.exports = ( sequelize , Sequelize ) => {
    const seedMembers = sequelize.define(
      'seed_id',
      {
  // ด้านล่างเป็นการตั้งค่า attribute ของ table นะครับ
  // ชื่อตัวแปรที่เราใช้เรียกแทน: { type: Sequelize.STRING(50), allowNull: false, field: 'ชื่อของ attribute' } 
  // สามารถใส่ option เพิ่มเติมได้นะครับเช่น primaryKey: true อะไรแบบนี้ 
  // แล้วก็อันนี้สำคัญ ** ไม่จำเป็นต้องสร้าง attribute ที่เป็น FK จาก table อื่นนะครับ เพราะเราจะไปกำหนด relation กันใน file index
          s_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 's_id' },
          z_id: { type: Sequelize.INTEGER(), foreignKey: true, field: 'z_id' },
          el_id: { type : Sequelize.INTEGER(), foreignKey: true, field: 'el_id' },
          first_name_th: { type: Sequelize.STRING(), allowNull: true, field: 'first_name_th' },
          last_name_th: { type: Sequelize.STRING(), allowNull: true, field: 'last_name_th' },
          gender: { type: Sequelize.STRING(), allowNull: true, field: 'gender' },
          birthday: { type: Sequelize.STRING(), allowNull: true, field: 'birthday' },
          education: { type: Sequelize.STRING(), allowNull: true, field: 'education' },
          province: { type: Sequelize.STRING(), allowNull: true, field: 'province' },
          zone: { type: Sequelize.STRING(), allowNull: true, field: 'zone' },
          email: { type: Sequelize.STRING(), allowNull: true, field: 'email' },
          phone_number: { type: Sequelize.INTEGER(), allowNull: true, field: 'phone_number' },
          school: { type: Sequelize.STRING(), allowNull: true, field: 'school' },
          religion: { type: Sequelize.STRING(), allowNull: true, field: 'religion' },
          score_rank: { type: Sequelize.INTEGER(), allowNull: true, field: 'score_rank' },
          point: { type: Sequelize.INTEGER(), allowNull: true, field: 'point' },
          created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
          updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
          nick_name_th: { type: Sequelize.STRING(), allowNull: true, field: 'nick_name_th' },
          first_name_en: { type: Sequelize.STRING(), allowNull: true, field: 'first_name_th' },
          last_name_en: { type: Sequelize.STRING(), allowNull: true, field: 'last_name_th' },
          nick_name_en: { type: Sequelize.STRING(), allowNull: true, field: 'nick_name_th' },
          id_number: { type: Sequelize.STRING(), allowNull: true, field: 'id_number' },
          seed_code: { type: Sequelize.STRING(), allowNull: true, field: 'seed_code' },
          img_profile: { type: Sequelize.STRING(), allowNull: true, field: 'img_profile' },
          events: { type: Sequelize.JSON(), allowNull: true, field: 'events' },
          badge_status: { type: Sequelize.BOOLEAN(), allowNull: true, field: 'badge_status' },
          is_member: {  type: Sequelize.BOOLEAN(), allowNull: true, field: 'is_member' }
          // id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'id' },
          // name: { type: Sequelize.STRING(18), allowNull: true, field: 'name' },
          // surname: { type: Sequelize.STRING(13), allowNull: true, field: 'surname' },
          // gender: { type: Sequelize.STRING(4), allowNull: true, field: 'gender' },
          // birthday: { type: Sequelize.DATE(), allowNull: true, field: 'birthday' },
          // education: { type: Sequelize.STRING(10), allowNull: true, field: 'education' },
          // province: { type: Sequelize.STRING(15), allowNull: true, field: 'province' },
          // zone: { type: Sequelize.STRING(20), allowNull: true, field: 'zone' },
          // email: { type: Sequelize.STRING(36), allowNull: true, field: 'email' },
          // tel: { type: Sequelize.STRING(12), allowNull: true, field: 'tel' },
          // school: { type: Sequelize.STRING(41), allowNull: true, field: 'school' },
          // religion: { type: Sequelize.STRING(9), allowNull: true, field: 'religion' },
          // picture: { type: Sequelize.STRING(512), allowNull: true, field: 'picture' },
          // thai_id: { type: Sequelize.STRING(20), allowNull: true, field: 'thai_id' },
          
      },
      {
          tableName: 'seed_id' 
      }
    );
    
    return seedMembers;
  }