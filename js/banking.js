// deposit button select

document.getElementById("deposit-button").addEventListener("click", function () {
  // deposit input select

  document.getElementById("");
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);


  //   get current deposit

  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;

  const previousDepositTotal = parseFloat(depositTotalText);
  depositTotal.innerText = previousDepositTotal + depositAmount;

  // update balance

  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal + depositAmount;


//   clear input field 
depositInput.value = '';
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){


    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText);

    // update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalText)

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    // update balance after withdraw

    const balanceTotal = document.getElementById('balance-total');
   
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field

    withdrawInput.value = '';

})