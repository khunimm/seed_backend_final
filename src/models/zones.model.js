module.exports = ( sequelize, Sequelize ) => {
    const zones = sequelize.define(
        'zones',
        {
            z_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'z_id' },
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            created_at: { type: Sequelize.DATE(), field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), field: 'updated_at' },
        },
        {
            tableName: 'zones'
        }
    )
    return zones;
}