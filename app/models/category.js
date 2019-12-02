const mongoose=require('mongoose')

const Schema=mongoose.Schema

//Schema
const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})


//Model
const Category=mongoose.model('Category',categorySchema)

module.exports=Category