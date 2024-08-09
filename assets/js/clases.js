class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
  }

  datosPropietario() {
    return `${this.nombre} - ${this.telefono} - ${this.direccion}`
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono) //lo que es heredado del padre Propietario
    this.tipo = tipo
  }
}

class Mascota extends Animal {
  #nombreMascota
  #enfermedad
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo) //lo que es heredado del padre Animal
    this.#nombreMascota = nombreMascota
    this.#enfermedad = enfermedad
  }

  get nombreMascota() {
    return this.#nombreMascota
  }

  set nombreMascota(nuevoNombreMascota) {
    this.#nombreMascota = nuevoNombreMascota
  }

  get enfermedad() {
    return this.#enfermedad
  }

  set enfermedad(NuevaEnfermedad) {
    this.#enfermedad = NuevaEnfermedad
  }
}

class Consultorio {
  #mascotas
  constructor(nombre, mascota) {
    this.nombre = nombre
    this.#mascotas = [mascota]
  }

  get mascotas() {
    return this.#mascotas
  }

  set mascotas(nuevaMascota) {
    this.#mascotas.push(nuevaMascota)
  }
}

export {
  Propietario,
  Animal,
  Mascota,
  Consultorio
}