const CitySchema = (sequelize, DataTypes) => {
  const CityTable = sequelize.define('City', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'cities',
    timestamps: false,
  });

  CityTable.associate = (models) => {
    CityTable.hasMany(models.District, {
      foreignKey: 'id',
      as: 'districts',
    });
  }

  return CityTable;
}