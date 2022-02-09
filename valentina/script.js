const container = document.querySelector('.gallery');
 

const valentina = [ "valen1.JPG","valen2.JPG","valen3.JPG","valen4.JPG","valen5.JPG","valen6.JPG","valen7.JPG", ]
 
valentina.forEach( A => crearCard(A) );



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

 