const sessionMiddle = (req, res, next) => {
  res.locals.isLogin = req.session?.isLogin;
  next();
};

const checkSession = (req, res, next) => {
  if(req.session?.isLogin) {
    next();
  } else {
    res.redirect('/')
  } // записывает в рес.локалс инфу из сессии
};


module.exports = { sessionMiddle, checkSession };
