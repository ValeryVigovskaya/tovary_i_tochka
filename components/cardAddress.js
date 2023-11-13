import { homeAddresses } from '../components/home_addresses.js';

//клонированная карточка попапа с адресами
export const newCardAdress = (item, data) => {
    const elementTemplate = document.querySelector('#popup-addresses').content; //шаблон элемента из html
    const elementsClone = elementTemplate.querySelector('.popup__list-item').cloneNode(true); //клонируем блок
    const elementsCloneDeleteButton = elementsClone.querySelector('.button_img_clear');  //добавили взаимодействие на кнопку удаления картинок
    if (data === homeAddresses) {
        elementsClone.querySelector('.lable-radio').textContent = `${item.city}, ${item.microdistrict ? (`микрорайон ${item.microdistrict
            },`) : ''} улица ${item.street}, ${item.house_number}`;
    } else {
        elementsClone.querySelector('.lable-radio').textContent = `г. ${item.city}, ${item.microdistrict ? (`микрорайон ${item.microdistrict
        },`) : ''} улица ${item.street}, д.${item.house_number}`;
        elementsClone.querySelector('.popup__rating').style.display = "flex";
        elementsClone.querySelector('.pick-up_point').textContent = item.pick_up_point;
        elementsClone.querySelector('.rating').textContent = String(item.rating);
    };
    const radioBtn = elementsClone.querySelector(".popup__custom-radio");
    const label = elementsClone.querySelector(".lable-radio");
    radioBtn.id = item.id;
    label.htmlFor = radioBtn.id;

    elementsCloneDeleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        elementsClone.remove();
    });

    return elementsClone;
};