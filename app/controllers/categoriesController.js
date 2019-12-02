const Category=require('../models/category')

//getting all categories
module.exports.list=(req,res)=>{
    Category.find({user:req.user._id}) 
        .then((categories)=>{
            res.json(categories)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//creating category
module.exports.create=(req,res)=>{
    const body=req.body
    const category=new Category({name:body.name})
    category.user=req.user._id
    category.save()
        .then((data)=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//getting 1 record 
module.exports.show=(req,res)=>{
    const id=req.params.id
    Category.findOne({_id:id,user:req.user._id})
        .then((category)=>{
            if(category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

//delete category
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Category.findOneAndDelete({_id:id,user:req.user._id})
        .then((category)=>{
            if(category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

//update category
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Category.findOneAndUpdate({_id:id,user:req.user._id},body,{ new:true,runValidators:true })
        .then((category)=>{
            if(category) {
                res.json(category)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
