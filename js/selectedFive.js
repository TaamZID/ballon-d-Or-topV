const pList = [];

function displayPlayer() {
  const displayName = document.getElementById("display");
  displayName.innerHTML = "";

  for (let i = 0; i < pList.length; i++) {
    const name = pList[i].plName;
    const li = document.createElement("li");
    li.innerHTML = `<li>${i + 1}. ${name}</li>`;
    displayName.appendChild(li);
  }
}

function addToList(player) {
  const pName = player.parentNode.children[0].innerText;

  const pl = {
    plName: pName,
  };
  console.log(pl);
  pList.push(pl);
  displayPlayer();
}
