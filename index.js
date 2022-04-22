const names = document.querySelector('.names');
const nombres = document.querySelectorAll('.datos');
const opciones = document.querySelector('.opciones');

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
 window.addEventListener('keyup',(e)=> {
    if(e.key === 'Escape'){
        names.classList.remove('show')
    }
 })
