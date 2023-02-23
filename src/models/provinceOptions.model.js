module.exports = ( sequelize, Sequelize ) => {
    const provinceOptions = sequelize.define(
        'province_options', 
        {
            province_id: { type: Sequelize.INTEGER(), primaryKey: true, autoIncrement: true, field: 'province_id' },
            code: { type: Sequelize.STRING(), allowNull: true, field: 'code' },
            name_th: { type: Sequelize.STRING(), allowNull: true, field: 'name_th' },
            name_en: { type: Sequelize.STRING(), allowNull: true, field: 'name_en' }
        },
        {
            tableName: 'province_options'
        }
    )
    return provinceOptions;
}