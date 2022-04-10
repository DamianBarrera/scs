const names = document.querySelector('.names');
const nombres = document.querySelectorAll('.datos');
const opciones = document.querySelector('.opciones');

//  nombres.forEach( N => {
//      const link = document.createElement('a');
//       link.href = "#" + N.firstElementChild.textContent.toLowerCase().slice(1);
//       link.textContent = N.firstElementChild.textContent.slice(1); 
//       names.appendChild(link)
//     } )
    
    // console.log(N.firstElementChild.textContent.toLowerCase().slice(1))

    const dataName = [] ;
    nombres.forEach( N => {
        dataName.push(N.firstElementChild.textContent.toLowerCase().slice(1));             
    })
    
    
    dataName.sort().forEach ( DN => {
        const link = document.createElement('a')
        link.href = '#' + DN ;
        link.textContent = DN;
        names.appendChild(link)
    })

   opciones.addEventListener('click',() => {
        names.classList.toggle('show')
   })
 
