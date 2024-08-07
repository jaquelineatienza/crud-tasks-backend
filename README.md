CRUD Tasks Backend
Descripción
crud-tasks-backend es una API RESTful construida con Node.js, Express y Mysl que permite la gestión de tareas mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Este backend sirve como el componente central para la administración de tareas en una aplicación de lista de tareas.

Características
Crear nuevas tareas.
Leer tareas existentes.
Actualizar tareas.
Eliminar tareas.

#pasos para poder poner en funcionamiento el servidor
1_Clonar el repositorio
    git clone https://github.com/tu_usuario/crud-tasks-backend.git
2_Crear la base de datos con el siguiente nombre:'tasks_db' y una tabla llamada 'taks';
3_Navegar al directorio 'CRUD-TAKS-BACKEND'
    cd crud-tasks-backend
4_Descargar las dependiencias
    npm install
5_Poner en marcha el servidor
    npm run dev

//Endpoint


<h5>Endpoints</h5>
Tareas
GET /tasks: Obtiene todas las tareas.
GET /tasks/:id: Obtiene una tarea por su ID.
POST /tasks: Crea una nueva tarea.
PUT /tasks/:id: Actualiza una tarea por su ID.
DELETE /tasks/:id: Elimina una tarea por su ID.