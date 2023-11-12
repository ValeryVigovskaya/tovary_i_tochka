import {settings} from './constants.js'

//скрипт для валидации форм
// Функция, которая добавляет класс с ошибкой
const showItemError = (form, formItem, errorMessage, settings) => {
  // Находим элемент ошибки внутри самой функции
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.add(settings.inputErrorClass);
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  // Показываем сообщение об ошибке
  formError.classList.add(settings.errorClass);
};

// Функция, удаления класса с ошибкой
const hideItemError = (form, formItem, settings) => {
  const formError = form.querySelector(`.${formItem.id}-error`);
  formItem.classList.remove(settings.inputErrorClass);
  formError.classList.remove(settings.errorClass);//скрыли сообщение об ошибке
  formError.textContent = ''; //очистили ошибку
};

// Функция, которая проверяет валидность поля
const isValid = (form, formItem, settings) => {
  if (formItem.validity.patternMismatch) {
    formItem.setCustomValidity(formItem.dataset.errorMessage);
  } else {
    formItem.setCustomValidity("");
  }
  if (!formItem.validity.valid) {
    showItemError(form, formItem, formItem.validationMessage, settings);
  } else {
    hideItemError(form, formItem, settings);
  }
};

// // //функция активации кнопки сохранить/создать
function toggleButtonState(buttonElement, form, formItem, settings) {
    buttonElement.addEventListener('click', () => {
      isValid(form, formItem, settings);
    });
}

//добавления слушателя всем полям внутри формы
const setEventListeners = (form, settings) => {
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  const buttonElement = document.querySelector(settings.submitButtonSelector);
   inputList.forEach((formItem) => {
    formItem.addEventListener('input', () => {
      isValid(form, formItem, settings);
      toggleButtonState(buttonElement, form, formItem, settings);
    });
  })
      inputList.forEach((formItem) => {
      toggleButtonState(buttonElement, form, formItem, settings);
});
}

//функция перебирает все формы
const enableValidation = (settings) => {
  const formList = document.querySelector(settings.formSelector);
    formList.addEventListener('submit', (evt) => {
      evt.preventDefault();
     });
    setEventListeners(formList, settings);
};

export {enableValidation}