const feature = document.querySelector('.features')
const feature2 = document.querySelector('.features2')
const company = document.querySelector('.company')
const company2 = document.querySelector('.company2')
const subMen1 = document.querySelector('.hidden1')
const subMen12 = document.querySelector('.hidden12')
const subMen2 = document.querySelector('.hidden2')
const subMen22 = document.querySelector('.hidden22')
const arrDown1 = document.querySelector('.arr1down')
const arrDown12 = document.querySelector('.arr1down2')
const arrDown2 = document.querySelector('.arr2down')
const arrDown22 = document.querySelector('.arr2down2')

const openMenu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const expand= document.querySelector('.expandable')

const overlay = document.querySelector('.off-canvas')


let isVisible = false; // Initially, the element is hidden


feature.addEventListener("click", function() {

  if (!isVisible) {
    subMen1.style.display = "block";
    arrDown1.src = './images/icon-arrow-up.svg';
  } else {
    subMen1.style.display = "none";
    arrDown1.src = './images/icon-arrow-down.svg';
  }
  isVisible = !isVisible; // Toggle the state
});

feature2.addEventListener("click", function() {

  if (!isVisible) {
    subMen12.style.display = "block";
    arrDown12.src = './images/icon-arrow-up.svg';
  } else {
    subMen12.style.display = "none";
    arrDown12.src = './images/icon-arrow-down.svg';
  }
  isVisible = !isVisible; // Toggle the state
});



company.addEventListener("click", function() {
  if (!isVisible) {
    subMen2.style.display = "block";
    arrDown2.src = './images/icon-arrow-up.svg';
  } else {
    subMen2.style.display = "none";
    arrDown2.src = './images/icon-arrow-down.svg';
  }
  isVisible = !isVisible; // Toggle the state
});

company2.addEventListener("click", function() {
  if (!isVisible) {
    subMen22.style.display = "block";
    arrDown22.src = './images/icon-arrow-up.svg';
  } else {
    subMen22.style.display = "none";
    arrDown22.src = './images/icon-arrow-down.svg';
  }
  isVisible = !isVisible; // Toggle the state
});


openMenu.addEventListener('click', () =>{
  expand.style.display = 'block'
  overlay.style.display = 'block'
})


closeMenu.addEventListener('click', () =>{
  expand.style.display = 'none'
  overlay.style.display = 'none'
})

