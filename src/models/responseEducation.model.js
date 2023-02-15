module.exports = (sequelize, Sequelize) => {
    const responseEducation = sequelize.define(
        'response_education',
        {
            re_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 're_id' },
            s_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 's_id' },
            created_at: { type: Sequelize.DATE(), allowNull: true, field: 'created_at' },
            img: { type: Sequelize.STRING(), allowNull: true, field: 'img' },
            status_response: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 'status_response' },
        },
        {
            tableName: 'response_education'
        }
    )
    return responseEducation;
}