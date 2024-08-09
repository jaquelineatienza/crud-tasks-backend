import {crearTaks,obtenerTaks,obtenerID,editarTaks,eliminarTaks} from '../controllers/taks.controllers';
import {Router} from'express'

const routes = Router()

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