const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

let flor = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar1.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar2.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar3.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar4.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar5.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar6.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar7.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar8.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar9.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar10.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar11.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar12.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar13.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar15.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar16.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar17.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar18.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar19.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar20.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar21.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar22.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar23.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar24.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar25.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar26.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar27.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar28.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar29.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar30.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar31.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar32.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar33.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar34.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar35.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar36.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar37.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar38.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar39.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar40.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/flor_barbie/bar41.jpeg?raw=true",

]


// *************************
flor.forEach( A => crearCard(A) );
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


 