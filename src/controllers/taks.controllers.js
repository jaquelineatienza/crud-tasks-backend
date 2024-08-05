const {conectDB} = require('../db/database');
const crtl ={};

//obtener todas las tareas
crtl.obtenerTaks = async ( req,res)=>{
    const coneccion = await conectDB();

    const [resultado] = await coneccion.query('SELECT * FROM tasks');
    return res.json(resultado);
}
//crear tareas
crtl.crearTaks = async ( req,res)=>{

}