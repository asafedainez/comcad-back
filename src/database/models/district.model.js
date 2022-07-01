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
    city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'City',
        key: 'id',
      },
    },
  }, {
    tableName: 'districts',
  });

  DistrictTable.associate = (models) => {
    DistrictTable.hasMany(models.City, {
      foreignKey: 'id',
    });

    DistrictTable.belongsTo(models.City, {
      foreignKey: 'city',
    });
  }

  return DistrictTable;
}

module.exports = DistrictSchema;