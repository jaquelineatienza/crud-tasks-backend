const {crearTaks,obtenerTaks,obtenerID,editarTaks}= require('../controllers/taks.controllers');
const routes = require('express').Router();


//obtener todas las tareas
routes.get('/taks',obtenerTaks);
//obtener tareas por id
routes.get('/taks/:id',obtenerID)
//crear tareas
routes.post('/taks/create',crearTaks);
//editar tareas
routes.get('/taks/editar/:id',editarTaks);



module.exports=routes;