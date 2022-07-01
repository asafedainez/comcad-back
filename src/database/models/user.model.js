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
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'Role',
        key: 'id',
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  }, {
    tableName: 'users',
  });

  UserTable.associate = (models) => {
    UserTable.belongsTo(models.Role, {
      foreignKey: 'role',
      as: 'role',
    });

    UserTable.belongsTo(models.Congregation, {
      foreignKey: 'congregation',
      as: 'congregation',
    });
  };

  return UserTable;
};

module.exports = UserSchema;