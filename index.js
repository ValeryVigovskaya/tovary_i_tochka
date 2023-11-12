
import { newCard } from './components/card.js';
import { data, missingItems } from './components/data.js';
import { homeAddresses } from './components/home_addresses.js';
import { newCardAdress } from './components/cardAddress.js';
import { deliveryMethods } from "./components/deliveryMethods.js";
import {
  formattedCost, showLabel, popupOpen,
  popupClose, totalPrice, cardInList, phoneNumber
} from "./components/utils.js";
import { enableValidation } from "./components/validate.js";
import { bankCards } from './components/bankCards.js';
import { cardBankCard } from "./components/cardBankCards.js"
import {
  elementsList, elementsListInactive, elementsListAdress, elementsListPopupPay,
  buttonAmount, buttonCourier, buttonPickUpPoint, buttonOpenPopupDeliveryMethodSecond,
  buttonOpenPopupDeliveryMethod, buttonClosePopupDeliveryMethod, totalAmount, popupDeliveryMethod,
  totalСostField, inputName, labelName, inputSurname, labelSurname, inputEmail, labelEmail, inputTel, labelTel,
  inputNumber, labelNumber, buttonSelectAll, buttonClickBlockProducts, buttonClickMissProducts,
  settings, checkboxAmount,
  buttonPayChange, popupPayMethod, buttonClosePopupPayCards, buttonPayChangeFromAmount
} from "./components/constants.js"

//вставдяем разметку карточки в DOM.
//методом перебора массива добавляем в разметку карточки
cardInList(data, elementsList, newCard);
cardInList(missingItems, elementsListInactive, newCard);

//изменение текста на кнопке при клике на чекбокс
checkboxAmount.addEventListener('click', function () {
  buttonAmount.textContent = buttonAmount.textContent !== `Оплатить ${totalAmount.textContent}` ? `Оплатить ${totalAmount.textContent}` : 'Заказать'
});


//открытие и закрытие попапа способа доставки
buttonOpenPopupDeliveryMethod.addEventListener('click', function () {
  popupOpen(popupDeliveryMethod);
  buttonCourier.classList.add('popup__button_active');
  cardInList(homeAddresses, elementsListAdress, newCardAdress);
});

buttonOpenPopupDeliveryMethodSecond.addEventListener('click', function () {
  popupOpen(popupDeliveryMethod);
  buttonCourier.classList.add('popup__button_active');
  cardInList(homeAddresses, elementsListAdress, newCardAdress);
});


buttonClosePopupDeliveryMethod.addEventListener('click', function () {
  popupClose(popupDeliveryMethod);
  elementsListAdress.innerHTML = '';
});


//кнопки переключения способа доставки
buttonPickUpPoint.addEventListener('click', function () {
  buttonPickUpPoint.classList.add('popup__button_active');
  buttonCourier.classList.remove('popup__button_active');
  elementsListAdress.innerHTML = '';
  cardInList(deliveryMethods, elementsListAdress, newCardAdress)
});

buttonCourier.addEventListener('click', function () {
  buttonCourier.classList.add('popup__button_active');
  buttonPickUpPoint.classList.remove('popup__button_active');
  elementsListAdress.innerHTML = '';
  cardInList(homeAddresses, elementsListAdress, newCardAdress);
});

//функция расчета скидки 
const totalPriceFormat = formattedCost(totalPrice(data));

totalСostField.textContent = `${totalPriceFormat} сом`

let arrCounts = [];
var options = elementsList.querySelectorAll('.element__amount-counts');

for (var j = 0; j < options.length; j++) {
  options[j].addEventListener('DOMCharacterDataModified', () => {
    arrCounts.push(Number(options[j].textContent));
    arrCounts?.reduce((partialSum, a) => partialSum + a);
  })
}

inputName.addEventListener('click', function (evt) {
  showLabel(inputName, labelName);
});

inputSurname.addEventListener('click', function (evt) {
  evt.preventDefault();
  showLabel(inputSurname, labelSurname);
});
inputEmail.addEventListener('click', function (evt) {
  evt.preventDefault();
  showLabel(inputSurname, labelEmail);
});
inputTel.addEventListener('input', function (evt) {
  evt.preventDefault();
  showLabel(inputSurname, labelTel);
  phoneNumber(inputTel);
});
inputNumber.addEventListener('click', function (evt) {
  evt.preventDefault();
  showLabel(inputSurname, labelNumber);
});




enableValidation(settings);

//функции для выбора всех чекбоксов и снятие
function checkUncheck() {
  var uncheckCheck = elementsList.getElementsByTagName('input');
  for (var i = 0; i < uncheckCheck.length; i++) {
    if (uncheckCheck[i].type == 'checkbox') {
      if (uncheckCheck[i].checked === false) {
        uncheckCheck[i].checked = true;
      } else {
        uncheckCheck[i].checked = false;
      }
    }
  }
}

buttonSelectAll.addEventListener('click', function (evt) {
  checkUncheck();
});

//функционал скрытия блоков при клике на кнопки
//функционал работы кнопки 1
//при проверке активного класса блок добавляется или удаляется
function openBlock(block, btn) {
  if (block.style.display === "grid") {
    block.style.display = "none";
    btn.classList.add('button_img_hide-active');
  } else {
    block.style.display = "grid";
    btn.classList.remove('button_img_hide-active');
  }
}

buttonClickBlockProducts.addEventListener('click', function () {
  openBlock(elementsList, buttonClickBlockProducts);
});

buttonClickMissProducts.addEventListener('click', function () {
  openBlock(elementsListInactive, buttonClickMissProducts);
});


buttonPayChange.addEventListener('click', function () {
  popupOpen(popupPayMethod)
  bankCards.forEach(item => {
    elementsListPopupPay.append(cardBankCard(item, bankCards));
  });
});

buttonPayChangeFromAmount.addEventListener('click', function () {
  popupOpen(popupPayMethod)
  bankCards.forEach(item => {
    elementsListPopupPay.append(cardBankCard(item, bankCards));
  });
});


buttonClosePopupPayCards.addEventListener('click', function () {
  popupClose(popupPayMethod)
  elementsListPopupPay.innerHTML = '';
});





