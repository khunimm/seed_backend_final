module.exports = ( sequelize, Sequelize ) => {
    const news = sequelize.define (
        'news',
        {
            n_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'n_id'},
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            img: { type: Sequelize.STRING(), allowNull: true, field: 'img' },
            description: { type: Sequelize.STRING(), allowNull: true, field: 'description' },
            created_at: { type: Sequelize.DATE(), field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), field: 'updated_at' }
        },
        {
            tableName: 'news'
        }
    )
    return news;
}