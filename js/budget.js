let currentBudgetTotal = 0;
document.getElementById("btn-calculate").addEventListener("click", function () {
  const newBudgetAmount = getInputFieldValueById("budget");
  const budgetTotalElement = document.getElementById("expenses");
  currentBudgetTotal = cnt * parseFloat(newBudgetAmount);
  budgetTotalElement.innerText = currentBudgetTotal;
});
