const express = require('express')
const router = express.Router()
const usuariosController=require('../controllers/usuariosController')
const deporteController=require('../controllers/deporteController')
const equiposController=require('../controllers/equiposController')
const marcadoresController=require('../controllers/marcadoresController')


module.exports=()=>{
    router.get('/usuarios',usuariosController.list)// exporta el get de usuarios
    router.post('/usuarios',usuariosController.add)
    router.get('/usuarios/:id',usuariosController.show)
    router.put('/usuarios/:id',usuariosController.update)
    router.delete('/usuarios/:id',usuariosController.delete)
    //----------------------------deportes
    router.get('/deporte',deporteController.list)// exporta el get de deportes
    router.post('/deporte',deporteController.add)
    router.get('/deporte/:id',deporteController.show)
    router.put('/deporte/:id',deporteController.update)
    router.delete('/deporte/:id',deporteController.delete)
    //-----------------------equipos
    router.get('/equipos',equiposController.list)
    router.post('/equipos',equiposController.add)
    router.get('/equipos/:id',equiposController.show)
    router.put('/equipos/:id',equiposController.update)
    router.delete('/equipos/:id',equiposController.delete)
    //-----------------------marcadores
    router.get('/marcadores',marcadoresController.list)
    router.post('/marcadores',marcadoresController.add)
    router.get('/marcadores/:id',marcadoresController.show)
    router.put('/marcadores/:id',marcadoresController.update)
    router.delete('/marcadores/:id',marcadoresController.delete)
    return router 
    
}

