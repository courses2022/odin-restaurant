
const contactPage = () => {
    const element = document.createElement('div');
    //element.innerHTML = "Contact Page";
    const header = document.createElement('h2');
    header.innerHTML = "Contact us"
    element.appendChild(header);

    const text = document.createElement('p');
    text.innerText = "Find us at: 96 Oxford Terrace, Christchurch Central. 8011 Christchurch, New Zealand";
    element.appendChild(text);

    return element;
}

export {contactPage};