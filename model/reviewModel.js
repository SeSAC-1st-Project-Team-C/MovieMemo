module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    member_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    like_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    report_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    movie_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'Review',
    timestamps: true,
  });

  Review.associate = (models) => {
    Review.belongsTo(models.Member, { foreignKey: 'member_id' });
    Review.belongsTo(models.Movie, { foreignKey: 'movie_id' });
  };

  return Review;
};