// Ejercicio de practica de la clase 2

class Usuario {
  constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  getBookNames() {
    let listaLibros = [];

    this.libros.forEach((e) => {
      listaLibros.push(e.nombre);
    });
    return listaLibros;
  }

  addBook(nombre, autor) {
    const libro = { nombre: nombre, autor: autor };
    this.libros.push(libro);
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }

  countMascota() {
    return this.mascotas.length;
  }
}

const usuario = new Usuario(
  "Mario",
  "Pergolini",
  [
    {
      nombre: "Don quijote",
      autor: "Miguel de Cervantes",
    },
  ],
  ["Pajaro", "lagarto"]
);

usuario.addBook("Moby Dick", "Herman Melville");
console.log(usuario.getFullName());
console.log(usuario.getBookNames());
usuario.addBook("El Principito", "Antoine de Saint-Exupéry");
console.log(usuario.getBookNames());
usuario.addMascota("perro");
usuario.addMascota("gato");
console.log(usuario.countMascota());
