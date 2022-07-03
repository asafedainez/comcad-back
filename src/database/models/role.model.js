// const RoleSchema = (sequelize, DataTypes) => {
//   const RoleTable = sequelize.define('Role', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.ENUM,
//       values: ['user', 'coordinator','admin'],
//       allowNull: false,
//     },
//   }, {
//     tableName: 'roles',
//     timestamps: false,
//   });

//   RoleTable.associate = (models) => {
//     RoleTable.hasMany(models.User, {
//       foreignKey: 'id',
//       as: 'users',
//     });
//   };

//   return RoleTable;
// }

// module.exports = RoleSchema;