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
    calculateTotal();
   
}  

function getInput(product){
    const input= document.getElementById(product + '-count');
    const totalInput = parseInt(input.value);
    return totalInput;
}

function calculateTotal(){ 
    const totalPhone = getInput('phone')*1219;
    const totalCase = getInput('case')*59;
    const subtotal = totalPhone + totalCase;
    const tax = subtotal/10;  
    const total = subtotal+tax;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

   }

document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', 1219,true);
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', 1219,false);
});

document.getElementById('case-plus').addEventListener('click', function(){
    updateNumber('case', 59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59,false);
});
