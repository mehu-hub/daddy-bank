document.getElementById('btn-withdraw').addEventListener('click', function(){
     const withdrawField = document.getElementById('withdraw-field');
     const newWithDrawString = withdrawField.value;
     const newWithdrawAmount = parseFloat(newWithDrawString);
     if(isNaN(newWithdrawAmount)){
        alert('Please Enter a Number');
        return;
     }
     //------------------------------------------------------
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(prevWithdrawTotalString);
    //-------------------------------------------------------
    
    //-------------------------------------------------------
    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);
    withdrawField.value = '';
    if(newWithdrawAmount > prevBalanceTotal){
        alert('Eto taka nai Vai')
        return;
    }
    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount; 
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //-------------------------------------------------------
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
    

})