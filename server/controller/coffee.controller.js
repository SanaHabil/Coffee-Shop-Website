const Coffee = require('../models/coffee.model')
const jwt = require('jsonwebtoken')

const CoffeeController ={

//Create
create:(req,res)=>{
    console.log(req.Token)
    Coffee.create({...req.body,owner:req.Token.id})

    .then((coffee) =>{
        res.status(201).json({coffee:coffee})
    })
    .catch((err)=> {
        res.status(400).json({message:"Somthing Went Wrong!",error:err})

    })
},
//Read
getAll:(req,res)=>{
    Coffee.find({})
    .then((coffees)=>{
        res.status(200).json({coffees:coffees})
    })
    .catch((err)=> {
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
},
getOne:(req,res)=>{
    Coffee.find({_id:req.params.id})
    .then((coffee)=>{
        res.status(200).json({coffee:coffee})
        })
        .catch((err)=>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
},
//Update
update:(req,res)=>{
    Coffee.find({_id:req.params.id})
    .findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((coffee)=>{
        res.status(200).json({coffee:coffee})
    })
    .catch((err) =>{
        res.status(400).json({message:"Somthing Went Wrong!",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Coffee.findOneAndDelete({_id:req.params.id})
    .then((coffee)=>{
        res.status(200).json({coffee:coffee})
    })
    .catch((err) =>{
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
}

}
module.exports = CoffeeController