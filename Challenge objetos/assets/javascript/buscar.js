/**
 * Crea una función que reciba una lista de personas y un id (número)
 * como argumento, y que retorne el objeto de la persona que corresponda
 * con el id especificado
 */

const specifiedId = (arrayPersonas, identifier) => arrayPersonas.filter(({ id }) => id === identifier);

export default specifiedId;