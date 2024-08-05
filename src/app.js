const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//configuracion del puerto
const PORT = 3440;

//configuracion servidor
app.listen(PORT,()=>{
    console.log(`el servidor esta funcionando en el ${PORT}`)
})