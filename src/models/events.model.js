module.exports = ( sequelize, Sequelize ) => {
    const events = sequelize.define(
        'events',
        {
            e_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'e_id' },
            z_id: { type: Sequelize.INTEGER(), foreignKey: true, field: 'z_id' },
            el_id: { type: Sequelize.INTEGER(), foreignKey: true, field: 'el_id' },
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            start_recruit_date: { type: Sequelize.DATE(), allowNull: true, field: 'start_recruit_date' },
            end_recruit_date: { type: Sequelize.DATE(), allowNull: true, field: 'end_recruit_date' },
            member_limit: { type: Sequelize.INTEGER(), allowNull: true, field: 'member_limit' },
            member_amount: { type: Sequelize.INTEGER(), allowNull: true, field: 'member_amount' },
            start_date: { type: Sequelize.DATE(), allowNull: true, field: 'start_date' },
            end_date: { type: Sequelize.DATE(), allowNull: true, field: 'end_date' },
            description: { type: Sequelize.TEXT, allowNull: true, field: 'description' },
            img: { type: Sequelize.STRING(), allowNull: true, field: 'img' },
            point: { type: Sequelize.INTEGER(), allowNull: true, field: 'point' },
        },
        {
            tableName: 'events'
        }
    )
    return events;
}