require("dotenv").config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const {connectDB} =require("./database/config")
const cors=require('cors')//config cors clase
const whiteList=[process.env.URL_FRONT/* , process.env.URL_FRONT_REMOTE */]
const corsOptions={
  origin: function (origin, cb) {
    if (whiteList.includes(origin)) {
      cb(null,true)
    }else{
      cb(new Error('Error de cors'))
    }
  }                                                                 
}

/* var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); */
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const proyectRoutes = require("./routes/proyect")
const taskRoutes = require("./routes/task");
const checkToken = require("./middlewares/checkToken");

var app = express();
connectDB()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())//corsOptions


//RUTAS
/* app.use('/', indexRouter);
app.use('/users', usersRouter); */
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/projects",checkToken, proyectRoutes)
app.use("/api/task", taskRoutes)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).json({
    ok: false,
    msg: err.message ? err.message : "INTERNAL SERVER ERROR ;).Se ha producido un error interno en el servidor. Esto podría indicar un problema con la solicitud o un problema en el código del lado del servidor."
  })
});

module.exports = app;
