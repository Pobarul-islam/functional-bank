function doubleIt(num){
    const result = num*2;
    return result;
}

const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7)
function getInputValue(inputId){
    
  const depositInput = document.getElementById(inputId);
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  //   clear input field 
depositInput.value = '';

  return depositAmount;

}

// deposit button select

document.getElementById("deposit-button").addEventListener("click", function () {
  // deposit input select

/* 
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
 */
const depositAmount = getInputValue('deposit-input');

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



});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function(){


  /*   const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
   const withdrawAmount = parseFloat(withdrawAmountText); */
   const withdrawAmount = getInputValue(withdraw-input);

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

  

})