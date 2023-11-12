const elementsList = document.querySelector('.cards'); //добавили переменную,  в которую добавляется шаблон
const elementsListInactive = document.querySelector('#list-missing');
const elementsListAdress = document.querySelector('.popup__list');
const elementsListPopupPay = document.querySelector('#popup__list_pay');
const buttonAmount = document.querySelector('#button-amount');
const buttonCourier = document.querySelector('#courier');
const buttonPickUpPoint = document.querySelector('#pick-up_point');
const buttonOpenPopupDeliveryMethodSecond = document.querySelector('#delivery_button_second');
const buttonOpenPopupDeliveryMethod = document.querySelector('#delivery_button');
const buttonClosePopupDeliveryMethod = document.querySelector('.popup__figure-toggle-image');
const totalAmount = document.querySelector('#total-amount');
const popupDeliveryMethod = document.querySelector('#delivery_method');
//поле полной стоимости
const totalСostField = document.querySelector('#total_price');
//константы формы
const inputName = document.querySelector('#name');
const labelName = document.querySelector('#name_label');
const inputSurname = document.querySelector('#surname');
const labelSurname = document.querySelector('#surname_label');
const inputEmail = document.querySelector('#email');
const labelEmail = document.querySelector('#email_label');
const inputTel = document.querySelector('#tel');
const labelTel = document.querySelector('#tel_label');
const inputNumber = document.querySelector('#number');
const labelNumber = document.querySelector('#number_label');
const buttonSelectAll = document.querySelector('#all_selected_items');
const buttonClickBlockProducts = document.getElementById('button_visible_products');
const buttonClickMissProducts = document.getElementById('button_visible_miss_products');
const settings = {
    formSelector: '#recipient_edit_form',
    inputSelector: '.form__input-input',
    submitButtonSelector: '#button-amount',
    inputErrorClass: 'form__input-input_type_error',
    errorClass: 'form__item-error_active',
}

const checkboxAmount = document.querySelector('#checkbox-amount');
const buttonPayChange = document.querySelector("#button_pay_change");
const buttonPayChangeFromAmount = document.querySelector("#button_pay_change_from_amount");
const popupPayMethod = document.querySelector("#pay-method");
const buttonClosePopupPayCards = popupPayMethod.querySelector('.popup__figure-toggle-image');

export {
    elementsList, elementsListInactive, elementsListAdress, elementsListPopupPay,
    buttonAmount, buttonCourier, buttonPickUpPoint, buttonOpenPopupDeliveryMethodSecond,
    buttonOpenPopupDeliveryMethod, buttonClosePopupDeliveryMethod, totalAmount, popupDeliveryMethod,
    totalСostField, inputName, labelName, inputSurname, labelSurname, inputEmail, labelEmail, inputTel, labelTel,
    inputNumber, labelNumber, buttonSelectAll, buttonClickBlockProducts, buttonClickMissProducts, 
    settings, checkboxAmount,
    buttonPayChange, popupPayMethod, buttonClosePopupPayCards, buttonPayChangeFromAmount
}