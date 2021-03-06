const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 

let nombreChica =[
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime1.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime2.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime3.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime4.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime5.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime6.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime7.jpeg.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime8.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime9.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime10.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime11.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime12.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime13.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime15.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime16.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/gimena/gime17.jpg?raw=true"
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