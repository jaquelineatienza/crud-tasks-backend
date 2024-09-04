import {
  crearTaks,
  obtenerTaks,
  obtenerID,
  editarTaks,
  eliminarTaks,
} from "../controllers/taks.controllers.js";
import { Router } from "express";
import { applyValidations } from "../validations/validations.js";
import { validacion } from "../validations/applyValidations.js";
import { body } from "express-validator";
export const routes = Router();

//obtener todas las tareas
routes.get("/", obtenerTaks);
//obtener tareas por id
routes.get("/:id", obtenerID);
//crear tareas
routes.post("/create", validacion, crearTaks);
//editar tareas
routes.put("/update/:id", editarTaks);
//eliminar tarea
routes.delete("/delete/:id", eliminarTaks);
