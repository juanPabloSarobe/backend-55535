const nombre = "pepe";

let edad = 25;

const precio = 99.9;

const seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

const peliculaFavorita = [
  {
    nombre: "Star Wars",
    anioEstreno: 1973,
    protagonistas: ["Luke Skywalker", "Han Solo", "Princess Leia"],
  },
  {
    nombre: "Toy Story",
    anioEstreno: 2006,
    protagonistas: ["Buddy", "el robot", "el dino"],
  },
];

console.log(nombre);
console.log(edad);
console.log(precio);
console.log(seriesFavoritas);
console.log(peliculaFavorita);

edad = edad + 1;
console.log(edad);

seriesFavoritas.push("Lucifer");
console.log(seriesFavoritas);
