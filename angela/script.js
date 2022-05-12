const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

let angela =[
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela1.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela10.JPG?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela11.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela12.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela13.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela14.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela15.JPG?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela16.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela17.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela18.JPG?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela19.JPG?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela20.JPG?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela21.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela22.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela23.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela24.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela25.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela26.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela27.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela28.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela29.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela3.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela30.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela31.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela32.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela33.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela34.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela35.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela36.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela4.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela5.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela6.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela7.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela8.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela9.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela37.jpg?raw=true",
"https://github.com/DamianBarrera/imagenes/blob/main/imagenes/angela/angela38.jpg?raw=true"
]



// *************************
angela.forEach( A => crearCard(A) );
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


 