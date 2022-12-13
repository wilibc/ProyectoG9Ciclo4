const deporte=require('../models/deporte')

exports.list=async(req,res)=>{
    try{
        const colDeporte=await deporte.find({})
        res.json(colDeporte)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add=async(req,res)=>{
    const deport= new deporte(req.body)//formato de la variable usuarios
    try{
        await deport.save()
        res.json({
            message:"Nuevo deporte agregado"
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
        const deport=await deporte.findById(req.params.id)
        if(!deport){
            res.status(404).json({
                message:"Deporte no existe"
            })
        }
        res.json(deport)
    }catch(error){
        res.status(400).json({
            message:"Error al procesar la petición"
        })
    }
}

exports.update=async(req,res,next)=>{ 
    try{
        const deport= await deporte.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}//retorna el valor actualizado
        )
        res.json({
            message:"Deporte actualizado"
        })
    }catch(error){
        res.status(400).json({
            message:"Error al procesar la petición"
        })
    }
}

exports.delete=async(req,res,next)=>{ 
    const id = req.params.id
    try{
        await deporte.findByIdAndDelete({
            _id:id
        })
        res.json({
            message:"Deporte eliminado"
        })
    }catch(error){
        res.status(400).json({
            message:"Error al procesar la petición"
        })
    }
}