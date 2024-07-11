module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movieId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    movieTitle: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    posterUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    movieInfo: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    movieCast: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'Movie',  // 명시적으로 테이블 이름 지정
    timestamps: true
  });

  Movie.associate = (models) => {
    Movie.hasMany(models.Review, { foreignKey: 'movieId' });
    Movie.belongsToMany(models.Genre, { through: models.MovieGenre, foreignKey: 'movieId' });
  };

  return Movie;
};