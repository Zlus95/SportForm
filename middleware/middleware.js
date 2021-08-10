const sessionMiddle = (req, res, next) => {
  res.locals.username = req.session?.username;
  next();
};

const checkSession = (req, res, next) => {
  if(res.locals.username = req.session?.username) {
    next();
  } else {
    res.redirect('/auth/signup')
  } // записывает в рес.локалс инфу из сессии
};


module.exports = { sessionMiddle, checkSession };
