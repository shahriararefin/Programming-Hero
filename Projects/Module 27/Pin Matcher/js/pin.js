function getPin(){
    const pin = Math.round(Math.random()*10000 );
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const pin= getPin();

    document.getElementById('displayPin').value = pin;
}

document.getElementById('keypad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const input= document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number=='C'){
            input.value= '';
        }
    }else{
    
    const previousInput = input.value;
    const newInput = previousInput+number;
    input.value= newInput;
    }
});

function verifyPin(){
    const pin = document.getElementById('displayPin').value;
    const inputs = document.getElementById('typed-numbers').value;
    const success = document.getElementById('success');
        
        const failed = document.getElementById('failed');
    if(pin == inputs){
        success.style.display = 'block';
        failed.style.display = 'none';
    }else{
        success.style.display = 'none';
        failed.style.display = 'block';
    }
}