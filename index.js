const express = require('express');
require('dotenv').config();
const {connectDB} = require('./database/config')
// Crear servidor de express
const app = express();
//BASE DE DATOS
connectDB();

// Rutas
app.get('/', ((req, res) =>{

    res.json({
        ok:true,
        msg: 'Hola mundo'
    }
    )

}));


app.listen(process.env.PORT, () =>{
    console.log("servidor corriendo en el puerto ", process.env.PORT);
})