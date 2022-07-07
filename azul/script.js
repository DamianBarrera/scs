const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 

const nombreChica = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul1.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul2.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul3.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul4.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul5.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul6.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul7.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul8.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul9.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul10.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul11.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul12.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul13.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul15.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul16.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul17.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul18.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul19.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul20.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul21.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul22.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul23.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul24.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul25.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul26.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul27.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul28.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul29.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul30.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul31.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul32.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul33.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul34.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/azul/azul35.jpg?raw=true"
    
]



let indiceImagen = undefined ;
let cantidadImagenes = nombreChica.length

// *************************
nombreChica.forEach( A => crearCard(A) );
container.addEventListener('click', abrirModal);
close.addEventListener('click',cerrarModal);


 
 // *********funciones*********


function crearCard( param ){
    const fragment = document.createDocumentFragment();
    // const card = document.createElement('DIV');
    // card.classList.add('card');
    const image =document.createElement('IMG');
    image.src=param;
    image.classList.add('pic')
    // card.appendChild(image);
    fragment.appendChild(image)
    container.appendChild(fragment)
    
}




function abrirModal (e) {
    if(e.target.classList.contains('pic')){
        modal.style.display="block";
        crearImagen(e);
        let fotos = document.querySelectorAll('.container img')
        let ubicacion = Array.from(fotos).indexOf(e.target)
        indiceImagen = ubicacion
        document.addEventListener('keydown', listenerkeys)
        
    }      
}
function crearImagen(e){
     document.querySelector('.modal img').src = e.target.src;
     
}

function cerrarModal(e){
    modal.style.display="none";
    document.querySelector('.modal img').src = "";
        
}

// *********Cambiar Imagen *********
 
prev.addEventListener('click', imagenAnterior)
next.addEventListener('click', imagenSiguiente)

function listenerkeys(e) {
    if(e.key == 'ArrowLeft') {
        imagenAnterior();
    }else if(e.key == 'ArrowRight'){
        imagenSiguiente();
    }else if (e.key == 'Escape'){
        modal.style.display="none";
        document.querySelector('.modal img').src = "";
        document.removeEventListener('keydown',listenerkeys)
    }
}

function imagenAnterior(e){
     
    if(indiceImagen == 0) {
        document.querySelector('.modal img').src = nombreChica[indiceImagen];

    }else {
        indiceImagen --
        document.querySelector('.modal img').src = nombreChica[indiceImagen];

    }

}

function imagenSiguiente(){
    if(indiceImagen == cantidadImagenes -1) {
        document.querySelector('.modal img').src = nombreChica[indiceImagen];

    }else {
        indiceImagen ++
        document.querySelector('.modal img').src = nombreChica[indiceImagen];
    }
}