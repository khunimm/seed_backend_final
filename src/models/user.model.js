module.exports = ( sequelize, Sequelize ) => {
    const admin_users = sequelize.define(
        'admin_users',
        {
            id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'id' },
            username: { type: Sequelize.STRING(), allowNull: true, field: 'username' },
            password: { type: Sequelize.STRING(), allowNull: true, field: 'password' },
            email: { type: Sequelize.STRING(), allowNull: true, field: 'email' }
        },
        {
            tableName: 'admin_users',
        }
    )
    return admin_users;
}