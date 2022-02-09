const container = document.querySelector('.gallery');
 

const tiara = [ "tiara1.jpg","tiara2.jpg","tiara3.jpg","tiara4.JPG","tiara5.jpg" ]


tiara.forEach( A => crearCard(A) );



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

 