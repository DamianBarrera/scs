const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const maca = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca1.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca10.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca11.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca12.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca15.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca16.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca17.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca18.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca2.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca3.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca4.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca5.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca6.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca7.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca8.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca9.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena19.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca20.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena21.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/macarena22.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca23.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/maca24.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/macarena/febrero%2022%20jpg.jpg?raw=true"
]




// *************************
maca.forEach( A => crearCard(A) );
container.addEventListener('click', abrirModal);
close.addEventListener('click',cerrarModal);

 

// *********funciones*********


function crearCard( param ){
    const fragment = document.createDocumentFragment();
    const card = document.createElement('DIV');
    card.classList.add('card');
    const image =document.createElement('IMG');
    image.src=param;
    image.classList.add('pic')
    card.appendChild(image);
    fragment.appendChild(card)
    container.appendChild(fragment)
    
}

function abrirModal (e) {
    if(e.target.classList.contains('pic')){
        modal.style.display="block";
        crearImagen(e);
        container.addEventListener('click',(e)=>{
            contadorImg = Array.from(fotos).indexOf(e.target)
             
        }) 
       
    }
      
      
}
function crearImagen(e){
     document.querySelector('.modal img').src = e.target.src;
     
}

function cerrarModal(e){
    modal.style.display="none";
    document.querySelector('.modal img').src = "";
        
}


// ****************************
// const fotos = document.querySelectorAll('.container img')
// const container2 = document.querySelector('.container') 
// let ubicacion = 0;

// container2.addEventListener('click', (e)=> {
//     ubicacion = Array.from(fotos).indexOf(e.target)
//     console.log(ubicacion)
// })


 