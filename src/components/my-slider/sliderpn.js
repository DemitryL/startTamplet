function mySlider(dots, contents, arrows, activeClass){
  let testimDots = Array.prototype.slice.call(document.getElementById(dots).children),
  testimContent = Array.prototype.slice.call(document.getElementById(contents).children),
  bullets = Array.prototype.slice.call(document.querySelector(arrows).children),
  currentSlider = 0,
  currentActive = 0;
  
  //---Переменная для автоматического переключения слайдера
  //let testimSpeed = 4500, testimTimer;
  
  window.onload = function(){
  
    function playSlider(slide){
      for (let k = 0; k < testimDots.length; k++){
        testimContent[k].classList.remove(activeClass);
        // --исчезающий слайд--
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove(activeClass);
      }
      if (slide < 0){
        slide = currentSlider = testimContent.length - 1;
      }
      if (slide > testimContent.length - 1){
        slide = currentSlider = 0;
      }
      // --исчезающий слайд--
      if (currentActive != currentSlider) {
        testimContent[currentActive].classList.add("inactive");
      }
      testimContent[slide].classList.add(activeClass);
      testimDots[slide].classList.add(activeClass);
  
      currentActive = currentSlider;
  
  //---для автоматического переключения слайдера
      //clearTimeout(testimTimer);
      //testimTimer = setTimeout(function(){
      //  playSlider(currentSlider += 1);
      //}, testimSpeed)
    }
    // battons prew next
    for (let i = 0; i < bullets.length; i++){
      bullets[i].addEventListener('click', function(){
        if(bullets[i].classList.contains('left')){
          playSlider(currentSlider -= 1);
        } else {
          playSlider(currentSlider += 1);
        }
      })
    }
    //bullets
    for (let l = 0; l < testimDots.length; l++){
      testimDots[l].addEventListener('click', function(){
        playSlider(currentSlider = testimDots.indexOf(this));
      })
    }
    playSlider(currentSlider);
  }
}
mySlider("testim-dots", "testim-content", ".bullets", "active");