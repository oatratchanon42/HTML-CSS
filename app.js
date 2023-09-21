// toggle search bar

function toggleSearch(){
    const search = document.querySelector('.search')
    search.classList.toggle('active')
}

// toggle 3d flipping effect

function toggleFlip() {
    const imgBox = document.querySelector('.imgBox');
    const btn = document.querySelector('.btn');
    imgBox.classList.toggle('active');
    btn.classList.toggle('active')
}

// swap the main image
function changeImg(img){
    const foodImg = document.querySelector('.food-img');
    foodImg.src = `../images/${img}`;
    
}

// Adujt the index.html file with the following lines
/* <a class="menu" onClick="toggleMenu();" href="#"
><ion-icon name="ellipsis-vertical-outline"></ion-icon
></a> */

// add the JS code to the end of your script.js file
// toggle menu
function toggleMenu() {
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
}