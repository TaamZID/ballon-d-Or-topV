const pList = [];
let cnt = 0;
function displayPlayer() {
  const displayName = document.getElementById("display");

  cnt = pList.length;
  if (cnt < 6) {
    displayName.innerHTML = "";
    for (let i = 0; i < pList.length; i++) {
      const name = pList[i].plName;

      const li = document.createElement("li");
      li.innerHTML = `<li>${i + 1}. ${name}</li>`;
      displayName.appendChild(li);
    }
  } else {
    alert("Can't select more than 5 Players!");
    displayName.removeChild(li);
  }
}

function addToList(player) {
  const pName = player.parentNode.children[0].innerText;
  const pl = {
    plName: pName,
  };
  pList.push(pl);
  displayPlayer();
}
