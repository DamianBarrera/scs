const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const yoha =["https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha1.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha2.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha3.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha4.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha5.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha6.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha7.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha8.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha9.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha10.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha11.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha12.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha13.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha14.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha15.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha16.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha17.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha18.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha19.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha20.jpeg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha21.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha22.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha23.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha24.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha25.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha26.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha27.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha28.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha29.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yohana/yoha30.jpg?raw=true"
]




// *************************
yoha.forEach( A => crearCard(A) );
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


 