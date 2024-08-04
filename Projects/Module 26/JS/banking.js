function getSubmitValue(submitId){
    debugger;
    const submitAmount = document.getElementById(submitId);
    const submittedText = submitAmount.value;
    const submitted = parseFloat(submittedText);
    submitAmount.value = '';

    return submitted;
}
// Update Total
function updateTotals(totalId, amount){

    const totalchanged = document.getElementById(totalId); 
    const previousTotalText = totalchanged.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal+amount;
    totalchanged.innerText = newTotal;
    
}
// Get current balance
function getCurrentBalance(){
    const balance= document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    return previousBalance;
}

// Update Balance

function updateBalance(amount, isAdd){
    const balance= document.getElementById('balance');
    const previousBalance= getCurrentBalance();
    if(isAdd==true){
        balance.innerText = previousBalance + amount;
    }else{
        balance.innerText = previousBalance - amount;
    }

}

// Deposit
document.getElementById('submitDeposit').addEventListener('click', function(){
    const depositAmount = getSubmitValue('deposit');
    if(depositAmount > 0){
    updateTotals('total-deposited',depositAmount);
    updateBalance(depositAmount,true);
    }
});

// Withdraw
document.getElementById('submitWithdraw').addEventListener('click', function(){
    
    const withdrawAmount = getSubmitValue ('withdraw'); 
    const currentBalance = getCurrentBalance();
    
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotals('total-withdrawed', withdrawAmount)
    updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount > currentBalance){
        console.log("Withdraw Amount Exceeds Current Balance");
    }
})