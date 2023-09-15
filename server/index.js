const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
const QuoteModel = require('./models/Quotes')
const bcrypt = require('bcrypt')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://aqsin001:Aqsin1213@cluster0.iv2p2j4.mongodb.net/MyQuotes?retryWrites=true&w=majority")


app.post("/login", (req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, (err,response)=>{
                if(err){
                    res.json("Password is incorrect")
                }
                if(response){
                    res.json("Success")
                }
            })
        } else{
            res.json("No record existed")
        }
    })
})


app.post("/sendData", (req,res)=>{
    const {username,email,password} =req.body;
    bcrypt.hash(password, 10)
    .then(hash =>{
        UserModel.create({username,email, password:hash})
        .then(user => res.json(user))
        .catch(err=>res.json)
    })
    

})


app.post("/newQuote", async (req,res)=>{
    const quote = req.body;
    const newQuote = new QuoteModel(quote);
    await newQuote.save();
    res.json(quote);

})

app.get("/getQuotes", (req, res) => {
    QuoteModel.find({}).then(function(quotes){
        res.json(quotes)
    }).catch(function(err){
        res.json(err)
    })

})


app.listen(3001, ()=>{
console.log("server is working")
})