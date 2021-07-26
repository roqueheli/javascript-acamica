   let personas = [{
    nombre: "Jhony",
    asistente: null,
    seccion: "gold",
    rol: "speaker"
  },
  {
    nombre: "Manuel",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
  },
  {
    nombre: "Fran",
    asistente: true,
    seccion: "vip",
    rol: "viewer"
  },
  {
    nombre: "Cintia",
    seccion: "platino",
    rol: "viewer"
  },
  {
    nombre: "Marcos",
    asistente: null,
    seccion: "gold",
    rol: "viewer"
  },
  {
    nombre: "Victoria",
    asistente: true,
    seccion: "platino",
    rol: "speaker"
  }
];

console.clear();

const asistentes = (listaPersonas) => listaPersonas.filter(({ asistente }) => { 
    /**
   * Esta fución debe calcular el total de asistentes
   * según una lista de personas.
   *
   * Se considera que una persona esta "asistente" si
   * la propiedad respectiva es distinta a null y undefined
   *
   * La función debe retornar el número de asistencias.
   */
  if (asistente === true) {
    return (listaPersonas = asistente.length);
  };
});

// La implementación debe ser:
let totalAsistentes = asistentes(personas);
console.log(totalAsistentes); // debe ser 3

// 2. Sobre el sandbox anterior, desarrolla una
// función que te permita crear un nuevo array
// que tenga solo las personas asistentes.
// Es decir, que tengan la propiedad “asistente”
// dentro de su objeto, y que esta sea igual
// a “true”.
const personasAsistentes = (arrayPersonas) => arrayPersonas.filter(({ asistente }) => asistente === true);

let listaAsistente = personasAsistentes(personas);
console.log(listaAsistente);

// 3. Además, desarrolla una función que
// te permite crear un nuevo array que tenga
// solo las personas de la sección “platino”.
const personasPlatino = (arrayPersonas) => arrayPersonas.filter(({ seccion }) => seccion === "platino");

let listaPlatino = personasPlatino(personas);
console.log(listaPlatino);

// 4. Finalmente, crea una única función que cree un
// nuevo array según un filtro y un valor especificado,
// los cuales tendrán que ser pasados como argumentos
// a la función.
const filtrarPersonas = (propiedad, valor) =>
  personas.filter((filterAdvanced) => filterAdvanced[propiedad] === valor);

let speakers = filtrarPersonas("rol", "speaker");
console.log(speakers);

let arregloNumeros = [1, 2, 3, 4, 5];

const numerosX2 = (arregloNumeros) => arregloNumeros.map(({ numeros }) => numeros * 2);
console.log(numerosX2(arregloNumeros));

let personas2 = [{
    nombre: 'Carolina',
    edad: 35
  },
  {
    nombre: 'Jose',
    edad: 20
  },
  {
    nombre: 'Luis',
    edad: 15
  }
];

const soloNombres = (personas) => personas.map(({ nombre }) => {
  return {
    nombre: nombre
  }
});
console.log(soloNombres(personas2));

//Find

//For Each