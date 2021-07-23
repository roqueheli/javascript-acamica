console.clear();

const personas = [
  { first: "Albert", last: "Einstein", nacio: 1879, murio: 1955 },
  { first: "Isaac", last: "Newton", nacio: 1643, murio: 1727 },
  { first: "Galileo", last: "Galilei", nacio: 1564, murio: 1642 },
  { first: "Marie", last: "Curie", nacio: 1867, murio: 1934 },
  { first: "Johannes", last: "Kepler", nacio: 1571, murio: 1630 },
  { first: "Nicolaus", last: "Copernicus", nacio: 1473, murio: 1543 },
  { first: "Max", last: "Planck", nacio: 1858, murio: 1947 },
  { first: "Katherine", last: "Blodgett", nacio: 1898, murio: 1979 },
  { first: "Ada", last: "Lovelace", nacio: 1815, murio: 1852 },
  { first: "Sarah E.", last: "Goode", nacio: 1855, murio: 1905 },
  { first: "Lise", last: "Meitner", nacio: 1878, murio: 1968 },
  { first: "Hanna", last: "Hammarström", nacio: 1829, murio: 1909 }
];

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y apellido de cada persona
const nombreApellido = (arrayPersonas) => arrayPersonas.map(({ first, last }) => first, last);
console.log(nombreApellido(personas));

// Utiliza .map para crear un nuevo array de objetos,
// donde cada objeto tenga solo el nombre y la fecha de nacimiento de cada persona
const nombreFNac = (arrayPersonas) => arrayPersonas.map(({ first, nacio }) => first, nacio);
console.log(nombreFNac(personas));

// Utiliza .filter para crear un nuevo array de objetos
// donde cada objeto represente la persona que haya nacido durante el 1800
const just1800 = (arrayPersonas) =>
  arrayPersonas.filter(({ nacio }) => nacio === 1800);
console.log(just1800(personas));

// Utiliza .map para crear un nuevo array de objetos con el apellido
// de cada persona y su edad (murio - nacio)
const nameEdad = (arrayPeople) =>
  arrayPeople.map(({first, murio, nacio}) => {
    return {
      name: first,
      age: murio - nacio
    };
  });
console.log(nameEdad(personas));

// Utiliza .filter para crear un nuevo array de objetos con las personas
// cuyo nombre sea mayor a 4 letras
const fourLetters = (arrayPersonas) =>
  arrayPersonas.filter(({ first }) => first.length > 4);

console.log(fourLetters(personas));

// Utiliza .filter para crear un nuevo array de objetos con las personas
// que hayan nacido después de 1800
const after1800 = (arrayPersonas) =>
  arrayPersonas.filter(({ nacio }) => nacio >= 1800);
console.log(after1800(personas));

// Utiliza .filter  para para crear un nuevo array de objetos con las personas
// que hayan tenido una edad par (edad % 2 === 0, busca en google el operador "modulo")
const edadPar = (arrayPersonas) =>
  arrayPersonas.filter(({murio, nacio}) => (murio - nacio) % 2);
console.log(edadPar(personas));
