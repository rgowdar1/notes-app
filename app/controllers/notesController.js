const Note=require('../models/notes')

//Listing
module.exports.list=(req,res)=>{
    Note.find({user:req.user._id}).populate('categoryId',['_id','name'])      //it returns every value of array in collection
        .then((notes)=>{
            res.json(notes)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//creating
module.exports.create=(req,res)=>{
    const body=req.body
    const note=new Note(body)
    note.user=req.user._id
    note.save()
        .then((note)=>{
            res.json(note)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//showing one note
module.exports.show=(req,res)=>{
    const id=req.params.id
    Note.findOne({_id:id,user:req.user._id}).populate('categoryId',['_id','name'])
        .then((note)=>{
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

//deleting single note
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Note.findOneAndDelete({_id:id,user:req.user._id})
        .then((note)=>{
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

//updating record
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Note.findOneAndUpdate({_id:id,user:req.user._id},body,{ new:true,runValidators:true })
        .then((note)=>{
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}
