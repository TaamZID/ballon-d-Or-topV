document.getElementById("btn-submit").addEventListener("click", function () {
  const submitField = document.getElementById("lm10");
  const selectPlayer = submitField.innerText;

  const showPlayer = document.createElement('li');
  showPlayer = selectPlayer.innerText;
//   showPlayer.innerText = selectPlayer;
  list.appendChild(showPlayer);
});

document.getElementById("btn-submit2").addEventListener("click", function () {
  const submitField = document.getElementById("cr7");
  const selectPlayer = submitField.innerText;

  const showPlayer = document.getElementById("show-players");
  const playerName = showPlayer.innerText;
  showPlayer.innerText = selectPlayer;
});
