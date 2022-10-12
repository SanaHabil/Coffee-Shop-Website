const CoffeeController = require("../controller/coffee.controller")
const { authenticate,isLoggedIn } = require('../config/jwt.config')

const routes = (app)=> {

app.post("/api/coffee",authenticate,CoffeeController.create);

//Read ALl
app.get('/api/coffee',authenticate,CoffeeController.getAll);
app.get('/api/allcoffee',CoffeeController.getAll);
//Read One
app.get('/api/coffee/:id',CoffeeController.getOne);
//Update
app.put('/api/coffee/:id',CoffeeController.update);
//Delete
app.delete('/api/coffee/:id',CoffeeController.delete);
app.delete('/api/allcoffee/:id',CoffeeController.delete);
}

module.exports = routes