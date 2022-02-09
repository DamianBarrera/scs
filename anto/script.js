const container = document.querySelector('.gallery');
 

const anto = [ "anto1.png","anto2.jpg","anto3.jpg","anto4.jpg","anto5.jpg","anto6.jpg",
"anto7.jpg","anto8.jpg" ]
 
anto.forEach( A => crearCard(A) );

    


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

 