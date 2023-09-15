const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({

    author:{
        type: String,
        require:true
    },

    quote:{
        type: String,
        require:true
    },



})

const QuoteModel = new mongoose.model("quotes", QuoteSchema)
module.exports=QuoteModel