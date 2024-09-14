// // Crear instancias de la clase Silla
// const silla1 = new Silla(1, "Silla delantera", true);
// const silla2 = new Silla(2, "Silla trasera", false);
// // Agregar las sillas al bus
// bus.agregarSilla(silla1);
// bus.agregarSilla(silla2);
// // Mostrar las sillas del bus
// bus.mostrarSillas();

class Tiquete {
    constructor (origen, destino, numerodesilla, hora, fecha, precio, bus, pasajero){
        this.origen = origen;
        this.destino = destino;
        this.numerodesilla = numerodesilla;
        this.hora = hora;
        this.fecha = fecha;
        this.precio = precio;
        this.bus = bus;
        this.pasajero = pasajero;
    }

    setBus(bus){
        this.bus = bus;
    }

    setPasajero(pasajero){
        this.pasajero = pasajero;
    }

    getPrecio(){
        return this.precio;
    }
}

class Pasajero {
    constructor (nombre, identificacion, telefono, edad){
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.edad = edad;
    }

    getInformacion(){
        return `Nombre: ${this.nombre}, Identificación: ${this.identificacion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`;
    }
}