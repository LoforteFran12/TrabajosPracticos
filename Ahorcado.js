//creo una constante con 100 palabras
const palabras = [
    "amor", "paz", "felicidad",
    "familia", "amistad", "libertad",
    "esperanza", "sueño", "luz",
    "sonrisa", "naturaleza", "cielo",
    "mar", "tierra", "vida", "corazón",
    "pasión", "sabiduría", "tiempo",
    "recuerdo", "sabor", "arte",
    "música", "color", "cultura",
    "tradición", "historia", "aventura",
    "destino", "caminos", "destello",
    "brillo", "mariposa", "estrella",
    "sonido", "silencio", "río",
    "montaña", "flor", "jardín",
    "casa", "hogar", "amigo",
    "compañero", "viaje", "regalo",
    "sonido", "paso", "sombra",
    "lago", "brisa", "nieve",
    "sol", "luna", "nube",
    "canto", "alegría", "tristeza",
    "esperanza", "ciencia", "sabiduría",
    "estudio", "flecha", "risas",
    "requiem", "pensamiento",
    "conocimiento", "misterio", "vida",
    "universo", "pasado", "futuro",
    "momento", "creación", "ilusión",
    "realidad", "horizonte", "profundidad",
    "reflejo", "espejo", "sueños",
    "destinos", "valores", "justicia",
    "honor", "valentía", "respeto",
    "generosidad", "empatía", "compasión",
    "fuerza", "coraje", "poder",
    "sinceridad", "lealtad", "sabiduría",
    "misterios", "conexión", "descubrimiento", "aventura"
];

let boton;

// son las cantidades que te podes equivocar
let vidas = 6;

//select es la palabra que fue seleccionada por el random
let Select;

//cajita es el input
let cajita;

//mayo es el que se encarga de poner las letras en su lugar
let mayo;

// cuenta la cantidad de letras correctas
let contador = 0;

setup = () => {
    createCanvas(1470, 730);
    background("purple");

    /*
    Creo un boton de inicio el 
    cual llamara la funcion juega
    */
    boton = createButton('Start');
    boton.position(670, 600);
    boton.size(100, 100);
    boton.mousePressed(juega);

    //creo un input para poder colocar las letras
    cajita = createInput();
    cajita.position(630, 570);

}

juega = () => {
    /*
    se borra el boton para evitar que 
    se vuelva a presionar y ponga otra palabra
    */
    boton.remove()
    // selecciona una palabra cualquiera del arreglo
    Select = random(palabras);
    Select = Select.toUpperCase();
    console.log(Select);
}

function keyPressed() {
    //verifica si la letra esta en la palabra
    if (keyIsDown(ENTER) === true) {
        for (let i = 0; i < Select.length; i++) {
            if (mayo == Select[i]) {
                console.log("si va");
                letra(i);
                contador++;
            }
        }
        /*
        llama la funcion man si es que 
        la letra no va en la palabra
        */
        man();
        contador = 0;
    }

}
letra = (i) => {
    //dependiendo de la posicion de la letra se escriba
    if (i == 0) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 30, 50);
    }
    if (i == 1) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 90, 50);
    }
    if (i == 2) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 150, 50);
    }
    if (i == 3) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 210, 50);
    }
    if (i == 4) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 270, 50);
    }
    if (i == 5) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 330, 50);
    }
    if (i == 6) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 390, 50);
    }
    if (i == 7) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 450, 50);
    }
    if (i == 8) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 510, 50);
    }
    if (i == 9) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 570, 50);
    }
    if (i == 10) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 630, 50);
    }
    if (i == 11) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 690, 50);
    }
    if (i == 12) {
        console.log(mayo);
        textSize(40);
        fill('black');
        text(mayo, 750, 50);
    }
    /*
    Cada uno de estos if sirve para que al
    momento de poner una letra correcta
    se ubique en su lugar correspondiente
    */
}

function draw() {
    /*
    Esto sirve para hacer la horca
    */
    strokeWeight(5);
    line(150, 600, 150, 180);
    line(100, 600, 200, 600);
    line(140, 180, 420, 180);
    line(400, 220, 400, 180);

    cajita.input(() => {
        /* 
        Esto permitira que solo se 
        pueda poner una letra a la vez
        */
        mayo = cajita.value();
        if (mayo.length > 1) {
            cajita.value(mayo.charAt(0));
        }
    });
    drawSprites();
}

function man() {
    if (contador === 0) {
        console.log("equivocao");
        vidas--;
        if (vidas === 5) {
            circle(400, 270, 100);
        }

        if (vidas === 4) {
            line(400, 465, 400, 320);
        }

        if (vidas === 3) {
            line(300, 400, 400, 320);
        }

        if (vidas === 2) {
            line(500, 400, 400, 320);
        }

        if (vidas === 1) {
            line(300, 550, 400, 465);
        }

        if (vidas === 0) {
            line(500, 550, 400, 465);
            alert("perdiste, refresca la pagina para volver a jugar")
        }
    }
}