document.getElementById("btn-total").addEventListener("click", function () {
  const managerField = document.getElementById("manager");
  const managerAmount = managerField.value;

  const coachField = document.getElementById("coach");
  const coachAmount = coachField.value;

  const budgetTotalElement = document.getElementById("total");
  const Total =
    parseInt(managerAmount) +
    parseInt(coachAmount) +
    parseInt(currentBudgetTotal);
  budgetTotalElement.innerText = Total;

  managerField.value = "";
  coachField.value = "";
});
