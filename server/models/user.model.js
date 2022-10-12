const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
        firstName:{
            type:String,
            required:[true,"First Name is required"],
        },
        lastName: {
            type:String,
            required:[true,"Last Name is required"],
            
        },
        email: {
            type:String,
            required:[true,"Email is required"],
            unique: true,
            validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            }
        },
        password:{
            type:String,
            required:[true,"Password is required"],
            minLength:[8,"Password must be 8 charachters or longer"],


        }
}, {timestamps:true});

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword','Password must match confirm password');
    }
    next();
    });

const User = mongoose.model("User",UserSchema)

module.exports = User