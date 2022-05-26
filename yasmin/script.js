const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const yasmin =[
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin1.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin10.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin11.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin12.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin13.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin14.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin15.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin16.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin17.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin18.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin19.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin2.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin20.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin21.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin22.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin23.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin24.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin25.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin26.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin27.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin28.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin29.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin3.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin30.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin31.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin32.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin33.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin34.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin35.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin36.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin37.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin38.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin39.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin4.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin40.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin5.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin6.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin7.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin8.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin9.jpeg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin41.jpg?raw=true",
    "https://github.com/DamianBarrera/imagenes/blob/main/imagenes/yasmin/yasmin42.jpg?raw=true"
]




// *************************
yasmin.forEach( A => crearCard(A) );
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


 