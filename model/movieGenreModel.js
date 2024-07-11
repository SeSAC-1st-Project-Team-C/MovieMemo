module.exports = (sequelize, DataTypes) => {
  const MovieGenre = sequelize.define('MovieGenre', {
    movieId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Movie',  // 'Movie'로 수정
        key: 'movieId'
      }
    },
    genreId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Genre',
        key: 'genreId'
      }
    }
  }, {
    tableName: 'MovieGenre',
    timestamps: false
  });

  return MovieGenre;
};