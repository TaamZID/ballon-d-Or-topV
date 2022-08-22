let currentBudgetTotal = 0;
document.getElementById("btn-calculate").addEventListener("click", function () {
  const budgetField = document.getElementById("budget");
  const newBudgetAmount = budgetField.value;

  const budgetTotalElemet = document.getElementById("expenses");
  currentBudgetTotal = 5 * parseFloat(newBudgetAmount);
  budgetTotalElemet.innerText = currentBudgetTotal;
  budgetField.value = "";
});


