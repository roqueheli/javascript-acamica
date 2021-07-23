const deleteTask = (tareasArray, id) => {
    const getIndex = tareasArray.findIndex((elemento) => elemento.id === id);
    tareasArray.splice(getIndex, 1);
};

export default deleteTask;