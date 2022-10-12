const express = require('express')
const app = express()
require('dotenv').config();
const port = 8000
const cors = require('cors');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json());
require('./config/mongoose.config')
require('./routes/coffee.routes')(app)
require('./routes/image.routes')(app)
require ('./routes/user.routes')(app)


app.listen(port,()=>console.log(`Locked and Loaded on Port ${port}`))
