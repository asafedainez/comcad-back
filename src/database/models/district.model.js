const DistrictSchema = (sequelize, DataTypes) => {
  const DistrictTable = sequelize.define('District', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'City',
        key: 'id',
      },
    },
  }, {
    tableName: 'districts',
    timestamps: false,
  });

  DistrictTable.associate = (models) => {
    DistrictTable.hasMany(models.Address, {
      foreignKey: 'id',
      as: 'addresses',
    });

    DistrictTable.belongsTo(models.City, {
      foreignKey: 'cityId',
      as: 'city',
    });
  }

  return DistrictTable;
}

module.exports = DistrictSchema;