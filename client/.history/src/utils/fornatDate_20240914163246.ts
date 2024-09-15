// Função para formatar a data no formato brasileiro
function formatDate(dataISO: string): string {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  }

  // Função para pegar apenas o horário
  function extractHour(dataISO: string): string {
    const data = new Date(dataISO);
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
  }