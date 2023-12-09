document.addEventListener('DOMContentLoaded', () => {

    let cuerpo = document.querySelector('#cuerpo');

    //Creacion del tablero y agregandolo al cuerpo
    for(let i = 1; i <= 64; i++) {

        let tablero = document.createElement('DIV');
        cuerpo.appendChild(tablero);
        tablero.classList.add('casilla');

        if(i % 2 === 0) {

            tablero.classList.add('negro');
        } else {

            tablero.classList.add('blanco');
        };

    };

});