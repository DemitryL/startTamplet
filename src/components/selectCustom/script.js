function selCustom(){
  const selectBox = document.querySelector(".select-box");
  const selectOption = document.querySelector(".select-option");
  const soValue = document.querySelector("#soValue");
  const options = document.querySelector(".select-options");
  const optionsList = document.querySelectorAll(".select-options li");


  selectOption.addEventListener('click', function(){
    selectBox.classList.toggle('active');
  });


  optionsList.forEach(function(optionsListSingle){

    optionsListSingle.addEventListener('click', function(e){
      optionsList.forEach(function(el) {
        el.classList.remove('_show');
      })
      e.target.classList.add('_show');
      text = this.textContent;
      soValue.value = text; 
      selectBox.classList.remove('active');
    });

  });


  window.addEventListener('click', function(e){
    if(e.target !== selectBox && e.target !== selectOption){
      selectOption.parentElement.classList.remove('active');
    }
  });
}

selCustom();