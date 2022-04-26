const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const yasmin =["yasmin1.jpeg","yasmin2.jpeg","yasmin3.jpeg","yasmin4.jpeg","yasmin5.jpeg","yasmin6.jpeg",
"yasmin7.jpeg","yasmin8.jpeg","yasmin9.jpeg","yasmin10.jpeg","yasmin11.jpeg","yasmin12.jpeg","yasmin13.jpeg",
"yasmin14.jpg","yasmin15.jpeg","yasmin16.jpeg","yasmin17.jpeg","yasmin18.jpeg","yasmin19.jpeg","yasmin20.jpeg",
"yasmin21.jpeg","yasmin22.jpeg","yasmin23.jpeg","yasmin24.jpeg","yasmin25.jpeg","yasmin26.jpeg","yasmin27.jpeg",
"yasmin28.jpeg","yasmin29.jpeg","yasmin30.jpeg","yasmin31.jpeg","yasmin32.jpeg","yasmin33.jpeg","yasmin34.jpeg"
,"yasmin35.jpeg","yasmin36.jpeg","yasmin37.jpg","yasmin38.jpg","yasmin39.jpg","yasmin40.jpg"]




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


 