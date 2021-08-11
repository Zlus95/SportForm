const connect = require('./connect');
const Admin = require('./model/adminModel')

connect();
Admin.create({ login: "admin", password: "admin" });


