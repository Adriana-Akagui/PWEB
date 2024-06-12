document.addEventListener('DOMContentLoaded', function () {
    // Inicializar dias da semana
    updateDayOfWeek();

    // Inicializar calendário
    initializeCalendar();

    // Função para obter o dia da semana
    function getDayOfWeek(date) {
        const daysOfWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
        return daysOfWeek[date.getDay()];
    }

    // Função para atualizar os dias da semana na coluna
    function updateDayOfWeek() {
        const today = new Date();
        const daysOfWeek = [];

        let sunday = new Date(today);
        sunday.setDate(today.getDate() - today.getDay());

        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(sunday);
            nextDay.setDate(sunday.getDate() + i);
            const dayOfWeek = getDayOfWeek(nextDay);
            daysOfWeek.push(`${nextDay.getDate()} ${dayOfWeek}`);
        }

        const columnShortDivs = document.querySelectorAll('.column.short');
        columnShortDivs.forEach((div, index) => {
            div.textContent = daysOfWeek[index];
        });
    }

    // Funções relacionadas ao calendário
    function initializeCalendar() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            headerToolbar: false,
        });

        // Funções para navegação do calendário
        document.getElementById('prev').addEventListener('click', function () {
            calendar.prev();
            updateCalendarTitle();
        });

        document.getElementById('next').addEventListener('click', function () {
            calendar.next();
            updateCalendarTitle();
        });

        function updateCalendarTitle() {
            var title = calendar.currentData.viewTitle;
            document.getElementById('calendar-title').textContent = title;
        }

        calendar.render();
        updateCalendarTitle(); // Inicializa o título do calendário
    }

    function exibirEventos() {
        const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

        const listaEventosImportantes = document.getElementById('lista-importantes');
        listaEventosImportantes.innerHTML = '';

        eventos.forEach(function (evento) {
            const date = new Date(evento.data);
            const diaSemana = date.getDay(); // Obter o dia da semana (0 a 6, domingo a sábado)
            const coluna = document.getElementById(getNomeColuna(diaSemana));

            if (coluna) {
                const cor = getTipoColor(evento.tipo);
                const icon = getPrioridadeIcon(evento.prioridade);

                const postIt = document.createElement('div');
                postIt.className = 'evento';
                postIt.style.backgroundColor = cor;
                postIt.innerHTML = `
                ${icon}
                <strong>${evento.titulo}</strong>
                <p>${evento.descricao}</p>
                <p>${evento.diaTodo ? 'Dia Todo' : `${evento.horarioInicial} - ${evento.horarioFinal}`}</p>
            `;

                /*Adiciona um evento de clique ao post-it
                postIt.addEventListener('click', function () {
                    // Redireciona o usuário para a página alterar.html com os detalhes do evento como parâmetros de consulta na URL
                    window.location.href = `alterar.html?id=${evento.id}&data=${evento.data}&titulo=${evento.titulo}&descricao=${evento.descricao}&tipo=${evento.tipo}&prioridade=${evento.prioridade}&diaTodo=${evento.diaTodo}&horarioInicial=${evento.horarioInicial}&horarioFinal=${evento.horarioFinal}`;
                })    */


                // Adiciona um evento de clique ao post-it
                postIt.addEventListener('click', function () {
                    // Obter o ID do evento
                    const eventoId = evento.id;

                    // Construir a URL para a página de alteração, incluindo os detalhes do evento como parâmetros de consulta
                    const url = `alterar.html?id=${eventoId}&data=${evento.data}&titulo=${evento.titulo}&descricao=${evento.descricao}&tipo=${evento.tipo}&prioridade=${evento.prioridade}&diaTodo=${evento.diaTodo}&horarioInicial=${evento.horarioInicial}&horarioFinal=${evento.horarioFinal}`;

                    // Definir as configurações da janela
                    const windowFeatures = 'width=500,height=600'; // Especificar o tamanho desejado para a nova janela

                    // Abrir a página de alteração em uma nova janela
                    window.open(url, '_blank', windowFeatures);
                });


                coluna.appendChild(postIt);

                // Verifica se o evento é importante e adiciona à lista de eventos importantes
                if (evento.prioridade === 'urgente' || evento.prioridade === 'importante') {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${evento.titulo} - ${evento.data}`;
                    listaEventosImportantes.appendChild(listItem);
                }

            }
        });
    }

    function getNomeColuna(diaSemana) {
        const nomesColunas = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
        return nomesColunas[diaSemana];
    }

    // Função para obter a cor correspondente ao tipo do evento
    function getTipoColor(tipo) {
        switch (tipo) {
            case 'pessoal':
                return 'pink';
            case 'profissional':
                return 'lightgreen';
            case 'academico':
                return 'blue';
            case 'lazer':
                return 'violet';
            default:
                return 'gray';
        }
    }

    // Função para obter o ícone da prioridade do evento
    function getPrioridadeIcon(prioridade) {
        switch (prioridade) {
            case 'urgente':
                return '<i class="fas fa-exclamation-circle"></i>';
            case 'importante':
                return '<i class="fas fa-star"></i>';
            case 'poucourgente':
                return '<i class="fas fa-heart"></i>';
            case 'podeesperar':
                return '<i class="fas fa-thumbtack"></i>';
            default:
                return ''; // Ícone padrão para prioridades desconhecidas
        }
    }


    // Chamada para exibir os eventos salvos
    exibirEventos();

    // Adicionar evento de clique ao botão "criar evento"
    document.querySelector('.criarevento__button').addEventListener('click', function () {
        window.open('adicionar.html', '_blank', 'width=500,height=600');
    });
});