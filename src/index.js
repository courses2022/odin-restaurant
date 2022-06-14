import './style.css'
import Logo from './logo.png';
import {homePage} from './homePage';

console.log("Hello World");

const content = document.querySelector("#content");
//content.lastChild.r

function menu() {
   const element = document.createElement('div');
   element.classList.add("menu");
   // Add the image to our existing div.
   const homeButton = document.createElement('button');
   homeButton.innerHTML = "Home";
   homeButton.classList.add("menuButton");
   homeButton.onclick=                              
   element.appendChild(homeButton);
 
   const menuButton = document.createElement('button');
   menuButton.innerHTML = "Menu";
   menuButton.classList.add("menuButton");
   element.appendChild(menuButton);

   const contactButton = document.createElement('button');
   contactButton.innerHTML = "Contact";
   contactButton.classList.add("menuButton");
   element.appendChild(contactButton);

    return element;
  }
 
 content.appendChild(menu());

 content.appendChild(homePage());
