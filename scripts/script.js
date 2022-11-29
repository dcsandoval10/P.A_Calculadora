let staging = "";
let valor1;
let valor2;
let respuesta;
let yaEsMiTurno = false
let opr;

/* const stage = document.getElementById('stage')
const uno = document.getElementById('uno')
const dos = document.getElementById('dos')
const tres = document.getElementById('tres')
const cuatro = document.getElementById('cuatro')
const cinco = document.getElementById('cinco')
const seis = document.getElementById('seis')
const siete = document.getElementById('siete')
const ocho = document.getElementById('ocho')
const nueve = document.getElementById('nueve')
const cero = document.getElementById('cero')
const suma = document.getElementById('suma')
const resta = document.getElementById('resta')
const multi = document.getElementById('multi')
const div = document.getElementById('div')
const borrar = document.getElementById('borrar')
const limpiar = document.getElementById('limpiar')
const resp = document.getElementById('resp') */

suma.addEventListener('click', () => {
    /* yaEsMiTurno = true */
    valor1 = staging
    staging = ''
    opr = "suma"
})
resta.addEventListener('click', () => {
    /* yaEsMiTurno = true */
    valor1 = staging
    staging =''
    opr = "resta"
})
div.addEventListener('click', () => {
    /* yaEsMiTurno = true */
    valor1 = staging
    staging = ''
    opr = "div"
})
multi.addEventListener('click', () => {
    /* yaEsMiTurno = true */
    valor1 = staging
    staging = ''
    opr = "multi"
})
resp.addEventListener('click', () => {
    valor2 = staging
    staging =''
    operacion(opr)
})
borrar.addEventListener('click', () => {
    staging = ''
    let a = `${staging}`
    stage.innerHTML = a;
})
limpiar.addEventListener('click', () => {
    valor1= "0"
    valor2= "0"
    staging = ""
    let a = `${staging}`
    stage.innerHTML = a;
})
carita.addEventListener('click', () => {
    alert(":D :D :D :D :D :D :D ")
})


if (yaEsMiTurno == false) {
    uno.addEventListener('click', () => {
        staging += '' + 1
        let a = `${staging}`
        stage.innerHTML = a;
    })
    dos.addEventListener('click', () => {
        staging += '' + 2
        let a = `${staging}`
        stage.innerHTML = a;
    })
    tres.addEventListener('click', () => {
        staging += '' + 3
        let a = `${staging}`
        stage.innerHTML = a;
    })
    cuatro.addEventListener('click', () => {
        staging += '' + 4
        let a = `${staging}`
        stage.innerHTML = a;
    })
    cinco.addEventListener('click', () => {
        staging += '' + 5
        let a = `${staging}`
        stage.innerHTML = a;
    })
    seis.addEventListener('click', () => {
        staging += '' + 6
        let a = `${staging}`
        stage.innerHTML = a;
    })
    siete.addEventListener('click', () => {
        staging += '' + 7
        let a = `${staging}`
        stage.innerHTML = a;
    })
    ocho.addEventListener('click', () => {
        staging += '' + 8
        let a = `${staging}`
        stage.innerHTML = a;
    })
    nueve.addEventListener('click', () => {
        staging += '' + 9
        let a = `${staging}`
        stage.innerHTML = a;
    })
    cero.addEventListener('click', () => {
        staging += '' + 0
        let a = `${staging}`
        stage.innerHTML = a;
    })
}

function operacion(queHago) {
    if (queHago == "suma"){
        respuesta = Number(valor1) + Number(valor2)
        let a = `${respuesta}`
        stage.innerHTML = a;
    }
    if (queHago == "resta"){
        respuesta = Number(valor1) - Number(valor2)
        let a = `${respuesta}`
        stage.innerHTML = a;
    }
    if (queHago == "div"){
        respuesta = Number(valor1) / Number(valor2)
        let a = `${respuesta}`
        stage.innerHTML = a;
    }
    if (queHago == "multi"){
        respuesta = Number(valor1) * Number(valor2)
        let a = `${respuesta}`
        stage.innerHTML = a;
    }
}