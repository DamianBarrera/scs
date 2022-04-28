const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const tiara = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara1.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara2.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara3.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara4.JPG?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara5.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara6.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/tiara/tiara7.jpg?raw=true"
 ]




// *************************
tiara.forEach( A => crearCard(A) );
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


 