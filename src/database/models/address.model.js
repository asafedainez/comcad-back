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
    districtId: {
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
      defaultValue: null,
    },
  }, {
    tableName: 'addresses',
    timestamps: false,
  });

  AddressTable.associate = (models) => {
    AddressTable.hasMany(models.Congregation, {
      foreignKey: 'id',
      as: 'congregation',
    });

    AddressTable.belongsTo(models.District, {
      foreignKey: 'districtId',
      as: 'district',
    });
  };

  return AddressTable;
}

module.exports = AddressSchema;