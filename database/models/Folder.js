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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  const config = {
    tableName: "folders",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    paranoid: true,
  };

  const Folder = sequelize.define("Folder", cols, config);

  Folder.associate = function (models) {
    Folder.belongsTo(models.User, {
      as: "Users",
      foreignKey: "users_id",
    });
    Folder.hasMany(models.Todo, {
      as: "Todos",
      foreignKey: "folders_id",
    });
  };

  return Folder;
};
