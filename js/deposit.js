document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input')
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    depositInput.value = '';
    if(isNaN(newDepositAmount)){
        alert('Please Enter a Number');
        return;
     }
     if(newDepositAmount < 0){
        alert('Enter a positive number');
        return;
     }
    const depositTotalElement = document.getElementById('deposit-total');

    const prevDepositTotalstring = depositTotalElement.innerText; 
    const prevDepositTotal = parseFloat(prevDepositTotalstring)

    const currentDepositTotal = prevDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    //---------------------------------------------
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    const currentBalanaceTotal = prevBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanaceTotal; 
    
})