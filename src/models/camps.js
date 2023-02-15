// const { registerCamp } = require("../config/sqlconfig");
module.exports = ( sequelize , Sequelize ) => {
    const camps = sequelize.define(
      'camps',
      {
          id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'id' },
          time: { type: Sequelize.INTEGER(), allowNull: false, field: 'time' },
          display_text: { type: Sequelize.STRING(), allowNull: true, field: 'display_text' },
          is_show: { type: Sequelize.BOOLEAN(), allowNull: true, field: 'is_show' },
          location: { type: Sequelize.STRING(), allowNull: true, field: 'location' },
          start_date: { type: Sequelize.DATE(), allowNull: false, field: 'start_date' },
          end_date: { type: Sequelize.DATE(), allowNull: false, field: 'end_date' },
          is_expired: { type: Sequelize.BOOLEAN(), allowNull: true, field: 'is_expired' },
          // updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
          
      },
      {
          tableName: 'camps' 
      }
    );
    
    return camps;
  }