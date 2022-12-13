const mongoose=require('mongoose')
const Schema=mongoose.Schema
const marcadoresSchema=new Schema({
    mar_fechaEvento:{type:String,require:true,Trim:true},
    mar_horaEvento:{type:String,require:true,Trim:true},
    mar_fechaRegistro:{type:String,require:true,Trim:true},
    mar_horaRegistro:{type:String,require:true,Trim:true},
    equi_id1:{type:String,require:true,Trim:true},
    equi_id2:{type:String,require:true,Trim:true},
    mar_marcadorequi1:{type:String,require:true,Trim:true},
    mar_marcadorequi2:{type:String,require:true,Trim:true},
    dep_id:{type:String,require:true,Trim:true},
    usu_id:{type:String,require:true,Trim:true}
})

module.exports=mongoose.model('marcadores',marcadoresSchema)