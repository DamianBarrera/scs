const container = document.querySelector('.gallery');
 

const maca = ["maca1.jpeg","maca2.jpeg","maca3.jpeg","maca4.jpeg","maca5.jpeg","maca6.jpeg","maca7.jpeg",
"maca8.jpeg","maca9.jpeg","maca10.jpeg","maca11.jpeg","maca12.jpeg","maca13.jpeg","maca14.jpg","maca15.jpg","maca16.jpg","maca17.jpg"]
 
maca.forEach( A => crearCard(A) );



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

 