const {conectDB} = require('../db/database');
const crtl ={};

//obtener todas las tareas
crtl.obtenerTaks = async ( req,res)=>{
    const coneccion = await conectDB();

    const [resultado] = await coneccion.query('SELECT * FROM tasks');
    return res.json(resultado);
}
//obtener tareas por id
crtl.obtenerID = async ( req,res)=>{
    const coneccion = await conectDB();
    const {id}= req.params;

    const [resultado]= await coneccion.query('SELECT * FROM tasks  WHERE id = ?',[id]);

    return res.json(resultado);
}
//crear tareas
crtl.crearTaks = async ( req,res)=>{
    const { title,description,isComplete}= req.body;
    const coneccion = await conectDB();
    await coneccion.query('INSERT INTO  tasks ( title, description, isComplete) VALUES (?,?,?)',[
        title,description,isComplete
    ]) ;

    //respuesta
    res.json({
        msg:'tarea creada'
    })
}
//actualizar tarea
crtl.editarTaks = async(req,res)=>{
    const coneccion = await conectDB();
    const {id} = req.params
    const { title,description,isComplete}= req.body;

    const [resultado]= await coneccion.query('SELECT * FROM tasks  WHERE id = ?',[id]);
    if (resultado.length === 0) {
        return res.status(400).json({
            msg: 'Tarea no encontrada'
        });
    }

    // await coneccion
}
module.exports= crtl;