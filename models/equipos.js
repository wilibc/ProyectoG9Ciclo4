const mongoose=require('mongoose')
const Schema=mongoose.Schema
const equiposSchema=new Schema({
    equi_nombre:{type:String,lowercase:true,unique:true,Trim:true}
})

module.exports=mongoose.model('equipos',equiposSchema)