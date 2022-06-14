import Logo from './logo.png';

const homePage = () => {
    const element = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = Logo;
    element.appendChild(img);

    const heading = document.createElement('h1');
    heading.innerHTML = "Seoul Tiger : Seoul food for your soul";
    element.appendChild(heading);

    const blurb = document.createElement('p');
    blurb.innerHTML = "We start to serve our Seoul Bowl from today. It has steamed rice, scrambled eggs, frill lettuce, mesclun, carrort, red onion and Korean BBQ with our secret sauces 💛   This is more like Korean authentic flavour as Bibimbab. Come and grab your bowl today! 😍";
    element.appendChild(blurb);
   // Add the image to our existing div.
   //const myIcon = new Image();
   //myIcon.src = Logo;
 
   //element.appendChild(myIcon);
 
    return element;
}

export {homePage};