const usuarios=require('../models/usuarios')

exports.list=async(req,res)=>{
    try{
        const colUsuarios=await usuarios.find({})
        res.json(colUsuarios)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add=async(req,res)=>{
    const usuario= new usuarios(req.body)//formato de la variable usuarios
    try{
        await usuario.save()
        res.json({
            message:"nuevo usuario addicionado"
        })
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}
// comandos mongo
exports.show=async(req,res,next)=>{
    try{
        const usuario=await usuarios.findById(req.params.id)
        if(!usuario){
            res.status(404).json({
                message:"usuario no existe"
            })
        }
        res.json(usuario)
    }catch(error){
        res.status(400).json({
            message:"error al procesar la peticion"
        })
    }
}

exports.update=async(req,res,next)=>{ 
    try{
        const usuario= await usuarios.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}//retorna el valor actualizado
        )
        res.json({
            message:"usuario actualizado"
        })
    }catch(error){
        res.status(400).json({
            message:"error al procesar la peticion"
        })
    }
}

exports.delete=async(req,res,next)=>{ 
    const id = req.params.id
    try{
        await usuarios.findByIdAndDelete({
            _id:id
        })
        res.json({
            message:"usuario eliminado"
        })
    }catch(error){
        res.status(400).json({
            message:"error al procesar la peticion"
        })
    }
}