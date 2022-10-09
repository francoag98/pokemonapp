const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
const Pokemon = (sequelize) => {
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    velocity: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.DECIMAL,
    },
    weight: {
      type: DataTypes.DECIMAL,
    },
  });
};
// Luego le injectamos la conexion a sequelize.
module.exports = Pokemon;
