// Ejerccio 1 clase 3

// Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades),
// consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.

// Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const tiposProductos = [];
let productosVendidos = 0;
let productosVendidos2 = 0;

for (const i of objetos) {
  const objeto = Object.keys(i);

  for (const e of objeto) {
    if (!tiposProductos.includes(e)) tiposProductos.push(e);
  }

  const vendidos = Object.values(i);

  for (const e of vendidos) {
    productosVendidos += e;
  }

  productosVendidos2 += vendidos.reduce((valor, total) => valor + total);
}
console.log(tiposProductos);
console.log(productosVendidos);
console.log(`total Vendidos con reduce: ${productosVendidos2}`);
