// let text = document.getElementById('text')
// let bird1 = document.getElementById('bird1')
// let bird2 = document.getElementById('bird2')
// let header = document.getElementById('header')
// let hadag = document.getElementById('hadag')

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  // text.style.top = 50+ value * -0.5 +'px';
 

  bird1.style.top = value * -1.5 +'px';
  bird1.style.left = value * 2 +'px';
  bird2.style.top = value * -1.5 +'px';
  bird2.style.left = value * -5 +'px';
  header.style.top= value *0.5 +'px';
})

let dropdownBtns = document.querySelectorAll('.dropdown-btn');
let dropdownContainers = document.querySelectorAll('.dropdown-container');

dropdownBtns.forEach((dropdownBtn, index) => {
  dropdownBtn.addEventListener('click', () => {
    dropdownContainers.forEach((container, containerIndex) => {
      if (index === containerIndex) {
        container.classList.toggle('active');
        dropdownBtn.classList.toggle('active');
      } else {
        container.classList.remove('active');
        dropdownBtns[containerIndex].classList.remove('active');
      }
    });
  });
});
