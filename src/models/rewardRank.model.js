module.exports = (sequelize, Sequelize) => {
    const rewardRank = sequelize.define(
        'reward_rank',
        {
            rr_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'rr_id' },
            s_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 's_id' },
            el_id: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 'el_id' },
            first_name: {type: Sequelize.STRING(), allowNull: true, field: 'first_name' },
            last_name: {type: Sequelize.STRING(), allowNull: true, field: 'last_name' },
            phone_number: {type: Sequelize.STRING(), allowNull: true, field: 'phone_number' },
            email: {type: Sequelize.STRING(), allowNull: true, field: 'email' },
            address_description: {type: Sequelize.STRING(), allowNull: true, field: 'address_description' },
            district: {type: Sequelize.STRING(), allowNull: true, field: 'district' },
            sub_district: {type: Sequelize.STRING(), allowNull: true, field: 'sub_district' },
            province: {type: Sequelize.STRING(), allowNull: true, field: 'province' },
            zip_code: {type: Sequelize.STRING(), allowNull: true, field: 'zip_code' },
            status_response: { type: Sequelize.INTEGER(), foreignKey: true, allowNull: true, field: 'status_response' },
            created_at: { type: Sequelize.DATE(), allowNull: true, field: 'created_at' },
        },
        {
            tableName: 'reward_rank'
        }
    )
    return rewardRank;
}