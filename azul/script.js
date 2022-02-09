const container = document.querySelector('.gallery');
 

const azul = ["azul1.JPG","azul2.JPG","azul3.JPG","azul4.JPG","azul5.JPG","azul6.JPG","azul7.JPG",
"azul8.JPG","azul9.JPG","azul10.JPG","azul11.JPG","azul12.JPG","azul13.JPG","azul14.JPG","azul15.JPG","azul16.JPG",
"azul17.JPG","azul18.JPG","azul19.JPG","azul20.JPG","azul21.JPG","azul22.JPG","azul23.JPG","azul24.JPG","azul25.JPG",
"azul26.JPG","azul27.JPG","azul28.JPG","azul29.JPG","azul30.JPG","azul31.JPG","azul32.JPG"];

const paola = ["paola1.jpg"]
 
azul.forEach( A => crearCard(A) );



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

 