// Deposit

document.getElementById('submitDeposit').addEventListener('click', function(){
    const submitDepositAmount = document.getElementById('deposit');

    const deposited = submitDepositAmount.value;

    const totalDeposited = document.getElementById('total-deposited'); 

    const previousDeposit = totalDeposited.innerText;
    const newCurrentDeposit = parseFloat(previousDeposit) +  parseFloat(deposited);
    
    totalDeposited.innerText = newCurrentDeposit;
    //clear the deposit input field

    submitDepositAmount.value = '';


    // Update Balance

    const balance= document.getElementById('balance');
    const balanceText = balance.innerText;

    const previousBalance = parseFloat(balanceText);
    const newBalance= previousBalance + parseFloat(deposited);
    
    balance.innerText = newBalance;

    
});

// Withdraw
document.getElementById('submitWithdraw').addEventListener('click', function(){
    const submitWithdrawAmount = document.getElementById('withdraw');
    

    const withdrawed = submitWithdrawAmount.value;
    
    const totalWithdrawal = document.getElementById('total-withdrawed'); 

    const previousWithdrawals = totalWithdrawal.innerText;
    
    const newCurrentWithdraw = parseFloat(previousWithdrawals)+  parseFloat(withdrawed);

    totalWithdrawal.innerText = newCurrentWithdraw;
    //clear the withdraw input field

    submitWithdrawAmount.value = '';

    // Update Balance

    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;

    const previousBalance = parseFloat(balanceText);
    const newBalance = previousBalance - withdrawed;
    
    balance.innerText = newBalance;

})

