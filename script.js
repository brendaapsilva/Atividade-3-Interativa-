const anoAtual = new Date().getFullYear();
const form = document.querySelector('#age-form');
const birthYearInput = document.querySelector('#birth-year');
const fieldMessage = document.querySelector('#field-message');
const resultPanel = document.querySelector('#result-panel');
const resultText = document.querySelector('#result-text');
const currentYearLabel = document.querySelector('#current-year');

currentYearLabel.textContent = anoAtual;
birthYearInput.max = anoAtual;

function calcularIdade(anoNascimento) {
  return anoAtual - anoNascimento;
}

function mostrarResultado(mensagem, sucesso = false) {
  resultText.textContent = mensagem;
  resultPanel.classList.toggle('is-success', sucesso);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const anoNascimento = Number(birthYearInput.value);
  const anoMinimo = 1900;

  fieldMessage.textContent = '';

  if (!birthYearInput.value || !Number.isInteger(anoNascimento) || anoNascimento < anoMinimo || anoNascimento > anoAtual) {
    fieldMessage.textContent = `Digite um ano inteiro entre ${anoMinimo} e ${anoAtual}.`;
    birthYearInput.focus();
    mostrarResultado('Vamos ajustar o ano e tentar mais uma vez.');
    return;
  }

  const idade = calcularIdade(anoNascimento);
  const plural = idade === 1 ? 'ano' : 'anos';
  mostrarResultado(`Você tem aproximadamente ${idade} ${plural}. Que história bonita a sua!`, true);
});
