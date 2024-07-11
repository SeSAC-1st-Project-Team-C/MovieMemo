const express = require('express');
const router = express.Router();
const controller = require('../controller/CMovie');

// 권한 검사 미들웨어
const checkAdminAuth = (req, res, next) => {
  if (!req.session || !req.session.token || !req.session.token.isAdmin) {
    return res.status(403).json({ message: '접근 권한이 없습니다.' });
  }
  next();
};

// 기본 요청 경로 localhost:PORT/movie

// 특정 영화 상세 정보 조회
router.get('/:movieTitle', controller.getMovie);

// 영화에 리스트 요청하기 추후 박스오피스 기능에 사용할듯
// router.get('/movieList', controller.getMovieList);

// 특정 장르로 영화 리스트 불러오기
router.get('/genreList/:genreId', controller.getMovieType);

// 영화 정보 추가 생성 (관리자 권한 필요)
router.post('/', checkAdminAuth, controller.postMovie);

// 영화 정보 수정하기 (관리자 권한 필요)
router.patch('/', checkAdminAuth, controller.patchMovie);

// 영화 정보 삭제하기 (관리자 권한 필요)
router.delete('/', checkAdminAuth, controller.deleteMovie);

module.exports = router;