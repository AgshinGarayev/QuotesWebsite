const mongoose= require('mongoose')
const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        require:true
    },

    email:{
        type: String,
        require:true
    },

    password:{
        type: String,
        require: true
    }



})

const UserModel = new mongoose.model("users", UserSchema)
module.exports= UserModel