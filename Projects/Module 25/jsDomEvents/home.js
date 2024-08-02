document.getElementById('submitDeposit').addEventListener('click', function(){
    const submitDepositAmount = document.getElementById('deposit');

    const deposited = submitDepositAmount.value;

    console.log(deposited);

    const totalDeposited = document.getElementById('total-deposited');
    totalDeposited.innerText= deposited;
    //clear the deposit input field

    submitDepositAmount.value = '';
})

document.getElementById('submitWithdraw').addEventListener('click', function(){
    const submitWithdrawAmount = document.getElementById('withdraw');

    const withdrawed = submitWithdrawAmount.value;

    console.log(withdrawed);
})