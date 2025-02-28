function contar() {
  var inicio = document.getElementById("inicio").value;
  var fim = document.getElementById("fim").value;
  var passo = document.getElementById("passo").value;
  var tela = document.getElementById("resultado");

  var inicio = Number(inicio);
  var fim = Number(fim);
  var passo = Number(passo);

  

  if( inicio == ''|| fim == ''|| passo == ''){
  
    alert("Insira algum valor");

} else if (fim < inicio) {
    tela.innerHTML = `O número de <strong>FIM</strong> deve ser maior do que o de <strong>INICIO</strong>`;
  } else {
    for (i = inicio; i <= fim; i += passo) {
      document.getElementById("resultado").innerHTML += `${i} ➡ `;
    }
    
  }
  
}

