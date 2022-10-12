const jwt = require("jsonwebtoken");
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const UserController ={
    // User Register
    register:(req, res) => {
        
        User.create(req.body)
            .then(user => {
                const {_id,firstName,...other} = user
                const userToken =jwt.sign({
                    id:user._id
                },process.env.JWT_KEY)

                res.cookie("usertoken",userToken,{
                    httpOnly:true
                }).status(201).json({ msg: "success!"});
            })
            .catch(err => {
                console.log("Registration is not successfull");
                res.status(400).json(err);
                console.error(err);
            });
        },
    //User Login
    login:(req, res) => {
        User.findOne({email:req.body.email})
        .then((user)=>{
            const {_id,firstName,...other} = user
            if(user === null){
                console.log("Please add User Email and Password")
                res.status(400).send('Please add User Email and Password');
            }
            if (!user){
                console.log("Not Found");
            }
            bcrypt.compare(req.body.password, user.password)
            .then(()=>{
                const userToken =jwt.sign({
                    id:user._id
                },process.env.JWT_KEY)

                res.cookie('usertoken',userToken,{httpOnly:true}).json({user:{id:_id,name:firstName}})
            })
            .catch(()=>{
                console.log("user is not existed")
                res.status(400).send('user is not existed');
            })
        })
    }, 
    // User Logout
    logout: (req, res) => {
        res.clearCookie('usertoken');
        res.sendStatus(200);
    },
    //Get All Users
    getAllUsers: (req, res) => {
        User.find({})
        .then((users)=>{
            res.status(200).json({users:users})
        })
        .catch((err)=> {
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
            // .then(users => res.json(users))
            // .catch(err => {
            //     console.log(err)
            //     response.status(400).json(err)
            // })
    },
    //Get Logged In User
    getLoggedInUser: (req, res) => {
        const decodeJWT = jwt.decode(req.cookies.usertoken, {
            complete: true
        })

        User.findOne({_id: decodeJWT.payload.id})
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    //Delete
    delete:(req, res) =>{
        User.findOneAndDelete(req.params.id)
        .then((user)=>{
            res.status(200).json({user:user})
        })
        .catch((err) =>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
    }

}

module.exports = UserController
