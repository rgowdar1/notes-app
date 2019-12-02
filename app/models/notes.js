const mongoose=require('mongoose')


//schema
const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Category'
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})


//Model------create constructor function
const Note=mongoose.model('Note',noteSchema)

module.exports=Note