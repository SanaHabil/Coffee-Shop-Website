const mongoose = require('mongoose')

const CoffeeSchema = new mongoose.Schema({
    owner:{
        type:String,
        required:[true,"Creator is required"]
    },
    coffeetype:{
        type:String,
        required:[true,"Coffee Type is required"],
        enum:{
            values:[
                'Espresso   $3.00',
                'Americano   $4.00',
                'Latte   $5.00',
                'Pour Over   $5.00',
                'Iced Coffee   $4.00',
                'Turkish Coffee   $4.00',
                'Pumkin Spice Latte   $6.00',
                'Vanilla Latte   $6.00',
                'Regular Coffee   $4.00',
                'cappuccino   $5.00',
                'Flat White   $5.00',
                'Cortado   $5.00',
                'Macchiato   $5.00',
                'Mocha   $6.00',
                'Cafe Au Lait   $5.00'
            ],
            message:'{VALUE} is not supported'
            
        },
        required:[true,"Coffee Type is required"]
    },
    milk:{
        type:String,
        enum:{
            values:[
                'No Milk',
                'Whole Milk',
                'Oat Milk',
                'Almond Milk',
                'Coconut Milk',
                'Macademi',
                'Skim Milk',
                'Soy Milk',
                'Half & Half'
            ],
            message:'{VALUE} is not supported' 
        },
        required:[true,"Choose Milk Type OR No Milk"]
    },
    specialInstructions:{
        type:String,
        maxLength:[200,"Special Instructions 200 Characters or fewer"]
    },
    size:{
        type:String,
        required:[true,"Coffee Size is required"]
    }
    },
    {timestamps:true})

const Coffee = mongoose.model("Coffee",CoffeeSchema)

module.exports = Coffee