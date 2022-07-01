const AddressSchema = (sequelize , DataTypes) => {
  const AddressTable = sequelize.define('Address', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'District',
        key: 'id',
      },
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complement: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'addresses',
  });

  AddressTable.associate = (models) => {
    AddressSchema.hasMany(models.Congregation, {
      foreignKey: 'id',
      as: 'congregations',
    });

    AddressTable.belongsTo(models.District, {
      foreignKey: 'district',
    });
  };

  return AddressTable;
}

module.exports = AddressSchema;