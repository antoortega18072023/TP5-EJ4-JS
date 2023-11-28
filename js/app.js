// variables

const reloj = document.getElementsById('reloj')
const dia = document.getElementById('dia')
const parrafoHora = document.getElementById('hora')

// funciones

const primerLetraMayuscula = (texto) => {
    return texto[0].toUpperCase() + texto.slice(1)
}