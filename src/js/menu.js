function burgerMenu(){
  // Menu burger----

  // show menu
  const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    let nav = document.getElementById(navId);

    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show-menu');
        document.body.classList.toggle('_lock');
        toggle.classList.toggle('burger-active');
      })
    }

      // remove menu mobile
    const navLink = document.querySelectorAll('.menu__link');

    function linkAction(){
      //const navMenu = document.getElementById('nav-menu')
      nav.classList.remove('show-menu');
      toggle.classList.remove('burger-active');
      document.body.classList.remove('_lock');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
  }

  showMenu('menu-toggle','nav-menu');


  function scrollActive(){
    // == scroll sections active link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const linksM = document.querySelector('.menu__item a[href*=' + sectionId + ']');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        linksM.classList.add('active-link');
      } else {
        linksM.classList.remove('active-link');
      }
    })

    // === change background header
    const header = document.getElementById('header');
    const linkM = document.querySelector('.menu__link');

    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') + linkM.classList.add('active-link');

    // === show scroll top
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll') ; else scrollTop.classList.remove('show-scroll');

  }
  window.addEventListener('scroll', scrollActive);


  let lastScroll = 0;
  const defaultOffset = 500;

  const containHide = () => header.classList.contains('hide');

  window.addEventListener('scroll', ()=>{
    const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
    
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
      header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()){
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  });
}
burgerMenu();
