function getSubmitValue(submitId){

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

// Update Balance

function updateBalance(amount, isAdd){
    const balance= document.getElementById('balance');
    const balanceText = balance.innerText;
    const previousBalance = parseFloat(balanceText);
    if(isAdd==true){
        balance.innerText = previousBalance + amount;
    }else{
        balance.innerText = previousBalance - amount;
    }

}

// Deposit
document.getElementById('submitDeposit').addEventListener('click', function(){
    const depositAmount = getSubmitValue('deposit');
    updateTotals('total-deposited',depositAmount);
    updateBalance(depositAmount,true);
});

// Withdraw
document.getElementById('submitWithdraw').addEventListener('click', function(){
    
    const withdrawAmount = getSubmitValue ('withdraw'); 
    updateTotals('total-withdrawed', withdrawAmount)
    updateBalance(withdrawAmount,false);
})