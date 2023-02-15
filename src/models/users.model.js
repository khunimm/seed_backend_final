module.exports = ( sequelize, Sequelize ) => {
    const user = sequelize.define(
        'users',
        {
            u_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'u_id' },
            s_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 's_id' },
            email: { type: Sequelize.STRING(), allowNull: true, field: 'email' },
            password: { type: Sequelize.STRING(), allowNull: true, field: 'password' },
            created_at: { type: Sequelize.DATE(), allowNull: false, field: 'created_at' },
            updated_at: { type: Sequelize.DATE(), allowNull: false, field: 'updated_at' },
            type_account: { type: Sequelize.INTEGER(), allowNull: false, field: 'type_account' }
        },
        {
            tableName: 'users'
        }
    )
    return user;
}