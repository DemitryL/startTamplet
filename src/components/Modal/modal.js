// Modal window
function bindModal(trigger, modal, close) {
  trigger = document.querySelector(trigger),
  modal = document.querySelector(modal),
  close = document.querySelector(close)

  const body = document.body;
  
  trigger.addEventListener('click', e => {
    e.preventDefault()
    modal.classList.add('popup-active');
    body.classList.add('_lock');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('popup-active');
    body.classList.remove('_lock')
  });

  modal.addEventListener('click', e => {
    if (e.target == modal){
      modal.classList.remove('popup-active');
      body.classList.remove('_lock')
    }
  });
}

// Первый аргумент - класс кнопки при нажатии на которую открывается модальное окно
// Второй аргумент - класс самого модального окна
// Третий аргумент - класс кнопки которая закрывает модальное окно
bindModal('.modal__btn', '.modal__wrapper', '.modal__close')