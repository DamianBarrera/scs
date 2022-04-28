const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

let male = [
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male1.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male2.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male3.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male4.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male5.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male6.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male7.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male8.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male9.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male10.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male11.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male12.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male13.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male14.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male15.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male16.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male17.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male18.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male19.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male20.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male21.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male22.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male23.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male24.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male25.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male26.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male27.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male28.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male29.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male30.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male31.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male32.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male33.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male34.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/malena/male35.jpg?raw=true",
]




// *************************
male.forEach( A => crearCard(A) );
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


 