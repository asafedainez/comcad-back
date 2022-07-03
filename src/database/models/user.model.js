const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    congregation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Congregation',
        key: 'id',
      },
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'coordinator','admin'],
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'users',
  });

  UserTable.associate = (models) => {
    UserTable.belongsTo(models.Congregation, {
      foreignKey: 'congregation',
      as: 'congregation',
    });
  };

  return UserTable;
};

module.exports = UserSchema;