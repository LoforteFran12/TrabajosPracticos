// variables de sprites
let ye;
let az;
let ro;
let ve;

//variables para la jugabilidad
let ia = [];
let jugadota = [];
let boton;
let compara;
let click = false;
let tw = 1;

//variables para definir el tiempo
let sp;
let sptw;

setup = () => {
    createCanvas(600, 600);


    // la creacion de los sprites
    ye = createSprite(200, 210, 150, 150);
    ye.shapeColor = color(204, 204, 0);

    az = createSprite(390, 210, 150, 150);
    az.shapeColor = color(0, 0, 139);

    ro = createSprite(200, 400, 150, 150);
    ro.shapeColor = color(139, 0, 0);

    ve = createSprite(390, 400, 150, 150);
    ve.shapeColor = color(0, 100, 0);

    boton = createButton('Start');
    boton.position(250, 500);
    boton.size(100, 100);
    boton.mousePressed(juega);

    compara = createButton('Comparar')
    compara.position(400, 500);
    compara.size(100, 100);
    compara.mousePressed(Bien);
}

/*
Creo las funciones para que a la hora de apretar uno de los sprites se 
"ilumine" (cambia de color a uno más claro)
*/

function mousePressed() {

    /*
    Esta funcion sirve para que no puedas hacer click
    a los cuadrados mientras se hace la secuencia, ya que 
    su valor es "false", una vez que la secuencia termine 
    click pasara a hacer "true"
    */
    
    if (click) {
        ye.onMousePressed = function () {
            ye.shapeColor = color(255, 255, 102);
            jugadota.push(1);
        }
        ye.onMouseReleased = function () {
            ye.shapeColor = color(200, 200, 0);
        }

        az.onMousePressed = function () {
            az.shapeColor = color('blue');
            jugadota.push(2);
        }
        az.onMouseReleased = function () {
            az.shapeColor = color(0, 0, 139);
        }

        ro.onMousePressed = function () {
            ro.shapeColor = color('red');
            jugadota.push(3);
        }
        ro.onMouseReleased = function () {
            ro.shapeColor = color(139, 0, 0);
        }

        ve.onMousePressed = function () {
            ve.shapeColor = color(0, 255, 0);
            jugadota.push(4);
        }
        ve.onMouseReleased = function () {
            ve.shapeColor = color(0, 100, 0);
        }
    }
}


draw = () => {
    background(0);
    drawSprites();
}

// la funcion "juega" sirve para hacer la secuencia

juega = () => {

    for (let i = 0; i < tw; i++) {

        let patron;
        patron = random(1, 5);
        patron = floor(patron);
        ia.push(patron);
    }

    for (let a = 0; a < ia.length; a++) {
        sp = (a + 1) * 2000;
        sptw = sp + 1000;

        if (ia[a] === 1) {
            setTimeout(amarilloE, sp);
        }

        if (ia[a] === 2) {
            setTimeout(azulE, sp);
        }

        if (ia[a] === 3) {
            setTimeout(rojoE, sp);
        }

        if (ia[a] === 4) {
            setTimeout(verdeE, sp);
        }

        setTimeout(off, sptw);
    }

    console.log(ia);
    console.log(jugadota);

    jugadota = [];
}

amarilloE = () => {
    ye.shapeColor = color(255, 255, 102);
}
azulE = () => {
    az.shapeColor = color('blue');
}
rojoE = () => {
    ro.shapeColor = color('red');
}
verdeE = () => {
    ve.shapeColor = color(0, 255, 0);
}

off = () => {
    ye.shapeColor = color(200, 200, 0);
    az.shapeColor = color(0, 0, 139);
    ro.shapeColor = color(139, 0, 0);
    ve.shapeColor = color(0, 100, 0);

    /* 
    Una vez que la secuencia termine, click sera true 
    osea, se te habilita para que puedas clickear los 
    sprites
    */

    click = true;
}

comparar = (ia, jugadota) => {

    console.log(jugadota)

    /*
    Este for recorre "ia" y compara si la
    secuencia es igual a jugadota
    para saber si te equivocaste o no,
    aparte un if que te compara con 
    undefined para saber si seleccionaste
    un sprite o no.
    */
    for (let i = 0; i < ia.length; i++) {
        if (ia[i] != jugadota[i]) {
            if (jugadota[i] != undefined) {
                return false;
            }
        }
    }

    /*
    Este if compara solamente cuando
    ia y jugadota tengan la misma
    cantidad de elementos, y
    el .every compara ambos
    arreglos.
    */
    if(ia.length === jugadota.length && ia.every((v, index) => v === jugadota[index])){
        return true;
    }

}

// esta funcion es la encargada de advertir al jugador si lo hizo bien o no

Bien = () => {

    if (jugadota.length === ia.length) {
        console.log("estoy comparando")
        if (comparar(jugadota, ia)) {

            //si todo esta bien (osea devuelve true), saltara una alerta que te dira que lo siguiente:

            juega();

        } else {

            //en caso contrario (que devuelva false) la alerta te dira si esta mal

            Perdiste();
        }
    }
}

Perdiste = () => {
    alert("Game Over");
    ye.remove();
    az.remove();
    ro.remove();
    ve.remove();
}