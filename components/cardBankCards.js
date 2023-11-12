// import { bankCards } from '../components/bankCards.js';
import { bankCardNumber } from '../components/utils.js';
//переписываю функцию с полученными из запросов данными
export const cardBankCard = (item, data) => {
    const elementTemplate = document.querySelector('#popup-pay').content; //шаблон элемента из html
    const elementsClone = elementTemplate.querySelector('.popup__list-item').cloneNode(true); //клонируем блок
    const numberCard = bankCardNumber(item.cardnumber);
    elementsClone.querySelector('.popup__card-number').textContent = `${numberCard}`;
    elementsClone.querySelector('.payment-system_popup').src = item.img;
    const radioBtn = elementsClone.querySelector(".popup__custom-radio");
    const label = elementsClone.querySelector(".lable-radio");
    radioBtn.id = item.id;
    label.htmlFor = radioBtn.id;

    return elementsClone;
};