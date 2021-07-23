import dataTasks from "./data.js"

import addTask from "./add.js";
import showTasks from "./show.js"
import showTaskById from "./showbyid.js"
import deleteTask from "./delete.js"
import modifyTask from "./modify.js"


console.clear();


// Mostrar todas las tareas
console.log(showTasks(dataTasks));

// Mostrar una tareas según un Id
console.log(showTaskById(dataTasks, 3));

//Agregar una nueva tarea
const newAdd = {
    titulo: "ir al gym de nuevo",
    completada: true,
    fechaCreada: "9-22-2020",
    id: 4
};
addTask(dataTasks, newAdd);
console.log(dataTasks);

// Borrar una tarea según un Id
deleteTask(dataTasks, 2);
console.log(dataTasks);

// Modificar una tarea
console.log(modifyTask(dataTasks, 1, "titulo", "regregsar al gym"));
