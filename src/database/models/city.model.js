const CitySchema = (sequelize, DataTypes) => {
  const CityTable = sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'cities',
  });

  CityTable.associate = (models) => {
    CityTable.hasMany(models.District, {
      foreignKey: 'id',
      as: 'districts',
    });
  }

  return CityTable;
}