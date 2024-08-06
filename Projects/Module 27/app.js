// update Phone Inputs
function updateNumber(product, price, isIncreasing){
    const input= document.getElementById(product + '-count');
    let inputCount = input.value;

    if(isIncreasing){
        inputCount = parseInt(inputCount)+1;
    
    }else{
        if(input.value !=1){
            inputCount = parseInt(inputCount)-1;
            }
    }

    input.value = inputCount;
    const phoneTotalPrice = document.getElementById(product + '-price');
    phoneTotalPrice.innerText = inputCount*price;
    
    // subtotal
    const subtotalElement= document.getElementById('subtotal');
    const subtotalText = subtotalElement.value;
    const subtotal = parseInt(subtotalText)+ parseInt(phoneTotalPrice);
    subtotalElement.innerText = subtotal;
}

document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone',1219,true);
    
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone',1219,false);
});


document.getElementById('case-plus').addEventListener('click', function(){
    updateNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case',59,false);
});


