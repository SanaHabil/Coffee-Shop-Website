const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    coffeeImg:{
        type:String,
        required:[true,"Coffee Imge is required"],
        },
    },
    {timestamps:true})

const Image = mongoose.model("Image",ImageSchema)

module.exports = Image