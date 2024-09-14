class Agencia {
    constructor (nombre){
        this.nombre = nombre;
        this.tiquetes = [];
        this.listadebuses = [];
    }

    calcularVentas(){
        let totalVentas = 0;
        this.tiquetes.forEach(tiquete => {
            if (tiquete.vendido){
                totalVentas += tiquete.getPrecio();
            }
        });
        return "EL total de ventas es: " + totalVentas;
    }

    agregarTiquetes(tiquete){
        this.tiquetes.push(tiquete);
    }

    mostrarTiquetes(){
        this.tiquetes.forEach(tiquete => {
            console.log(`Origen: ${tiquete.origen}, Destino: ${tiquete.destino}, Número de silla: ${tiquete.numerodesilla}, Hora: ${tiquete.hora}, Fecha: ${tiquete.fecha}, Precio: ${tiquete.precio}`, "Disponibilidad: " + tiquete.disponilidad());
        });
    }

    agregarBus(bus){
        this.listadebuses.push(bus);
    }

    mostrarListaBuses(){
        this.listadebuses.forEach(bus => {
            console.log(`Placa: ${bus.placa}, Número de bus: ${bus.numerodebus}`);
        });
    }
}

class Bus {
    constructor (placa, numerodebus){
        this.placa = placa;
        this.numerodebus = numerodebus;
        this.sillas = [];
    }

    agregarSilla(silla){
        this.sillas.push(silla);
    }

    mostrarSillas() {
        this.sillas.forEach(silla => {
            console.log(`Silla número: ${silla.numero}, Descripción: ${silla.descripcion}, Disponibilidad: ${silla.disponilidad}`);
        });
    }
}

class Silla {
    constructor (numero, descripcion, disponilidad){
        this.numero = numero;
        this.descripcion = descripcion;
        this.disponilidad = disponilidad;
    }
}

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
        this.vendido = false;
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

    disponilidad(){
        if (this.pasajero){
            this.vendido = true;
            return "No";
        } else {
            return "Sí";
        }
    }
}

class Pasajero {
    constructor (nombre, identificacion, telefono, edad){
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.telefono = telefono;
        this.edad = edad;
    }

    mostrarInformacion(){
        console.log(`Nombre: ${this.nombre}, Identificación: ${this.identificacion}, Teléfono: ${this.telefono}, Edad: ${this.edad}`);
    }
}


// Test pasajero
const pasajero1 = new Pasajero("Juan", "123456", "3023234", 25);
pasajero1.mostrarInformacion();
const pasajero2 = new Pasajero("Pedro", "123457", "3023235", 30);

// Crear instancias de la clase Silla
const silla1 = new Silla(1, "Silla delantera", true);
const silla2 = new Silla(2, "Silla trasera", false);

// Test bus
const bus1 = new Bus("ABC-123", 45);
// Agregar las sillas al bus
bus1.agregarSilla(silla1);
bus1.agregarSilla(silla2);
// Mostrar las sillas del bus
bus1.mostrarSillas();

// Test tiquete
const tiquete1 = new Tiquete("Maicao", "Cali", 1, "10:00", "2021-06-01", 50000, bus1, pasajero1);
const tiquete2 = new Tiquete("Maicao", "Cali", 2, "10:00", "2021-06-01", 50000, bus1, );

// Test agencia
const agencia1 = new Agencia("Copetran");
agencia1.agregarBus(bus1);
agencia1.mostrarListaBuses();
agencia1.agregarTiquetes(tiquete1);
agencia1.agregarTiquetes(tiquete2);
agencia1.mostrarTiquetes();
console.log(agencia1.calcularVentas());