const names = document.querySelector('.names');
const nombres = document.querySelectorAll('.datos');
const opciones = document.querySelector('.opciones');
const arrowUP = document.querySelector('.arrowUp')

document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 300) {
         document.querySelector('.arrowUp').classList.remove('hidden')
    }else {
        document.querySelector('.arrowUp').classList.add('hidden')
    }
})

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


 arrowUP.addEventListener('click', ()=> {
    window.scrollTo({behavior:"smooth", top:0})
 })