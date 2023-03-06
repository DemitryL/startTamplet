function popupModal(){
  const popupLinks = document.querySelectorAll('.popup__link'); 
  //получаем все обьекты с классом popup__link
  const body = document.querySelector('body'); 
  //получаем тег боди это нужно чтоб его блокировать скрол по нему
  const lockPadding = document.querySelectorAll(".lock-padding");

  let unlock = true; 
  // нужна для того чтобы небыло двойных нажатий

  const timeout = 100; 
  //получаем 800 милисекунд таже цыфра что и в transition: all .8s ease 0s; должна совпадать

  if (popupLinks.length > 0 ) { 
    // проверяем существуют ли ссылки на странице .popup__link
    for (let index = 0; index < popupLinks.length; index++){
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function(e){
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0 ) { 
    // проверяем существуют ли ссылки на странице .close-popup
    for (let index = 0; index < popupCloseIcon.length; index++){
      const el = popupCloseIcon[index];
      el.addEventListener('click', function(e){
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive){
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e){
        if (!e.target.closest('.popup__content')){
          popupClose(e.target.closest('.popup'));
        }
      })
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock){
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    const header = document.querySelector('header');
    header.classList.add('lock-padding');

    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function (){
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      const header = document.querySelector('header');
      header.classList.remove('lock-padding');
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(function (){
      unlock = true;
    }, timeout);
  }
}
popupModal();