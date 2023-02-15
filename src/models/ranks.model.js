module.exports = ( sequelize, Sequelize ) => {
    const ranks = sequelize.define (
        'ranks',
        {
            r_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'r_id' },
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            score_rank: { type: Sequelize.INTEGER(), allowNull: true, field: 'score' },
            created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
            img: { type: Sequelize.STRING(), allowNull: true, field: 'img' },
        },
        {
            tableName: 'ranks'
        }
    )
    return ranks;
}