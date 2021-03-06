const CongregationSchema = (sequelize, DataTypes) => {
  const CongregationTable = sequelize.define('Congregation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Address',
        key: 'id',
      },
    },
    shepherd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5', '6'],
      allowNull: false,
    },
  }, {
    tableName: 'congregations',
    timestamps: false,
  });

  CongregationTable.associate = (models) => {
    CongregationTable.hasMany(models.User, {
      foreignKey: 'id',
      as: 'users',
    });

    CongregationTable.belongsTo(models.Address, {
      foreignKey: 'addressId',
      as: 'address',
    });
  };

  return CongregationTable;
};

module.exports = CongregationSchema;
