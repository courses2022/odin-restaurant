import BulDak from './BulDak.jpeg';
import BulGogi from './BulGogi.jpeg';
import Chicken from './Chicken.jpeg';
import Dubu from './Dubu.jpeg';
import JeYuk from './JeYuk.jpeg';
import KFC from './KFC.jpeg';
import TteokBokki from './Tteok-Bokki.jpeg';

const menuPage = () => {
    const element = document.createElement('div');
    element.classList.add('menuGrid');
    
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.classList.add('menuImg');
    img.src = BulDak;
    card.appendChild(img);
    const itemName = document.createElement('p');
    itemName.innerText = "BUL DAK";
    card.appendChild(itemName);
    const itemDesc = document.createElement('p');
    itemDesc.innerText = "Korean style Chilli Chicken sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";
    card.appendChild(itemDesc);

    const card2 = card.cloneNode(true);
    card2.children[0].src = BulGogi;
    card2.children[1].innerText = "BUL GOGI";
    card2.children[2].innerText = "Korean style Beef BBQ sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";

    const card3 = card.cloneNode(true);
    card3.children[0].src = Chicken;
    card3.children[1].innerText = "CHICKEN";
    card3.children[2].innerText = "Fresh Chicken with garlic & herbs sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";
    
    const card4 = card.cloneNode(true);
    card4.children[0].src = Dubu;
    card4.children[1].innerText = "DUBU";
    card4.children[2].innerText = "Stir fried Tofu w.signature house made black sauce sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";
    
    const card5 = card.cloneNode(true);
    card5.children[0].src = JeYuk;
    card5.children[1].innerText = "JE YUK";
    card5.children[2].innerText = "Korean style Spicy Pork sautéed with onion, scrambled egg, house made green salad on steamed rice. Two special sauces, black sauce and white sauce.";
    
    const card6 = card.cloneNode(true);
    card6.children[0].src = KFC;
    card6.children[1].innerText = "K.F.C.";
    card6.children[2].innerText = "Legendary Korean fried Chicken. 350g of Fried boneless chicken thigh glazed with a choice of sauce and finish with nuts and seed.";
    
    const card7 = card.cloneNode(true);
    card7.children[0].src = TteokBokki;
    card7.children[1].innerText = "TTEOK BOKKI";
    card7.children[2].innerText = "Chewy rice cakes & fish cakes in sweet and spicy gochujnag sauce.";
    
    element.appendChild(card);
    element.appendChild(card2);
    element.appendChild(card3);
    element.appendChild(card4);
    element.appendChild(card5);
    element.appendChild(card6);
    element.appendChild(card7);
    


    return element;

}

export {menuPage};