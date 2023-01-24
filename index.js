function play(selezione) {
  const sasso = "<img src='images/sasso.png'>";
  const carta = "<img src='images/carta.png'>";
  const forbice = "<img src='images/forbice.png'>";
  const objs = [sasso, carta, forbice];
  var obj = objs[Math.floor(Math.random() * objs.length)];
  document.getElementById("computer").innerHTML = obj;

  if (selezione.id == "carta") {
    if (obj == forbice)
      document.getElementById("result").innerHTML = "HAI PERSO!";
    if (obj == carta) document.getElementById("result").innerHTML = "PARITA'!";
    if (obj == sasso)
      document.getElementById("result").innerHTML = "HAI VINTO!";
  }
  if (selezione.id == "sasso") {
    if (obj == forbice)
      document.getElementById("result").innerHTML = "HAI VINTO!";
    if (obj == carta)
      document.getElementById("result").innerHTML = "HAI PERSO!";
    if (obj == sasso) document.getElementById("result").innerHTML = "PARITA'!";
  }
  if (selezione.id == "forbice") {
    if (obj == forbice)
      document.getElementById("result").innerHTML = "PARITA'!";
    if (obj == carta)
      document.getElementById("result").innerHTML = "HAI VINTO!";
    if (obj == sasso)
      document.getElementById("result").innerHTML = "HAI PERSO!";
  }
}
sasso.addEventListener("click", () => {
  if (document.getElementById("login").value == "") {
    alert("Prima devi effettuare il login!");
    return;
  }
  play(sasso);
});
carta.addEventListener("click", () => {
  if (document.getElementById("login").value == "") {
    alert("Prima devi effettuare il login!");
    return;
  }
  play(carta);
});
forbice.addEventListener("click", () => {
  if (document.getElementById("login").value == "") {
    alert("Prima devi effettuare il login!");
    return;
  }
  play(forbice);
});

loginBtn.addEventListener("click", () => {
  if (document.getElementById("login").value == "") {
    alert("Non puoi inserire campi vuoti");
  } else {
    document.getElementById("user").innerHTML =
      "Iniziamo " + document.getElementById("login").value + "!";

    document.getElementById("login").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";

    document.getElementById("user").style.display = "inline-block";
  }
});
