
function updatePrice(id,newPrice){
    
    const priceElement = document.getElementById(id + '-cost');
    priceElement.innerText = newPrice;
    return parseInt(priceElement.innerText);
}

function price(basePrice){

    const priceElement = document.getElementById('price');
    const memoryPrice = document.getElementById('extraMemory-cost').innerText;
    const storagePrice = document.getElementById('extraStorage-cost').innerText;
    const deliveryPrice = document.getElementById('extraDelivery-cost').innerText;

    const total = parseInt(basePrice)+parseInt(memoryPrice)+parseInt(storagePrice)+parseInt(deliveryPrice);
    priceElement.innerText = total;
    const totalPriceElement = document.getElementById('totalPrice');

    const totalPrice = total;
    totalPriceElement.innerText = totalPrice;
    return totalPrice;
}



function totalDiscountedPrice(total,discountPrice){
    const totaPriceElement = document.getElementById('totalPrice');
    const discountedTotal = total - discountPrice;

    totaPriceElement.innerText = discountedTotal;
}


function discount(){
    const promo = document.getElementById('input');
    const promoText = promo.value;

    const promoCode = 'steve';

    if(promoCode == promoText){
        const discountPrice = (1299*0.20);
        const total = parseInt(document.getElementById('totalPrice').innerText);
        totalDiscountedPrice(total,discountPrice);
}

}

document.getElementById('apply').addEventListener('click', function(){
    discount();
});

document.getElementById('8GB').addEventListener('click', function(){
    updatePrice('extraMemory',0);
    price(1299);

});

document.getElementById('16GB').addEventListener('click', function(){
   updatePrice('extraMemory',180);
   price(1299);
});


document.getElementById('256GB').addEventListener('click',function(){
   updatePrice('extraStorage',0);
    price(1299);
});

document.getElementById('512GB').addEventListener('click', function(){
    updatePrice('extraStorage',100);
    price(1299);
});

document.getElementById('1TB').addEventListener('click', function(){
    updatePrice('extraStorage',180);
    price(1299);
});


document.getElementById('freeDelivery').addEventListener('click',function(){
    updatePrice('extraDelivery',0);
    price(1299);
});


document.getElementById('delivery').addEventListener('click', function(){
    updatePrice('extraDelivery',20);
    price(1299);
});




