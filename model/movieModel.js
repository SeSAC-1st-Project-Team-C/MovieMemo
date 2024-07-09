module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    movie_title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    poster_url: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    movie_info: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    movie_cast: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'Movie',
    timestamps: false
  });

  Movie.associate = (models) => {
    Movie.hasMany(models.Review, { foreignKey: 'movie_id' });
    Movie.belongsToMany(models.Genre, { through: 'MovieGenre', foreignKey: 'movie_id' });
  };

  return Movie;
};