// update Phone Inputs
function updatePhoneNumber(isIncreasing){
    const phoneInput= document.getElementById('phone-count');
    let phoneCount = phoneInput.value;

    if(isIncreasing){
        phoneCount = parseInt(phoneCount)+1;
    
    }else{
        if(phoneInput.value !=1){
            phoneCount = parseInt(phoneCount)-1;
            }
    }

    phoneInput.value = phoneCount;
    const phoneTotalPrice = document.getElementById('phone-price');
    phoneTotalPrice.innerText = phoneCount*1219;
    
    
}

// update Case Inputs
function updateCaseNumber(isIncreasing){
    const caseInput= document.getElementById('case-count');
    let caseCount = caseInput.value;
    if(isIncreasing){
        caseCount = parseInt(caseCount)+1;

    }else{
        if(caseInput.value !=0){
            caseCount = parseInt(caseCount)-1;
            }
    }
    caseInput.value = caseCount;
    const caseTotalPrice = document.getElementById('case-price');
    caseTotalPrice.innerText = caseCount*59;
    
}

// function updatePrice(){
    

// }


document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneInput= document.getElementById('phone-count');
    updatePhoneNumber(true);
    
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updatePhoneNumber(false);
});


document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
});


