module.exports = ( sequelize, Sequelize ) => {
    const educationLevels = sequelize.define(
        'education_levels',
        {
            el_id: { type: Sequelize.INTEGER(), primaryKey: true, field: 'el_id' },
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' }
        },
        {
            tableName: 'education_levels'
        }
    )
    return educationLevels;
}