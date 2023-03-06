let intervalId;

const buttonOpen = document.querySelectorAll('.dropdown-tog');

  buttonOpen.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        buttonOpen.forEach(el=>{ 
          el.classList.remove('tog-active'); 
        });
        item.classList.add('tog-active');
    })
})

buttonOpen.forEach(e => {
  e.addEventListener('click', e => {
    let dropdownMenu = document.querySelectorAll('.dropdown-menu');
    let menu = e.currentTarget.dataset.path;


    dropdownMenu.forEach(e => {
      let attrebTarg = document.querySelector('[data-target='+ menu +']');
      let attrebPath = document.querySelector('[data-path='+ menu +']');


      if(!attrebTarg.classList.contains('open')){
        e.classList.remove('menu-active');
        e.classList.remove('open');

        attrebTarg.classList.add('menu-active');
        intervalId = setTimeout(() => {
          attrebTarg.classList.add('open');
        },0);
      }

      if(attrebTarg.classList.contains('open')){
        attrebTarg.classList.remove('menu-active');
        attrebPath.classList.remove('tog-active');
        intervalId = setTimeout(() => {
          attrebTarg.classList.remove('open');
        },0);
      }


      window.onclick = e => {
        if (e.target == attrebTarg || e.target == attrebPath){
          return;
        } else {
          attrebTarg.classList.remove('menu-active'),
          attrebPath.classList.remove('tog-active');
          attrebTarg.classList.remove('open');
        }
      }
    });
  });
});