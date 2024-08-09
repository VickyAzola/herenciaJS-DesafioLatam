import { Propietario, Animal, Mascota, Consultorio } from "./clases.js";

//nombre, direccion, telefono, tipo, nombreMascota, enfermedad
let mascota1 = new Mascota("Victoria", "Cancún", "912345678", "Perro", "Polli", "Control Anual")
let consultorio1 = new Consultorio("Veterinaria", mascota1)

let form = document.getElementById("form")
form.addEventListener("submit", function(event) {
  event.preventDefault()

  let nombre = document.getElementById("propietario").value
  let telefono = document.getElementById("telefono").value
  let direccion = document.getElementById("direccion").value
  let nombreMascota = document.getElementById("nombreMascota").value
  let tipo = document.getElementById("tipo").value
  let enfermedad = document.getElementById("enfermedad").value
  let resultado = document.getElementById("resultado")

  let mascota = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
  consultorio1.mascotas = mascota //mascotas es el getter

  console.log(consultorio1)

  consultorio1.mascotas.forEach(elem => {
    resultado.innerHTML += `
    <li><!--Nombre Dueño: ${elem.nombre} - Teléfono: ${elem.telefono} - Dirección: ${elem.direccion} - -->
    Nombre Mascota: ${elem.nombreMascota} - Tipo: ${elem.tipo} - Motivo de Consulta: ${elem.enfermedad}</li>
    <li>Dueño: ${elem.datosPropietario()}</li>
    <br>
    `
  }) 

  event.target.reset()
})

