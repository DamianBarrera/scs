const names = document.querySelector('.names');
const nombres = document.querySelectorAll('.datos');

 nombres.forEach( N => {

     const link = document.createElement('a');
     link.href = "#" + N.firstElementChild.textContent.toLowerCase().slice(1);
     link.textContent = N.firstElementChild.textContent.slice(1);
     
     names.appendChild(link)
    } )
    
    // console.log(N.firstElementChild.textContent.toLowerCase().slice(1))








