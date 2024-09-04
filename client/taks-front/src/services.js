const api_url = "http://localhost:3440/api/taks";

// Función para obtener las tareas
export const getAllTasks = async () => {
  const response = await fetch(api_url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

//funcion para crear una tarea
export const creaTasks = async (tasks) => {
  return fetch(`${api_url}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  }).then((res) => res.json());
};

//funcion para eliminar una tarea
export const deleTasks = async (idTasks) => {
  return fetch(`${api_url}/delete/` + idTasks, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const updaTasks = async (idTasks, tasks) => {
  return fetch(`${api_url}/update/` + idTasks, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  }).then((res) => res.json());
};
