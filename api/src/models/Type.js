const { DataTypes } = require("sequelize");

const Type = (sequelize) => {
  sequelize.define(
    "Type",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

module.exports = Type;
