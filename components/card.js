import { formattedCost, totalPrice } from '../components/utils.js'

//получение клонированной карточки
export const newCard = (item) => {
    const elementTemplate = document.querySelector('#element-template').content; //шаблон элемента из html
    const elementsClone = elementTemplate.querySelector('.element').cloneNode(true); //клонируем блок
    const elementsCloneDeleteButton = elementsClone.querySelector('.button_img_clear');  //добавили взаимодействие на кнопку удаления картинок
    const buttonCountPlus = elementsClone.querySelector(".element__count-plus");
    const buttonCountMinus = elementsClone.querySelector(".element__count-minus");
    elementsClone.querySelector('.element__image').src = item.img;
    elementsClone.querySelector('.element__image').alt = item.name;
    elementsClone.querySelector('#name').textContent = item.name;
    const checkbox = elementsClone.querySelector('.checkbox-container__custom-checkbox');
    const label = elementsClone.querySelector('.label')
    let count = elementsClone.querySelector('.element__amount-counts');
    let quantity = elementsClone.querySelector('#quantity');
    //const priceNumber = formattedCost(item.price);
    const discountNumber = item.newPrice;
    const priceNumber = item.price;
    //const discountNumber = formattedCost(item.newPrice);
    const price = elementsClone.querySelector('#price');
    const discountPrice = elementsClone.querySelector('#discount');

    //стоимость за одну единицу товара
    price.textContent = `${priceNumber} сом`;
    discountPrice.textContent = `${discountNumber} сом`
    //начальное состояние счетчика
    count.innerText = 1;
    buttonCountMinus.disabled = true;
    let quantityItem = item.quantity - 1;
    buttonCountMinus.classList.add("element__count-minus_inactive");

    if (item.quantity > 0 && item.quantity < 100) {
        quantity.textContent = `Осталось ${quantityItem} шт`;
    } else {
        quantity.style.display = "none";
    }

    //присвоение айди для чекбокса, чтобы корректно работал
    checkbox.id = item.price;
    label.htmlFor = checkbox.id;

    increaseCounter(count, priceNumber, discountNumber, buttonCountPlus, buttonCountMinus, quantityItem, quantity, price, discountPrice);


    //изменение цвета лайка при клике
    elementsClone.querySelector('.button_img_like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('button_img_like_active');
    });

    if (item.quantity === 0) {
        const visibleParams = elementsClone.querySelector('.element__checkbox-container');
        visibleParams.style.visibility = "hidden";
        visibleParams.classList.add('element__item-container_visible');
        const visiblePrice = elementsClone.querySelector('#price-container');
        visiblePrice.style.display = "none";
        const visibleCount = elementsClone.querySelector('#count-container');
        visibleCount.style.display = "none";
        const padd = elementsClone.querySelector('.element__item-container_end');
        padd.style.padding = "0 0 0 0";
        const list = elementsClone.querySelector('#char');
        list.classList.add('element__list_miss');
        elementsClone.querySelector('.button_img_info').style.display = "none";
        if (document.documentElement.clientWidth < 1000) {
            const visibleCount = elementsClone.querySelector('#count-container');
            visibleCount.style.visibility = "hidden";
            visibleCount.style.display = "block";
        }
    }
    if (item.stock) {
        elementsClone.querySelector('#stock').textContent = `${item.stock} OOO Вайлдберриз`;
        if (document.documentElement.clientWidth < 1000) {
            elementsClone.querySelector('#stock').textContent = item.stock;
        }
        elementsClone.querySelector('#provider').textContent = item.provider.stock;
        elementsClone.querySelector('#ogrn').textContent = item.provider.OGRN;
        elementsClone.querySelector('#adress').textContent = item.provider.adress;
    }
    addColorOrSize(item, elementsClone);

    if (item.price) {
        if (document.documentElement.clientWidth > 1023) {
            discountPrice.style.fontSize = (discountNumber < 10000) ? "20px" : "16px";
        } else {
            discountPrice.style.fontSize = "16px";
        }
    }
    //слушатель для удаления карточки по клику
    elementsCloneDeleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        elementsClone.remove();
    });

    return elementsClone;
};


//функция которая добавляет цвет товара или размер
function addColorOrSize(item, elementsClone) {
    switch (item.color || item.size) {
        case item.color:
            elementsClone.querySelector('#color').textContent = item.color;
        case item.size:
            elementsClone.querySelector('#size').textContent = item.size;
            break;
    }
    if (!item.color && !item.size) {
        const visibleParams = elementsClone.querySelector('#params');
        visibleParams.classList.add('element__item-container_visible');
    }
}

//функция работы счетчика количества айтемов в карточке и суммы
function increaseCounter(count, oldPrice, oldDiscountPrice, buttonCountPlus, buttonCountMinus, quantity, itemQuantity, price, priceDiscount) {
    let insSum;
    let insDiscount;
    buttonCountPlus.addEventListener('click', () => {
        count.innerText++;
        quantity--;
        itemQuantity.textContent = `Осталось ${quantity} шт`;
        insSum = Number(count.textContent) * (oldPrice);
        insDiscount = Number(count.textContent) * (oldDiscountPrice);
        price.textContent = `${formattedCost(insSum)} сом`;
        priceDiscount.textContent = `${formattedCost(insDiscount)} сом`;
        buttonCountMinus.disabled = false;
        buttonCountMinus.classList.remove("element__count-minus_inactive");
        if (quantity < 1) {
            buttonCountPlus.classList.add("element__count-minus_inactive");
            buttonCountPlus.disabled = true;
        }
    });
    buttonCountMinus.addEventListener('click', () => {
        count.innerText--;
        quantity++;
        itemQuantity.textContent = `Осталось ${quantity} шт`;
        insSum = insSum - oldPrice;
        insDiscount = insDiscount - oldDiscountPrice;
        price.textContent = `${formattedCost(insSum)} сом`;
        priceDiscount.textContent = `${formattedCost(insDiscount)} сом`;
        buttonCountMinus.classList.remove("element__count-minus_inactive");
        buttonCountMinus.disabled = false;
        buttonCountPlus.classList.remove("element__count-minus_inactive");
        buttonCountPlus.disabled = false;

        if (count.textContent === '1') {
            buttonCountMinus.classList.add("element__count-minus_inactive");
            buttonCountMinus.disabled = true;
     }
    });
}



