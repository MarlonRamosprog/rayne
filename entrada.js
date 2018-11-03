var textoMenu = "Está se sentindo solitário? Precisando de carinho? Vc precisa de companhia.";
var msg;

var count = 0;
function digitar() {
  msg = document.getElementById("msg");
  window.setTimeout(function() { inserir(textoMenu[count]) }, 30);
}

function inserir(letra) {
  msg.innerHTML += letra;
  count++;
  if(count < textoMenu.length)
    window.setTimeout(function() { inserir(textoMenu[count]) }, 30);
}

window.onload = digitar;