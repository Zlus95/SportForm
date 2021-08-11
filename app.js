require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const { sessionMiddle, checkSession } = require('./middleware/middleware');
const connect = require('./db/connect');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const sessionConfig = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  name: 'sid',
  cookie: { secure: false },
  store: MongoStore.create({ mongoUrl: process.env.DB }),
};

app.use(morgan('dev'));
app.use(session(sessionConfig));
app.use(sessionMiddle);

// middleware для создания админа во все hbs
// app.use((req, res, next) => {
//   if (req.session.admin_id) {
//     res.locals.admin = true;
//     res.locals.adminName = req.session.adminName;
//   }
//   next();
// });

app.use('/', indexRouter);
app.use('/auth', authRouter);

// app.all('*', (req, res, next) => {
//   const err = new Error('Page Not Found');
//   err.status = 404;
//   next(err);
// });

// app.use((err, req, res, next) => {
//   const { status = 500, message = 'Something went wrong' } = err;
//   res.status(status).render('error', { errStatus: status, errMessage: message });
// });

app.listen(process.env.PORT, () => {
  // connect();
  console.log('Подключение прошло успешно');
});
