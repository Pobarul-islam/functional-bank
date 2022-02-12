document.getElementById("deposit-button").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);

  // get current deposit

  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousDepositTotal + depositAmount;

  // update balance
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
  // clear input field

  depositInput.value = "";
});

// handle withdraw button

document.getElementById("withdraw-button").addEventListener("click", function () {
  const withdrawInput = document.getElementById("withdraw-input").value;

  let withdraw = document.getElementById("withdraw-total").innerText;

  withdraw = parseFloat(withdraw) + parseFloat(withdrawInput);
  console.log(withdraw);
  document.getElementById("withdraw-total").innerText=withdraw;

});

// update withdraw total
