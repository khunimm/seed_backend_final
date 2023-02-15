module.exports = ( sequelize, Sequelize ) => {
    const regisStatus = sequelize.define(
        'regis_status',
        {
            status_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'status_id' },
            status: { type: Sequelize.INTEGER(), allowNull: false, field: 'status'},
        },
        {
            tableName: 'regis_status'
        }
    )
    return regisStatus;
}