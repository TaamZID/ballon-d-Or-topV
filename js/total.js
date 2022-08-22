let managerAmount = 0;
let coachAmount = 0;
let Total = 0;
document.getElementById("btn-total").addEventListener("click", function () {
  const managerField = document.getElementById("manager");
  managerAmount = managerField.value;

  const coachField = document.getElementById("coach");
  coachAmount = coachField.value;

  const budgetTotalElement = document.getElementById("total");

  Total =
    parseInt(managerAmount) +
    parseInt(coachAmount) +
    parseInt(currentBudgetTotal);
  budgetTotalElement.innerText = Total;

  managerField.value = "";
  coachField.value = "";
});
