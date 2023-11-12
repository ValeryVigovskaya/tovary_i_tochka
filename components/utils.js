//универсальные функции

//функция форматировария стоимости
export const formattedCost = (number) => {
  if (number < 1000) {
    return number.toString();  // если число меньше 1000, возвращаем его без изменений
  } else {
    return new Intl.NumberFormat('ru-RU').format(number)
  }
}

export const showLabel = (input, label) => {

  if (input.value.textContent === '') {
    label.style.visibility = "hidden";
  } else {
    label.style.visibility = "visible";
  }
}

//универсальные функции открытия и закрытия попапа
export const popupOpen = (popup) => {
  popup.classList.add('popup_opened');
}

export const popupClose = (popup) => {
  popup.classList.remove('popup_opened');
}

//функция расчета стоимости без скидки за единицу
export const totalPrice = (data) => {
  return data.reduce((acc, item) => {
    return acc + item.newPrice;
  }, 0);
};

//функуия добавления элеметов в список
export const cardInList = (data, list, func) => {
  data.forEach(item => {
    list.append(func(item, data));
  });
}


//функция для форматирования номера телефона
export const phoneNumber = (phoneNumberInput) => {
  let phoneNumber = phoneNumberInput.value.replace(/\D/g, '');
  let phoneNumberPattern = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/;
  let formattedPhoneNumber = '+';
  formattedPhoneNumber += phoneNumber.replace(phoneNumberPattern, '$1 $2 $3 $4 $5');
  phoneNumberInput.value = formattedPhoneNumber;
}

//функция для форматирования банковской карты
export const bankCardNumber = (number) => {
  let numberCardString = String(number);
  const length = numberCardString.length;
  let keep = 6;
  // if (length < keep) return numberCardString;
  const point = '•';
  let cardWithPoint = numberCardString.substring(0, 6) + point.repeat(length - 10) + numberCardString.substring(12, 16);
  let newCard = cardWithPoint.match(/.{4}/g).join(' ');
  return newCard
}