'use strict';
{
    let nameProduct = 'Открытки';
    let quantityProduct = 35;
    const categoryProduct = 'Для праздника';
    let countProduct = 350;

    console.log('Наименование продукта: ', nameProduct);
    console.log('Общая сумма товара: ', quantityProduct*countProduct, 'рублей');
}

{
    let nameProduct = 'Кружки';
    let quantityProduct = 25;
    const categoryProduct = 'Для дома';
    let countProduct = 450;

    console.log('Наименование продукта: ', nameProduct);
    console.log('Общая сумма товара: ', quantityProduct*countProduct, 'рублей');
}

{
    const nameProduct = prompt('Наименование товара:');
    const quantityProduct = Number(prompt("Количество товара:"));
    const categoryProduct = prompt('Категория товара:');
    const countProduct = Number(prompt('Цена товара:'));
    const summProduct = quantityProduct * countProduct;
    console.log(`На складе ${quantityProduct} единицы товара "${nameProduct}" на сумму ${summProduct} деревянных`);
}