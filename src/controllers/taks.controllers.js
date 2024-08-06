const e = require('express');
const {conectDB} = require('../db/database');
const crtl ={};

//obtener todas las tareas
crtl.obtenerTaks = async ( req,res)=>{
    try{
        const conexion = await conectDB();

    const [resultado] = await conexion.query('SELECT * FROM tasks');
    if(resultado.length === 0){
        res.status(204).json({msg:'La tarea no se encuentra registrada en la base de datos'})
    }else{
        return res.json(resultado);
    }
  
    }catch(error){
        res.status(500).json({msg:'error interno del servidor'})
    }
    
}
//obtener tareas por id
crtl.obtenerID = async ( req,res)=>{
    const conexion = await conectDB();
    try{
        const {id}= req.params;

        const [resultado]= await conexion.query('SELECT * FROM tasks  WHERE id = ?',[id]);
        if(resultado.length === 0){
            res.status(204).json({msg:'La tarea no se encuentra registrada en la base de datos'})
        }else{
            
        return res.status(200).json(resultado);
        }
    
    }catch(error){
        res.status(500).json({msg:'error interno del servidor',error})
    }
    
}
//crear tareas
crtl.crearTaks = async ( req,res)=>{
    try{
        const { title,description,isComplete}= req.body;
        const conexion = await conectDB();
        await conexion.query('INSERT INTO  tasks ( title, description, isComplete) VALUES (?,?,?)',[
            title,description,isComplete
        ]) ;
        if(title === " " ||description === " "||isComplete ===" " ){
            res.json({msg:'todos los campos son requeridos'})
        }else{
            res.json({
                msg:'tarea creada'
            })
        }      
    }catch(error){
        res.status(500).json({msg:'error interno del servidor',error})
    }
  
}
//actualizar tarea
crtl.editarTaks = async(req,res)=>{
    const conexion = await conectDB();
    const {id} = req.params
    const { title,description,isComplete}= req.body;
    try{
        //buscar si la tarea esta en la base de datos
    const [taksEncontrada]= await conexion.query('SELECT * FROM tasks  WHERE id = ?',[id]);
    if (taksEncontrada.length === 0) {
        console.log('tarea no encontrada')
    }else{
        const [resultado] = await conexion.query('UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?', [title, description, isComplete, id]);
        if(!resultado.ok){
         return res.status(200).json({msg:'la tarea fue editada correctamente'})
        }else{
            return res.status(404).json({msg:'ocurrio un error al editar la tarea '})
        }
    }
   
    }catch(error){
        res.status(500).json({msg:'error interno del servidor',error})
    }
    
}
crtl.eliminarTaks = async(req,res)=>{
    const conexion = await conectDB();
    const {id} = req.params;
    try{
        const [resultado]= await conexion.query('DELETE FROM `tasks` WHERE id = ?',[id]);
            if(!resultado.ok){
                res.status(200).json({msg:'tarea eliminada correctamente'});
            }
           
        
    }catch(error){
        res.status(500).json({msg:'error interno del servidor'})
    }
}
module.exports= crtl;