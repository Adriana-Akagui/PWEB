document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const eventoId = urlParams.get('id');

    // Preencher os campos do formulário com os parâmetros obtidos
    document.getElementById('titulo-tarefa').textContent = urlParams.get('titulo');
    document.getElementById('data').value = urlParams.get('data');
    document.getElementById('horario_inicial').value = urlParams.get('horarioInicial');
    document.getElementById('horario_final').value = urlParams.get('horarioFinal');
    document.getElementById('descricao').value = urlParams.get('descricao');
    document.getElementById('feedback').value = urlParams.get('feedback');

    // Marcar prioridades
    const prioridades = ['urgente', 'importante', 'poucourgente', 'podeesperar'];
    prioridades.forEach(prioridade => {
        if (urlParams.get('prioridade') === prioridade) {
            document.getElementById(prioridade).checked = true;
        }
    });

    // Marcar o tipo da tarefa
    const tipo = urlParams.get('tipo');
    document.getElementById('tipo').textContent = 'Tipo: ' + tipo;

    // Marcar o status conforme o valor do parâmetro 'status'
    const status = urlParams.get('status');
    if (status === 'encerrado') {
        document.getElementById('encerrado').checked = true;
    } else {
        document.getElementById('pendente').checked = true;
    }

    // Desativar todos os campos do formulário exceto status e feedback
    document.querySelectorAll('.form input, .form select, .form textarea').forEach(element => {
        if (element.id !== 'pendente' && element.id !== 'encerrado' && element.id !== 'feedback') {
            element.disabled = true;
        }
    });

    // Adicionar evento de clique ao checkbox "dia_todo"
    document.getElementById('dia_todo').addEventListener('change', function () {
        // Obter os elementos de horário
        const horarioInicial = document.getElementById('horario_inicial');
        const horarioFinal = document.getElementById('horario_final');

        // Desativar ou ativar os campos de horário conforme o estado do checkbox "dia_todo"
        if (this.checked) {
            horarioInicial.disabled = true;
            horarioFinal.disabled = true;
        } else {
            horarioInicial.disabled = false;
            horarioFinal.disabled = false;
        }
    });

    // Adicionar evento de clique aos checkboxes de prioridade
    const checkboxesPrioridade = document.querySelectorAll('input[name="prioridade"]');
    checkboxesPrioridade.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            // Desmarcar os outros checkboxes de prioridade
            checkboxesPrioridade.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });

    // Adicionar evento de clique aos checkboxes de status
    const checkboxesStatus = document.querySelectorAll('input[name="status"]');
    checkboxesStatus.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            // Desmarcar os outros checkboxes de status
            checkboxesStatus.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });

    // Adicionar evento de clique ao botão "Cancelar"
    document.querySelector('.cancelar__button').addEventListener('click', function () {
        // Redirecionar o usuário de volta para a página index.html
        window.location.href = 'index.html';
    });

    // Adicionar evento de clique ao botão "Excluir"
    document.querySelector('.excluir__button').addEventListener('click', function () {
        // Obter o ID do evento a ser excluído
        const eventoId = urlParams.get('id');
        // Chamar a função excluirEvento passando o ID do evento
        excluirEvento(eventoId);
    });

    // Adicionar evento de clique ao botão "Alterar"
    document.querySelector('.alterar__button').addEventListener('click', function () {
        // Ativar todos os campos do formulário
        document.querySelectorAll('.form input, .form select, .form textarea').forEach(element => {
            element.disabled = false;
        });
        // Desativar os campos de status e feedback
        document.getElementById('pendente').disabled = true;
        document.getElementById('encerrado').disabled = true;
        document.getElementById('feedback').disabled = true;
        // Ativar o botão de salvar
        document.getElementById('salvar__button').disabled = false;
        // Desativar o botão de alterar
        this.disabled = true;
    });

    // Adicionar evento de clique ao botão "Salvar"
    document.querySelector('.salvar__button').addEventListener('click', function () {
        // Obter eventos existentes do localStorage
        const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
        const eventoIndex = eventos.findIndex(evento => evento.id === eventoId);

        // Verificar se o evento foi encontrado
        if (eventoIndex !== -1) {
            // Atualizar os valores do evento
            eventos[eventoIndex].titulo = document.getElementById('titulo-tarefa').textContent;
            eventos[eventoIndex].data = document.getElementById('data').value;
            eventos[eventoIndex].horarioInicial = document.getElementById('horario_inicial').value;
            eventos[eventoIndex].horarioFinal = document.getElementById('horario_final').value;
            eventos[eventoIndex].descricao = document.getElementById('descricao').value;
            eventos[eventoIndex].prioridade = document.querySelector('input[name="prioridade"]:checked').value;

            // Salvar os eventos atualizados no localStorage
            localStorage.setItem('eventos', JSON.stringify(eventos));

            // Exibir uma mensagem de sucesso
            alert('Alterações salvas com sucesso!');

            // Redirecionar o usuário de volta para a página index.html
            window.location.href = 'index.html';
        } else {
            alert('Evento não encontrado!');
        }
    });

    function atualizarEvento(eventoId, novoEvento) {
        // Obter eventos existentes do localStorage
        const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

        // Encontrar o índice do evento a ser atualizado
        const eventoIndex = eventos.findIndex(evento => evento.id === eventoId);

        // Verificar se o evento foi encontrado
        if (eventoIndex !== -1) {
            // Atualizar os valores do evento com base no novo evento
            eventos[eventoIndex] = novoEvento;

            // Salvar lista de eventos atualizada no localStorage
            localStorage.setItem('eventos', JSON.stringify(eventos));

            // Retornar true para indicar que o evento foi atualizado com sucesso
            return true;
        } else {
            // Retornar false para indicar que o evento não foi encontrado
            return false;
        }
    }

    function excluirEvento(eventoId) {
        // Solicitar confirmação do usuário
        const confirmacao = confirm('Tem certeza de que deseja excluir este evento?');

        if (confirmacao) {
            // Obter eventos existentes do localStorage
            const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

            // Filtrar os eventos para remover o evento com o ID correspondente
            const eventosAtualizados = eventos.filter(evento => evento.id !== eventoId);

            // Salvar lista de eventos atualizada no localStorage
            localStorage.setItem('eventos', JSON.stringify(eventosAtualizados));

            // Exibindo uma mensagem de sucesso
            alert('Evento excluído com sucesso!');

            // Redirecionar o usuário para a página inicial ou outra página apropriada
            window.close();
        }
    }
});