/* import * as THREE from 'three';
import { Scene } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'; */



var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

let panelsElement = document.querySelectorAll('.panel');


/* let removeActiveClasses = () => {
    panelsElement.forEach(panel => {
        panel.classList.remove('active');
    });
};

panelsElement.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
}); */

document.getElementById("three-canvas").addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
      window.location.href = "../Customize/customize.html"; // Replace with your desired URL
  }
});
document.getElementById("home-logo").addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
      window.location.href = "../Home/home.html"; // Replace with your desired URL
  }
});
window.addEventListener('DOMContentLoaded', (event) => {
  const loginLink = document.getElementById('loginLink');
  
  const userName = localStorage.getItem('userName');
  
  if (userName) {
      // If userName exists in localStorage, update the link to show the user's name
      loginLink.innerHTML = `<i class="fa-solid fa-user"></i> مرحبًا, ${userName}`;
      loginLink.setAttribute('href', '../Profile/Profile.html'); // Prevent navigation to login page
      

  }
});




