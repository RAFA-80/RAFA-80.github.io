(function() {

    const pasar = [...document.querySelectorAll('.recetas__body')];
    const botonSiguiente = document.querySelector('#siguiente');
    const botonAnterior = document.querySelector('#anterior');
    let valor;

    botonSiguiente.addEventListener('click', ()=>{
        cambiarPosicion(1);
    });

    botonAnterior.addEventListener('click', ()=>{
        cambiarPosicion(-1);
    });

    const cambiarPosicion = (add)=>{
        const actual = document.querySelector('.recetas__body--show').dataset.id;
        valor = Number(actual);
        valor+= add;

        pasar[Number(actual)-1].classList.remove('recetas__body--show');
        if(valor === pasar.length+1 || valor === 0){
            valor = valor === 0 ? pasar.length : 1;
        }
        pasar[valor-1].classList.add('recetas__body--show');
        console.log(value);
    }


    
})(); 