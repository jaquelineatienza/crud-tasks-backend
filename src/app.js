import { express} from 'express';
import {cors} from 'cors';
import {morgan} from ' morgan';
import {conectDB}  from './db/database'
const app = express();
import rutas from './routes/taks.routes'
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(conectDB)
//configuracion de las rutas
app.use(rutas)

//configuracion del puerto
const PORT = 3440;

//configuracion servidor
app.listen(PORT,()=>{
    console.log(`el servidor esta funcionando en el ${PORT}`)
})