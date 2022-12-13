const mongoose=require('mongoose')
const Schema=mongoose.Schema
const usuariosSchema=new Schema({
    usu_email:{
        type:String,//tipo
        Trim:true,//elimina espacios de los lados
        unique:true,//unico
        lowercase:true//todo en minusculas
    },
    usu_clave:{type:String,require:true,Trim:true},
    usu_nombres:{type:String,require:true,Trim:true},
    usu_apellidos:{type:String,require:true,Trim:true}
})

module.exports=mongoose.model('usuarios',usuariosSchema)