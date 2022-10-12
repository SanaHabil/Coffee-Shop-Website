const Image = require('../models/image.model')

const CoffeeImageController ={

//Create
create:(req,res)=>{
    Image.create(req.body)
    .then((image) =>{
        res.status(201).json({image:image})
    })
    .catch((err)=> {
        res.status(400).json({message:"Somthing Went Wrong!",error:err})

    })
},
//Read
getAll:(req,res)=>{
    Image.find({})
    .then((images)=>{
        res.status(200).json({images:images})
    })
    .catch((err)=> {
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
},
getOne:(req,res)=>{
    Image.find({_id:req.params.id})
    .then((image)=>{
        res.status(200).json({image:image})
        })
        .catch((err)=>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
},
//Update
update:(req,res)=>{
    Image.find({_id:req.params.id})
    .findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((image)=>{
        res.status(200).json({image:image})
    })
    .catch((err) =>{
        res.status(400).json({message:"Somthing Went Wrong!",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Image.findOneAndDelete(req.params.id)
    .then((image)=>{
        res.status(200).json({image:image})
    })
    .catch((err) =>{
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
}

}
module.exports = CoffeeImageController