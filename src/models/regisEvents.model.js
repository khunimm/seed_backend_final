module.exports = ( sequelize, Sequelize ) => {
    const regisEvents = sequelize.define(
        'regis_events',
        {
            re_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 're_id' },
            e_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: false, field: 'e_id' },
            s_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: false, field: 's_id' },
            status_id: { type: Sequelize.INTEGER(), allowNull: false, field: 'status_id' },
            approve_by: { type: Sequelize.STRING(), foreignKey: true, allowNull: true, field: 'approve_by'},
            approve_time: { type: Sequelize.DATE(), allowNull: true, field: 'approve_time'},
            created_at: { type: Sequelize.DATE(), allowNull: true, field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), allowNull: true, field: 'updated_at' },
        },
        {
            tableName: 'regis_events'
        }
    )
    return regisEvents;
}