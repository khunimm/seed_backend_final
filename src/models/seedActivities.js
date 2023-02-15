module.exports = ( sequelize , Sequelize ) => {
    const seedActivities = sequelize.define(
      'activities',
      {
  // ด้านล่างเป็นการตั้งค่า attribute ของ table นะครับ
  // ชื่อตัวแปรที่เราใช้เรียกแทน: { type: Sequelize.STRING(50), allowNull: false, field: 'ชื่อของ attribute' } 
  // สามารถใส่ option เพิ่มเติมได้นะครับเช่น primaryKey: true อะไรแบบนี้ 
  // แล้วก็อันนี้สำคัญ ** ไม่จำเป็นต้องสร้าง attribute ที่เป็น FK จาก table อื่นนะครับ เพราะเราจะไปกำหนด relation กันใน file index
          id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'id' },
          name: { type: Sequelize.STRING(512), allowNull: false, field: 'name' },
          image: { type: Sequelize.STRING(), allowNull: false, field: 'image' },
          organized_date: { type: Sequelize.DATE(), allowNull: false, field: 'organized_date' },
          end_date: { type: Sequelize.DATE(), allowNull: false, field: 'end_date' },
          // created_at: { type: Sequelize.DATE(), allowNull: true, field: 'created_at' },
          // updated_at: { type: Sequelize.DATE(), allowNull: true, field: 'province' },
          
          // updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
          
      },
      {
          tableName: 'activities' 
      }
    );
    
    return seedActivities;
  }