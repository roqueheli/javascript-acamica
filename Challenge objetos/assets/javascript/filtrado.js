/**
 * Crea una función que reciba una lista de personas,
 * una propiedad y un valor, para retornar un nuevo array
 * de personas filtradas por esa propiedad y el valor
 */

const propValue = (arrayPersonas, property, value) => arrayPersonas.filter(({ property }) => property === value);

export default propValue;