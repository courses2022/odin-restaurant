import BulDak from './BulDak.jpeg';

const menuPage = () => {
    const element = document.createElement('div');
    element.classList.add('menuGrid');
    
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('menuImg');
    img.src = Logo;
    card.appendChild(img);

    const itemName = document.createElement('p');
    itemName.innerText = "BUL DAK";
    card.appendChild(itemName);

    const itemDesc = document.createElement('p');
    itemDesc.innerText = "Korean style Beef BBQ sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";
    card.appendChild(itemDesc);

    const card2 = card.cloneNode(true);
    const card3 = card.cloneNode(true);

    element.appendChild(card);
    element.appendChild(card2);
    element.appendChild(card3);


    return element;

}

export {menuPage};