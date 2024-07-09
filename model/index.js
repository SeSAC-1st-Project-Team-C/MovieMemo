const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// 모델 불러오기
const Member = require('./memberModel')(sequelize, Sequelize);
const Movie = require('./movieModel')(sequelize, Sequelize);
const Review = require('./reviewModel')(sequelize, Sequelize);
const Genre = require('./genreModel')(sequelize, Sequelize);
const MovieGenre = require('./movieGenreModel')(sequelize, Sequelize);

// db 객체에 모델 추가
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Member = Member;
db.Movie = Movie;
db.Review = Review;
db.Genre = Genre;
db.MovieGenre = MovieGenre;

// 모델 간 관계 설정
Member.hasMany(Review, { foreignKey: 'member_id' });
Review.belongsTo(Member, { foreignKey: 'member_id' });

Movie.hasMany(Review, { foreignKey: 'movie_id' });
Review.belongsTo(Movie, { foreignKey: 'movie_id' });

Movie.belongsToMany(Genre, { through: MovieGenre });
Genre.belongsToMany(Movie, { through: MovieGenre });

// 모델 동기화
const syncModels = async () => {
  await Member.sync();
  await Movie.sync();
  await Genre.sync();
  await MovieGenre.sync();
  await Review.sync();
};

db.syncModels = syncModels;

module.exports = db;