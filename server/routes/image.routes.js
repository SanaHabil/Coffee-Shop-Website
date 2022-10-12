const CoffeeImageController = require("../controller/image.controller")

const routes = (app)=> {

app.post("/api/images",CoffeeImageController.create);

//Read ALl
app.get('/api/images',CoffeeImageController.getAll);
//Read One
app.get('/api/images/:id',CoffeeImageController.getOne);
//Update
app.put('/api/images/:id',CoffeeImageController.update);
//Delete
app.delete('/api/images/:id',CoffeeImageController.delete);
}

module.exports = routes