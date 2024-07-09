const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// env 변수 설정
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

dotenv.config({
  path: path.resolve(__dirname, `./.env`),
  override: true,
});

const app = express();
const portNo = process.env.PORT;

const { sequelize } = require('./model/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.set('view engine','ejs');
app.set('views', 'views');
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('데이터베이스 연결 확인!');
    if (!portNo) {
      console.log('.env 설정 확인 필요합니다.');
    }
    app.listen(portNo, () => {
      console.log(`Server running! port ${portNo} at ${new Date().toLocaleString()}`);
    });
  })
  .catch((err) => {
    console.error('마음이 아픔, DB 에서 몬가 에러가 났음', err);
  });