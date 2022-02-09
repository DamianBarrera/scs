const container = document.querySelector('.gallery');
 

const yasmin =["yasmin1.jpeg","yasmin2.jpeg","yasmin3.jpeg","yasmin4.jpeg","yasmin5.jpeg","yasmin6.jpeg",
"yasmin7.jpeg","yasmin8.jpeg","yasmin9.jpeg","yasmin10.jpeg","yasmin11.jpeg","yasmin12.jpeg","yasmin13.jpeg",
"yasmin14.jpeg","yasmin15.jpeg","yasmin16.jpeg","yasmin17.jpeg","yasmin18.jpeg","yasmin19.jpeg","yasmin20.jpeg",
"yasmin21.jpeg","yasmin22.jpeg","yasmin23.jpeg","yasmin24.jpeg","yasmin25.jpeg","yasmin26.jpeg","yasmin27.jpeg",
"yasmin28.jpeg","yasmin29.jpeg","yasmin30.jpeg","yasmin31.jpg","yasmin32.jpg"]
 
yasmin.forEach( A => crearCard(A) );



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

 