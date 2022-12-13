const marcadores=require('../models/marcadores')

exports.list=async(req,res)=>{
    try{
        const colMarcadores=await marcadores.find({})
        res.json(colMarcadores)
    }catch(error){
        console.log(error)
        res.send(error)
        next()
    }
}

exports.add=async(req,res)=>{
    const marcador= new marcadores(req.body)
    try{
        await marcador.save()
        res.json({
            message:"nuevo marcador adicionado"
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
        const marcador=await marcadores.findById(req.params.id)
        if(!marcador){
            res.status(404).json({
                message:"marcador no existe"
            })
        }
        res.json(equipo)
    }catch(error){
        res.status(400).json({
            message:"error al procesar la peticion"
        })
    }
}

exports.update=async(req,res,next)=>{ 
    try{
        const marcador= await marcadores.findOneAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true}//retorna el valor actualizado
        )
        res.json({
            message:"marcador actualizado"
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
        await marcadores.findByIdAndDelete({
            _id:id
        })
        res.json({
            message:"marcador eliminado"
        })
    }catch(error){
        res.status(400).json({
            message:"error al procesar la peticion"
        })
    }
}