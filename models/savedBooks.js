module.exports = function(sequelize, DataTypes) {
    var SavedBooks = sequelize.define("SavedBooks", {
      title: {
        type: DataTypes.STRING
      },
      authors: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      link: {
        type: DataTypes.STRING,
      }

    });
    return SavedBooks;
  };