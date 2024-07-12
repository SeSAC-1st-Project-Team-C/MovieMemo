const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

// const indexRouter = require("./routes/index");
// app.use("/", indexRouter); //기본 요청주소가 localhost:port이다

// const userRouter = require("./routes/user");
// app.use("/user", userRouter);

// const reviewRouter = require("./routes/RReview");
// app.use("/review", reviewRouter);


// //404
// app.get("*", (req, res) => {
//   res.render("404");
// });

app.use(express.urlencoded({extended:true}));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('review', {title: '상세 페이지'})
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});