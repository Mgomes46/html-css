// Geração do número aleatório
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Contagem de tentativas
var tentativas = 0;

// Função para verificar o palpite
function verificarPalpite() {
  // Obter o palpite do jogador
  var palpite = document.getElementById('palpite').value;
  
  // Atualizar o número de tentativas
  tentativas++;
  
  // Comparar o palpite com o número aleatório
  if (palpite == numeroAleatorio) {
    // O jogador acertou
    alert('Parabéns! Você acertou em ' + tentativas + ' tentativas!');
  } else if (palpite < numeroAleatorio) {
    // O palpite é menor que o número aleatório
    alert('Tente um número maior!');
  } else {
    // O palpite é maior que o número aleatório
    alert('Tente um número menor!');
  }
}