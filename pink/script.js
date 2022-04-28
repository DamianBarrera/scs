const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const pink = [ 
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink1.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink2.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink3.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink4.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink5.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink6.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink7.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink8.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/pink/pink9.jpg?raw=true"
]





// *************************
pink.forEach( A => crearCard(A) );
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


 