module.exports = (sequelize, DataTypes) => {
  const cols = {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  };

  const config = {
    tableName: "todos",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Todo = sequelize.define("Todo", cols, config);

  Todo.associate = function (models) {
    Todo.belongsTo(models.Folder, {
      as: "Folders",
      foreignKey: "folders_id",
    });
    Todo.belongsTo(models.User, {
      as: "Users",
      foreignKey: "users_id",
    });
  };

  return Todo;
};
