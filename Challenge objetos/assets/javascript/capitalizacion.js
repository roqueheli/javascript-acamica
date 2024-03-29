/**
 * Crea una función que reciba una lista de personas y retorne
 * un nuevo array con los nombres de esas personas en mayúsculas.
 *
 * Revisa la documentación del método toUpperCase en
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 */

 const capitalization = (arrayPersonas) => arrayPersonas.map(({ nombre }) => nombre.toUpperCase());

 export default capitalization;