const {crearTaks,obtenerTaks,obtenerID,editarTaks,eliminarTaks}= require('../controllers/taks.controllers');
const routes = require('express').Router();


//obtener todas las tareas
routes.get('/taks',obtenerTaks);
//obtener tareas por id
routes.get('/taks/:id',obtenerID)
//crear tareas
routes.post('/taks',crearTaks);
//editar tareas
routes.put('/taks/:id',editarTaks);
//eliminar tarea
routes.delete('/taks/:id',eliminarTaks)



module.exports=routes;