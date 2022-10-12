const UserController = require("../controller/user.controller")
const { authenticate,isLoggedIn } = require('../config/jwt.config')

const routes = (app)=> {

    app.post('/api/users/isLoggedIn',isLoggedIn)
    app.post('/api/users/register',UserController.register);
    app.post('/api/users/login',UserController.login);
    app.get('/api/users/logout',UserController.logout);
    app.get('/api/users/getAllUsers',UserController.getAllUsers);
    app.delete('/api/users/:id',UserController.delete);
    
    }
module.exports = routes;