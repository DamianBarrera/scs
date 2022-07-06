const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 

const nombreChica = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca1.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca2.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca3.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca4.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca5.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca6.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca7.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca8.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca9.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca10.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca11.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca12.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca13.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca15.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca16.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca17.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca18.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena19.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca20.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena21.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena22.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca23.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca24.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca25.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca26.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca27.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca28.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/febrero%2022%20jpg.jpg?raw=true"
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