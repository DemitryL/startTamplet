function tabS(tabSelector, contentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabSelector);
  const allContent = document.querySelectorAll(contentSelector)

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(tab =>{tab.classList.remove(activeClass)});
      tab.classList.add(activeClass);

      allContent.forEach(content => {content.classList.remove(activeClass)});
      allContent[index].classList.add(activeClass);
    })

  });
}

// Перый аргумент - класс конкретного элемента при клике на который будет переключатся таб
// Второй аргумент - класс того блока который будет переключатся
// Третий аргумент - класс ативности который будет добавлятся для таба который активный

tabS('.header-tabs__item', '.content-tabs__item', 'active')