// Registrador de tickets de eventos

// Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

// Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al
// precio de cada evento.

// Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
// Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
//      nombre
//      lugar
//      precio (deberá agregarse un 0.15 del valor original)
//      capacidad (50 por defecto)
//      fecha (hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un
// arreglo vacío.

// Debe contar con un método “agregarUsuario” El cual recibirá:
//      id del evento (debe existir, agregar validaciones)
//      id del usuario
// El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
// Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.

// Debe contar con un método “ponerEventoEnGira” El cual recibirá:
//      id del evento
//      nueva localidad
//      nueva fecha
// El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)

class TicketManager {
  static #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  getEventos() {
    return this.eventos;
  }
  agregarEvento = (
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString()
  ) => {
    const evento = {
      nombre,
      lugar,
      precio: (precio *= 1 + TicketManager.#precioBaseDeGanancia),
      capacidad,
      fecha,
      participantes: [],
    };
    if (this.eventos.length === 0) {
      evento.id = 1;
    } else {
      evento.id = this.eventos[this.eventos.length - 1].id + 1;
    }
    this.eventos.push(evento);
  };

  agregarUsuario = (idEvento, idUsuario) => {
    const eventoId = this.eventos.findIndex((evento) => {
      return evento.id === idEvento;
    });
    if (eventoId === -1) {
      return console.log("El evento no existe");
    } else {
      const participantesActuales = this.eventos[eventoId].participantes;
      if (!participantesActuales.includes(idUsuario)) {
        this.eventos[eventoId].participantes.push(idUsuario);
      } else {
        console.log(
          `El participante id: ${idUsuario} ya se encuentra registrado en el evento ${this.eventos[eventoId].nombre}`
        );
      }
    }
  };

  ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {
    if ((nuevaLocalidad || nuevaFecha) === undefined) {
      return console.log(
        `La nueva localidad o la nueva fecha no pueden estar vacias`
      );
    }

    const eventoId = this.eventos.findIndex((evento) => {
      return evento.id === idEvento;
    });
    if (eventoId === -1) {
      return console.log("El evento no existe");
    } else {
      const eventoElegido = this.eventos[eventoId];
      const nuevoEvento = {
        ...eventoElegido,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
        id: this.eventos[this.eventos.length - 1].id + 1,
      };
      this.eventos.push(nuevoEvento);
    }
  };
}

const ticket1 = new TicketManager();
ticket1.agregarEvento("Divididos", "Neuquen", 2000);
ticket1.agregarEvento("Las Pelotas", "Rio Negro", 3000);
ticket1.agregarEvento("Sumo", "Bs As", 1000);
ticket1.agregarUsuario(34, 4);
ticket1.agregarUsuario(3, 4);
ticket1.agregarUsuario(3, 2);
ticket1.agregarUsuario(3, 4);
ticket1.ponerEventoEnGira(3, "chubut", "15/08/23");
console.log(ticket1.getEventos());
