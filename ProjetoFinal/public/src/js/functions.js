// Função para salvar evento
function salvarEvento() {
    // Obter valores dos campos do formulário
    const titulo = document.getElementById('titulo').value;
    const data = document.getElementById('data').value;
    const horarioInicial = document.getElementById('horario_inicial').value;
    const horarioFinal = document.getElementById('horario_final').value;
    const descricao = document.getElementById('descricao').value;
    const diaTodo = document.getElementById('dia_todo').checked;

    // Obter tipo do evento
    let tipo = '';
    if (document.getElementById('pessoal').checked) tipo = 'pessoal';
    if (document.getElementById('profissional').checked) tipo = 'profissional';
    if (document.getElementById('academico').checked) tipo = 'academico';
    if (document.getElementById('lazer').checked) tipo = 'lazer';

    // Obter prioridade do evento
    let prioridade = '';
    if (document.getElementById('urgente').checked) prioridade = 'urgente';
    if (document.getElementById('importante').checked) prioridade = 'importante';
    if (document.getElementById('poucourgente').checked) prioridade = 'poucourgente';
    if (document.getElementById('podeesperar').checked) prioridade = 'podeesperar';

    // Criar objeto de evento
    const evento = {
        titulo,
        data,
        horarioInicial,
        horarioFinal,
        descricao,
        diaTodo,
        tipo,
        prioridade
    };

    // Obter eventos existentes do localStorage
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    // Adicionar novo evento à lista de eventos
    eventos.push(evento);

    // Salvar lista de eventos no localStorage
    localStorage.setItem('eventos', JSON.stringify(eventos));

    // Fechar janela de adição de evento
    alert('Evento salvo com sucesso!');
    window.close();
}
