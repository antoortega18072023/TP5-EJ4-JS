// variables

const reloj = document.getElementsById('reloj')
const dia = document.getElementById('dia')
const parrafoHora = document.getElementById('hora')

// funciones

const primerLetraMayuscula = (texto) => {
    return texto[0].toUpperCase() + texto.slice(1)
}

// objeto fecha (dia-mes-año)
const fecha = new Date()
let nombreDia = fecha.toLocaleString('es', {weekday: 'long'})
let diaMes = fecha.getDate()
let mes = fecha.toLocaleString('es', { month: 'long'});
let anio = fecha.toLocaleString('es', { year: 'numeric'});
let fechaCompleta = `${primerLetraMayuscula(nombreDia)} ${diaMes} de ${primerLetraMayuscula(mes)} del ${anio}`
dia.innerText = fechaCompleta

const verHora = () => {
    //  Objeto fecha (hora-minutos-segundos)
    let hora = new Date()
    let horas = hora.toLocaleString('es', {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true})
    
    const horaCompleta = `${horas}`
    parrafoHora.innerText = horaCompleta
  }
  
  setInterval(verHora, 1000)