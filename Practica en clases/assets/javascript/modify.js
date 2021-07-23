const modifyTask = (arrayTasks, idTask, property, newvalue) => arrayTasks.map((elemento) => {
    if (elemento.id === idTask) {
        return {...elemento, [property]: newvalue}
    } else {
        return elemento;
    };
});

export default modifyTask;