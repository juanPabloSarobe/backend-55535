// Clases con ECMAScript y ECMAScript avanzado
// Clase 2

class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct = (title, description, price, thumbnail, code, stock) => {
    function validacionDatos(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    ) {
      if (!title || title.length === 0) {
        throw new Error("El campo titulo no puede estar vacio");
      }
      if (!description || description.length === 0) {
        throw new Error("El campo descripcion no puede estar vacio");
      }
      if (!price || isNaN(price) || price < 0) {
        throw new Error(
          "El campo Precio no puede estar vacio y debe ser un valor numerico positivo"
        );
      }
      if (!thumbnail || thumbnail.length === 0) {
        throw new Error("El campo thumbnail no puede estar vacio");
      }
      if (!code || code.length === 0) {
        throw new Error("El campo code no puede estar vacio");
      }
      if (stock !== 0) {
        if (!stock || isNaN(stock) || stock < 0) {
          throw new Error(
            "El campo stock no puede estar vacio y debe ser un valor numerico /mayor o igual a cero"
          );
        }
      }
    }

    try {
      validacionDatos(title, description, price, thumbnail, code, stock);
    } catch (error) {
      return console.log(error);
    }

    const product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      stock: stock,
    };
    if (this.products.length === 0) {
      product.id = 1;
    } else {
      product.id = this.products[this.products.length - 1].id + 1;
    }
    this.products.push(product);
  };
  getProducts = () => {
    return this.products;
  };
}

const producto1 = new ProductManager();

console.log(producto1.getProducts());
producto1.addProduct(
  "producto prueba",
  "este es un producto de prueba",
  200,
  "sin imagen",
  "abc123",
  25
);
console.log(producto1.getProducts());

producto1.addProduct(
  "producto2",
  "Descripcion del producto 2",
  150,
  "sin imagen",
  "ABC456",
  0
);

console.log(producto1.getProducts());
