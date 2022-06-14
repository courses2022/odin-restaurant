import './style.css'
import Logo from './logo.png'

console.log("Hello World");

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML ="<h2>Hello webpack</h2>";
    element.classList.add('hello');
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Logo;
 
   element.appendChild(myIcon);
 
    return element;
  }
 
 // document.body.appendChild(component());

