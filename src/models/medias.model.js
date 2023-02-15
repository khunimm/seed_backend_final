module.exports = ( sequelize, Sequelize ) => {
    const medias = sequelize.define(
        'medias',
        {
            m_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'm_id' },
            name: { type: Sequelize.STRING(), allowNull: true, field: 'name' },
            size: { type: Sequelize.INTEGER(), allowNull: true, field: 'size' },
            dimension: { type: Sequelize.INTEGER(), allowNull: true, field: 'dimension' },
            type: { type: Sequelize.STRING(), allowNull: true, field: 'type' },
            path: { type: Sequelize.STRING(), allowNull: true, field: 'path' }
        },
        {
            tablename: 'medias'
        }

    )
    return medias;
}