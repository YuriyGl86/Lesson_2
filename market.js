"use strict";

const catalog = [
    {
        id: 1,
        name: "штаны",
        description: "штаны красные самые обыкновенные",
        sizes: ['m','l','xl','xxl','xxxl','xxxxl',],
        price: 3000,
        available: true,
    },
    {
        id: 2,
        name: "шапка",
        description: "шапка вязанная",
        sizes: ['m','l','xl',],
        price: 500,
        available: true,
    },
    {
        id: 3,
        name: "куртка",
        description: "куртка кожаная",
        sizes: ['xl','xxl','xxxl','xxxxl',],
        price: 5000,
        available: true,
    },
    {
        id: 4,
        name: "рубашка",
        description: "рубашка белая",
        sizes: ['l','xl','xxl','xxxl',],
        price: 2000,
        available: false,
    },
    {
        id: 5,
        name: "носки",
        description: "носки черные хлопковые",
        sizes: ['l','xl',],
        price: 100,
        available: true,
    },
]

let basket = [
    {
        good: catalog[0],
        size: 'm',
        amount: 1,
    },
    {
        good: catalog[4],
        size: 'xl',
        amount: 3,
    },
]

function addGoodToBasket(good, size, amount){
    if(!good.sizes.includes(size)){
        console.log("у этой вещи нет такого размера");
        return false;
    }
    else if(!good.available){
        console.log("Эта вещь недоступна для заказа");
        return false;
    };

    let alreadyInBasket = false;
    for(let i of basket){
        if(good.id == i.good.id && size == i.size){
            i.amount += amount;
            alreadyInBasket = true;
        };
    };

    if(!alreadyInBasket){
        let newGood = {
            good: good,
            size: size,
            amount: amount,
        };
        basket.push(newGood);
    };
}

function removeGood(goodIndex){
    basket.splice(goodIndex,1);
}

function clearBasket(){
    basket.splice(0, basket.length);
}

function basketTotals(){
    let totalAmount = 0;
    let totalSumm = 0;
    for(let i of basket){
        totalAmount += i.amount;
        totalSumm += i.good.price * i.amount;
    };

    let res = {
        totalAmount: totalAmount,
        totalSumm: totalSumm,
    }

    return res
}


console.log('в корзине вещей изначально: ' + basket.length) // изначально в корзине 2 вещи
console.log('тотал:', basketTotals()) // изначальнаый суммы по корзине

addGoodToBasket(catalog[2], 'xl', 2) // добавляем в корзину вещь, которой еще не было
console.log('в корзине вещей после добавления новой: ' +  basket.length)
console.log('тотал:', basketTotals())  // суммы по корзине

addGoodToBasket(catalog[0], 'm', 2) // добавляем вещь, которая уже есть, т.е. стало больше количество
console.log('в корзине вещей после добавления вещи которая уже была: ' +  basket.length)
console.log('тотал:', basketTotals())  // суммы по корзине

removeGood(0) // убираем первую вещь
console.log('в корзине вещей после удаления одной: ' +  basket.length)
console.log('тотал:', basketTotals())  // суммы по корзине


clearBasket() // очищаем корзину
console.log('в корзине вещей после очистки: ' +  basket.length)

