// - 로그인
//     - getMember()
// - 회원
//     - postMember() - 회원가입
//     - getMember() - 로그인, 회원 검색 or 회원검색용 함수를 따로 만들거나 ex. getFindMember()
//     - patchMember() - 비밀번호 수정
//     - deleteMember() - 회원 탈퇴, 회원 강퇴

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nick: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "Member",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Member.associate = (models) => {
    Member.hasMany(models.Review, { foreignKey: "member_id" });
  };

  return Member;
};
