'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      topping.belongsToMany(models.order_list, {
        as: "order_lists",
        through: {
          model: "order_topping",
          as: "bridge"
        },
        foreignKey: "id_toppings"

      })   
  
    }
  }
  topping.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'topping',
  });
  return topping;
};