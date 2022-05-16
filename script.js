var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou mizeravi";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Que pena, você errou.";
  }
  if (chute > 10 || chute < 0) {
    alert("Digite um número de 0 a 10");
  }
}
