
function basePrice(id){
    
    const basePriceElement = document.getElementById(id + '-cost');
    const basePriceText = basePriceElement.innerText;
    let basePrice = parseInt(basePriceText);
    basePrice = 0;
    basePriceElement.innerText = basePrice;
}

function topPrice(id){
    const topPriceElement = document.getElementById(id + '-cost');
    const topPriceText = topPriceElement.innerText;
    let topPrice = parseInt(topPriceText);
    topPrice= 180;
    topPriceElement.innerText= topPrice;
}

document.getElementById('8GB').addEventListener('click', function(){
    basePrice('extraMemory');
});

document.getElementById('16GB').addEventListener('click', function(){
   topPrice('extraMemory');

});


document.getElementById('256GB').addEventListener('click',function(){
    basePrice('extraStorage');
    
});

document.getElementById('1TB').addEventListener('click', function(){
    topPrice('extraStorage');
});

document.getElementById('512GB').addEventListener('click', function(){
    const midPriceElement = document.getElementById('extraStorage-cost');
    const midPriceText = midPriceElement.innerText;
    let topPrice = parseInt(midPriceText);
    midPrice= 100;
    midPriceElement.innerText= midPrice;
});

document.getElementById('freeDelivery').addEventListener('click',function(){
    basePrice('extraDelivery');
});


document.getElementById('delivery').addEventListener('click', function(){
    const midPriceElement = document.getElementById('extraDelivery-cost');
    const midPriceText = midPriceElement.innerText;
    let topPrice = parseInt(midPriceText);
    midPrice= 20;
    midPriceElement.innerText= midPrice;
});


//calculate total price

