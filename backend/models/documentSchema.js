const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    body:{
        type:String,
    },
    wordCount:{
        type:Number,
    },
    lineCount:{
        type:Number,
    },
    users:[
        {
            type:mongoose.Types.ObjectId,
            ref:"User",
        }
    ]
})

const Document = mongoose.model("Document",documentSchema);

module.exports = Document;