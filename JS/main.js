document.addEventListener('DOMContentLoaded', () => {

    let cuerpo = document.querySelector('#cuerpo');

    //Creacion del tablero y agregandolo al cuerpo
    for(let i = 1; i <= 64; i++) {

        let tablero = document.createElement('DIV');
        cuerpo.appendChild(tablero);
        tablero.classList.add('casilla');
        
        switch(true) {

            case i <= 8:
                
                negro(tablero, i);
                break;

            case i > 8 && i <= 16 :
                
                blanco(tablero, i);
                break;
            
            case i > 16 && i <= 24 :
                
                negro(tablero, i);
                break;
            
            case i > 24 && i <= 32 :

                blanco(tablero, i);
                break;

            case i > 32 && i <= 40 :

                negro(tablero, i);
                break;

            case i > 40 && i <= 48 :

                blanco(tablero, i);
                break;
            
            case i > 48 && i <= 56 :

                negro(tablero, i);
                break;
            
            case i > 56 && i <= 64 :

                blanco(tablero, i);
                break;

            default :
                console.log('Joya');
                break;
        }
    };
});

function negro(tablero, i) {

    if(i % 2 === 0) {

        tablero.classList.add('negro');
    } else {

        tablero.classList.add('blanco');
    };
};

function blanco(tablero, i) {

    if(i % 2 === 0) {

        tablero.classList.add('blanco');
    } else {

        tablero.classList.add('negro');
    };
};
