import { getAllTasks, deleTasks, creaTasks, updaTasks } from "./services";
import "./style.css";
const $conTasks = document.getElementById("conTasks");

// Añadir el título "TASKS" una sola vez
const $containerTitle = document.createElement("div");
const $taks = document.createElement("h2");
$taks.classList.add("h2");
$taks.innerText = "TASKS";
$containerTitle.appendChild($taks);
$containerTitle.classList.add(
  "task-item",
  "flex",
  "justify-between",
  "items-center",
  "p-10",
  "mb-2",
  "border",
  "border-gray-300",
  "rounded-lg",
  "bg-gray-50",
  "dark:bg-gray-600",
  "dark:border-gray-500",
  "hover:shadow"
);
$conTasks.appendChild($containerTitle);

// Renderizar las tareas
const renderTasks = (task) => {
  const $container = document.createElement("div");
  $container.classList.add(
    "task-items",
    "flex",
    "items-center",
    "p-3",
    "mb-2",
    "border",
    "border-gray-300",
    "rounded-lg",
    "bg-gray-50",
    "dark:bg-gray-500",
    "dark:border-gray-500",
    "hover:shadow"
  );

  const $info = document.createElement("div");
  $info.classList.add("flex", "items-center", "flex-1");

  const $title = document.createElement("span");
  const $description = document.createElement("span");
  const $isComplete = document.createElement("span");
  const $checkbox = document.createElement("input");
  $checkbox.type = "checkbox";

  // Añadir clases a los elementos
  $title.classList.add("flex-1", "ms-3", "whitespace-nowrap");
  $description.classList.add("flex-1", "ms-3", "whitespace-nowrap");
  $isComplete.classList.add("flex-1", "ms-3", "whitespace-nowrap");
  $checkbox.classList.add("task-checkbox");
  $isComplete.classList.add(
    "ml-2",
    "px-2",
    "py-1",
    "rounded",
    "text-sm",
    "font-semibold"
  );
  $info.classList.add("flex", "items-center", "flex-1");

  // Actualizar el color de $isComplete según el estado
  const updateIsCompleteStyle = () => {
    $isComplete.innerText = task.isComplete ? "Completa" : "Incompleta";
    $isComplete.className = task.isComplete
      ? "ml-2 px-2 py-1 rounded text-sm font-semibold bg-green-100 text-green-800"
      : "ml-2 px-2 py-1 rounded text-sm font-semibold bg-red-100 text-red-800";
  };
  updateIsCompleteStyle();

  // Función para eliminar la tarea
  const $btnDelete = document.createElement("button");
  $btnDelete.innerText = "Eliminar";
  $btnDelete.classList.add(
    "btnEliminar",
    "text-white",
    "bg-red-600",
    "hover:bg-red-700",
    "focus:outline-none",
    "focus:ring-4",
    "focus:ring-red-300",
    "font-medium",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "me-2",
    "mb-2",
    "dark:bg-red-600",
    "dark:hover:bg-red-700",
    "dark:focus:ring-red-800"
  );
  $btnDelete.addEventListener("click", async () => {
    await deleTasks(task.id).then((res) => {
      if (res) {
        alert("Tarea eliminada correctamente");
        $container.remove();
        return;
      } else {
        alert("error al eliminar la tarea");
      }
    });
  });

  // Función para actualizar el estado de la tarea
  $checkbox.addEventListener("click", async () => {
    const isComplete = $checkbox.checked;

    // Datos actualizados
    const updatedTask = {
      title: task.title,
      description: task.description,
      isComplete: isComplete,
    };

    await updaTasks(task.id, updatedTask).then((res) => {
      if (res) {
        console.log(task.id);
        alert("Estado de la tarea actualizado correctamente");
        updateTaskInDOM(task.id, updaTasks);
      } else {
        alert("Ocurrió un error al intentar editar la tarea");
      }
    });
  });

  // Añadir el contenido de los elementos
  $title.innerText = task.title;
  $description.innerText = task.description;
  $checkbox.checked = task.isComplete;

  // Añadir los elementos al contenedor
  $info.appendChild($title);
  $info.appendChild($description);
  $info.appendChild($isComplete);
  $container.appendChild($info);
  $container.appendChild($checkbox);
  $container.appendChild($btnDelete);

  $container.setAttribute("id", `task-${task.id}`);

  return $container;
};

// Función para actualizar la tarea en el DOM
const updateTaskInDOM = (taskId, updatedTask) => {
  console.log(taskId);
  const $oldTask = document.getElementById(`task-${taskId}`);
  if ($oldTask) {
    $oldTask.replaceWith(renderTasks(updatedTask));
  }
};

// Obtener las tareas
const tasks = async () => {
  $conTasks.innerHTML = "";

  return getAllTasks().then((data) => {
    data.forEach((task) => {
      $conTasks.appendChild(renderTasks(task));
    });
  });
};

const $creaForm = document.getElementById("tasks-form");
// Función para crear la tarea
$creaForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("titulo").value;
  const description = document.getElementById("descripcion").value;
  const isComplete = false;

  const newTask = await creaTasks({ title, description, isComplete });
  $conTasks.appendChild(renderTasks(newTask));
  tasks();
  e.target.reset();
});

// Llama a la función cuando se cargue la página
tasks();
