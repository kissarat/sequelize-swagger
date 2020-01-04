const idRules = {
  min: 1
};
const nameRules = {
  len: [0, 50]
};

module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        noUpdate: true,
        validate: idRules,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name',
        validate: nameRules
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name',
        validate: nameRules
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'email',
        validate: {
          isEmail: true
        }
      },
      parentId: {
        type: DataTypes.INTEGER,
        field: 'parent_id',
        validate: idRules,
        references: {
            model: 'user',
            field: 'id'
        }
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        noUpdate: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
      }
    },
    {
      tableName: 'user'
    }
  );
