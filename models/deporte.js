const mongoose=require('mongoose')
const Schema=mongoose.Schema
const deporteSchema=new Schema({
    dep_nombre:{type:String,lowercase:true,unique:true,Trim:true}
})

module.exports=mongoose.model('deporte',deporteSchema)