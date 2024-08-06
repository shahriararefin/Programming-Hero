function phonePlus(){
    const phoneInput= document.getElementById('phone-count');
    const phoneCount = phoneInput.value;
    phoneInput.value = parseInt(phoneCount)+1;
}

function phoneMinus(){
    const phoneInput= document.getElementById('phone-count');
    const phoneCount = phoneInput.value;
    if(phoneInput.value !=1){
    phoneInput.value = parseInt(phoneCount)-1;
    }
}
document.getElementById('phone-plus').addEventListener('click', function(){
    
    
});