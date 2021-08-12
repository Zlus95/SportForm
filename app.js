require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const orderRouter = require('./routes/orderRouter');
const clothesRouter = require('./routes/clothesRouter');
const cartRouter = require('./routes/cartRouter');
const { sessionMiddle, checkSession, createCart } = require('./middleware/middleware');
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

app.use('/', createCart, indexRouter);
app.use('/auth', createCart, authRouter);
app.use('/order', createCart, orderRouter);
app.use('/clothes', createCart, clothesRouter);
app.use('/cart', createCart, cartRouter);
app.use('/admin',checkSession, adminRouter);

app.listen(process.env.PORT, () => {
  connect();
  console.log('Подключение прошло успешно');
});
 
