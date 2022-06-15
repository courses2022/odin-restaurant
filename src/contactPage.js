
const contactPage = () => {
    const element = document.createElement('div');
    //element.innerHTML = "Contact Page";
    const header = document.createElement('h2');
    header.innerHTML = "Contact us"
    element.appendChild(header);

    const text = document.createElement('p');
    text.innerText = "Find us at: 96 Oxford Terrace, Christchurch Central. 8011 Christchurch, New Zealand";
    element.appendChild(text);

    const map = document.createElement('div');
    map.classList.add('mapouter');
    map.innerHTML = '<div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=96%20Oxford%20Street%20Christchurch&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div>';
    element.appendChild(map);

    return element;
}

export {contactPage};

