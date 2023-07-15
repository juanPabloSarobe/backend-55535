function mostrarLista(lista) {
  if (lista.length === 0) {
    console.log("lista vacia");
  } else {
    console.log(lista);
  }
}

mostrarLista([1, 2, 3]);
mostrarLista([]);

(function (lista) {
  if (lista.length === 0) {
    console.log("lista vacia");
  } else {
    console.log(lista);
  }
})([1, 2, 3, 4, 5]);

function crearMultiplicador(numero1) {
  return function (numero2) {
    return numero1 * numero2;
  };
}

const duplicar = crearMultiplicador(2);

console.log(duplicar(5));
console.log(duplicar(8));

const triplicar = crearMultiplicador(3);
const valor = 10;
console.log(triplicar(3));
console.log(`triplicar ${valor} es igual a `, triplicar(valor));

class Contador {
  static totalContadores = 0;

  constructor(nombre) {
    this.nombre = nombre;
    this.contadorIndividual = 0;
  }

  agregarContador(c) {
    this.contadorIndividual += c;
    Contador.totalContadores += c;
  }

  obtenerResponsable() {
    console.log(this.nombre);
  }
  obtenerCuentaIndividual() {
    console.log(this.contadorIndividual);
  }

  contar() {
    this.contadorIndividual++;
    Contador.totalContadores++;
  }
}

const p = new Contador("pedro");
const j = new Contador("juan");

p.obtenerResponsable();
p.obtenerCuentaIndividual();
p.agregarContador(5);
p.obtenerCuentaIndividual();

j.agregarContador(1);
j.contar();
console.log(Contador.totalContadores);
