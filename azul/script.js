const container = document.querySelector('.gallery');
const fotos = document.querySelector('.gallery img');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close'); 
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
let contadorImg = undefined ;

const azul = ["azul1.JPG","azul2.JPG","azul3.JPG","azul4.JPG","azul5.JPG","azul6.JPG","azul7.JPG",
"azul8.JPG","azul9.JPG","azul10.JPG","azul11.JPG","azul12.JPG","azul13.JPG","azul14.JPG","azul15.JPG","azul16.JPG",
"azul17.JPG","azul18.JPG","azul19.JPG","azul20.JPG","azul21.JPG","azul22.JPG","azul23.JPG","azul24.JPG","azul25.JPG",
"azul26.JPG","azul27.JPG","azul28.JPG","azul29.JPG","azul30.JPG","azul31.JPG","azul32.JPG"];




// *************************
azul.forEach( A => crearCard(A) );
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


 