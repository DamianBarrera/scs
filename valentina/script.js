const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 

const nombreChica = [ 
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen1.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen2.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen3.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen4.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen5.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen6.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen7.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen8.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen9.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen10.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen11.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen12.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen13.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen14.png?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/valentina/valen15.jpg?raw=true"
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