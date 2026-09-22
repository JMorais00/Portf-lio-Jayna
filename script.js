// Espera a página carregar por completo para não dar erro de elemento não encontrado
document.addEventListener('DOMContentLoaded', function() {

  // Pega o botão do HTML pelo ID
  var btnToggle = document.getElementById('toggle-theme');

  // Pega o body da página
  var body = document.body;

  // Busca no navegador se o usuário já salvou o tema 'dark' anteriormente
  var temaSalvo = localStorage.getItem('tema');

  // Se o tema salvo for 'dark', ativa o modo escuro direto ao carregar a página
  if (temaSalvo === 'dark') {
    body.classList.add('dark-mode');
    btnToggle.innerHTML = '☀️ Modo Claro';
  }

  // Adiciona a função para quando o usuário clicar no botão
  btnToggle.addEventListener('click', function() {

    // Se o body JÁ TEM a classe 'dark-mode', significa que vamos mudar para o MODO CLARO
    if (body.classList.contains('dark-mode')) {

      // Remove a classe do modo escuro
      body.classList.remove('dark-mode');

      // Atualiza o texto do botão
      btnToggle.innerHTML = '🌙 Modo Escuro';

      // Salva a escolha 'light' no navegador
      localStorage.setItem('tema', 'light');

    } else {
      // Se NÃO TEM a classe 'dark-mode', significa que vamos mudar para o MODO ESCURO

      // Adiciona a classe do modo escuro
      body.classList.add('dark-mode');

      // Atualiza o texto do botão
      btnToggle.innerHTML = '☀️ Modo Claro';

      // Salva a escolha 'dark' no navegador
      localStorage.setItem('tema', 'dark');

    }

  });

});