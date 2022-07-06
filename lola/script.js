const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 

let nombreChica =["https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola1.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola2.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola3.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola4.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola5.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola6.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola7.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola8.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola9.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola10.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola11.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola12.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola13.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola14.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola15.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola16.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola17.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola18.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola19.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola20.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola21.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola22.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola23.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola24.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola25.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola26.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/lola/lola27.jpg?raw=true"]


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