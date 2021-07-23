/**
 * En este archivo deberás:
 *
 * 1. Mostrar los nombres de las personas en el archivo "personas.js"
 * a través de la función que creaste en "mostrar.js"
 *
 * 2. Crear un nuevo array con los nombres de las personas en "personas.js"
 * en mayúsculas.
 *
 * 3. Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
 *
 * 4. Crear un nuevo array con las personas pertenecientes al vip.
 */
import personas from "./personas.js";
import peopleList from "./mostrar.js"
import propValue from "./filtrado.js"
import specifiedId from "./buscar.js"
import capitalization from "./capitalizacion.js"


console.clear();


// 1. Mostrar los nombres de las personas en el archivo "personas.js" a través de la función que creaste en "mostrar.js"
console.log(peopleList(personas));


// 2. Crear un nuevo array con los nombres de las personas en "personas.js" en mayúsculas.
const newArray = (arrayPersonas) => arrayPersonas.map(({ nombre }) => nombre.toUpperCase());
console.log(newArray(personas));


// 3. Búscar la primera persona con el rol de "viewer" en la lista de "personas.js"
const firstViewer = (arrayPersonas) => arrayPersonas.find(({ rol }) => rol === "viewer");
console.log(firstViewer(personas));


// 4. Crear un nuevo array con las personas pertenecientes al vip.
const justVIP = (arrayPersonas) => arrayPersonas.filter(({ seccion }) => seccion === 'vip');
console.log(justVIP(personas));

//Filtrado
console.log(propValue(personas, 'nombre', 'Victoria'));

//buscar
console.log(specifiedId(personas, 4));

//Capitalización
console.log(capitalization(personas));
