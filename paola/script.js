const container = document.querySelector('.gallery');
 

const paola = ["paola1.jpg","paola2.jpg","paola3.jpg","paola4.jpg"]
 
paola.forEach( A => crearCard(A) );



function crearCard( param ){
    const fragment = document.createDocumentFragment();
    const card = document.createElement('DIV');
    card.classList.add('card');
    const image =document.createElement('IMG');
    image.src=param;
    card.appendChild(image);
    fragment.appendChild(card)
    container.appendChild(fragment)
}

 