import  express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
import {routes} from './routes/taks.routes.js'; 

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//configuracion de las rutas
app.use("/api/taks",routes)

//configuracion del puerto
const PORT = 3440;

//configuracion servidor
app.listen(PORT,()=>{
    console.log(`el servidor esta funcionando en el ${PORT}`)
})