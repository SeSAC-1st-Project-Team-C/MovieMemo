const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const controller = require("../controller/CMember");
const { authenticateUser, authenticateAdmin } = require("../middleware/auth");

// 기본 요청 경로 localhost:PORT/member

// 로그인
router.post(
  "/login",
  [
    authenticateUser,
    check("name").notEmpty().withMessage("이름을 입력해주세요."),
    check("password")
      .isLength({ min: 8 })
      .withMessage("비밀번호는 최소 8자 이상이어야 합니다.")
      .matches(/[0-9]/)
      .withMessage("비밀번호는 숫자를 포함해야 합니다.")
      .matches(/[a-z]/)
      .withMessage("비밀번호는 소문자를 포함해야 합니다.")
      .matches(/[A-Z]/)
      .withMessage("비밀번호는 대문자를 포함해야 합니다.")
      .matches(/[\W]/)
      .withMessage("비밀번호는 특수문자를 포함해야 합니다."),
  ],
  controller.loginMember
);

// 회원가입
router.post(
  "/register",
  [
    authenticateUser,
    check("name").notEmpty().withMessage("이름을 입력해주세요."),
    check("nick").notEmpty().withMessage("닉네임을 입력해주세요."),
    check("password")
      .isLength({ min: 8 })
      .withMessage("비밀번호는 최소 8자 이상이어야 합니다.")
      .matches(/[0-9]/)
      .withMessage("비밀번호는 숫자를 포함해야 합니다.")
      .matches(/[a-z]/)
      .withMessage("비밀번호는 소문자를 포함해야 합니다.")
      .matches(/[A-Z]/)
      .withMessage("비밀번호는 대문자를 포함해야 합니다.")
      .matches(/[\W]/)
      .withMessage("비밀번호는 특수문자를 포함해야 합니다."),
  ],
  controller.postMember
);

// 비밀번호 수정
router.patch(
  "/password",
  [
    authenticateUser,
    check("password")
      .isLength({ min: 8 })
      .withMessage("비밀번호는 최소 8자 이상이어야 합니다.")
      .matches(/[0-9]/)
      .withMessage("비밀번호는 숫자를 포함해야 합니다.")
      .matches(/[a-z]/)
      .withMessage("비밀번호는 소문자를 포함해야 합니다.")
      .matches(/[A-Z]/)
      .withMessage("비밀번호는 대문자를 포함해야 합니다.")
      .matches(/[\W]/)
      .withMessage("비밀번호는 특수문자를 포함해야 합니다."),
  ],
  controller.patchMember
);

// 회원 탈퇴
router.delete("/", authenticateUser, controller.deleteMember);

// 로그아웃
router.delete("/logout", authenticateUser, controller.logoutMember);

module.exports = router;
