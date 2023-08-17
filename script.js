const axios = require('axios'); // Certifique-se de instalar o pacote 'axios' usando 'npm install axios' antes de executar o código

const webhookUrl = ''; // Substitua pelo URL do seu webhook

const changeLogs = [
  'Versão 1.0.0:',
  '- Adicionada nova funcionalidade X',
  '- Corrigido problema Y',
  '',
  'Versão 1.1.0:',
  '- Melhorias de desempenho',
  '- Novos recursos adicionados'
];

const messageData = {
  content: changeLogs.join('\n') // Juntando os elementos do array com quebras de linha
};

axios.post(webhookUrl, messageData)
  .then(response => {
    console.log('Mensagem enviada com sucesso para o webhook.');
  })
  .catch(error => {
    console.error('Erro ao enviar mensagem para o webhook:', error);
  });
