const express = require('express') //1. importar express
const mongoose = require('mongoose')//2.1 importar las librerias
const bodyParser = require('body-parser')//2.2
const cors = require('cors')//2.3
const routes = require('./routes')//4. llamar el index creado en routes

const app = express()//1.2 constante app

mongoose.Promise=global.Promise //3. realiza el sondeo para la coneccion

mongoose.connect(//3.1 conectar a la bd de mongo
    //'mongodb://localhost/deportes',
    'mongodb://0.0.0.0:27017/deportes',
    {useNewUrlParser:true} //
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//habilita los caracteres especiales en el json
app.use(cors())

app.get('/',(req,res)=>{//1.3
    res.send('mi mongoDB')
})

app.use('/',routes())

app.listen(5000,()=>{//1.4 para probar
    console.log('server listen 5000')
})