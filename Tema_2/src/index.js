function componente(){
    const elemnto = document.createElement('div');

    //loadash
    elemnto.innerHTML = _.join(['hola', 'Webpack'], ' ');
    return elemnto;    
}

document.body.appendChild(componente())