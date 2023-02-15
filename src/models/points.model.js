module.exports = ( sequelize, Sequelize )  => {
    const points = sequelize.define(
        'points', 
        {
            p_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'p_id' },
            product: { type: Sequelize.STRING(), allowNull: true, field: 'product' },
            img: { type: Sequelize.STRING(), allowNull: true, field: 'img' },
            score_product: { type: Sequelize.INTEGER(), allowNull: true, field: 'score_product' },
            created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' }
        },
        {
            tableName: 'points'
        }
    )
    return points;
}