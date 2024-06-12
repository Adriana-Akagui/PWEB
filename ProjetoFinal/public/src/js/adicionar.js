// Função para desmarcar outros checkboxes dentro do mesmo grupo
function desmarcarOutros(element) {
    const groupName = element.getAttribute('name');
    const checkboxes = document.querySelectorAll(`input[name="${groupName}"]`);
    checkboxes.forEach(checkbox => {
        if (checkbox !== element) {
            checkbox.checked = false;
        }
    });
}

// Função para validar o formulário
function validarFormulario() {
    const titulo = document.getElementById('titulo').value.trim();
    const tipoSelecionado = document.querySelector('.post__tipo input[type="checkbox"]:checked');
    const prioridadeSelecionada = document.querySelector('.post__prioridade input[type="checkbox"]:checked');
    const data = document.getElementById('data').value;
    const horarioInicial = document.getElementById('horario_inicial').value;
    const horarioFinal = document.getElementById('horario_final').value;
    const diaTodo = document.getElementById('dia_todo').checked;

    let mensagemErro = '';

    if (!titulo) {
        mensagemErro += 'O título é obrigatório.\n';
    }
    if (!tipoSelecionado) {
        mensagemErro += 'Selecione pelo menos um tipo.\n';
    }
    if (!prioridadeSelecionada) {
        mensagemErro += 'Selecione pelo menos uma prioridade.\n';
    }
    if (!data) {
        mensagemErro += 'A data é obrigatória.\n';
    }
    if (!diaTodo) {
        if (!horarioInicial) {
            mensagemErro += 'O horário inicial é obrigatório.\n';
        }
        if (!horarioFinal) {
            mensagemErro += 'O horário final é obrigatório.\n';
        }
    }

    if (mensagemErro) {
        alert(mensagemErro);
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    // Adicionar evento de clique ao botão "Salvar" no formulário de adicionar evento
    document.querySelector('#adicionarForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        if (validarFormulario()) {
            salvarEvento(); // Chama a função salvarEvento se a validação for bem-sucedida
        }
    });

    // Adicionar evento de clique ao botão "Cancelar" no formulário de adicionar evento
    document.querySelector('.cancelar__button').addEventListener('click', function () {
        window.close(); // ou qualquer outra ação que você queira fazer ao cancelar
    });

    // Adicionar evento de clique para cada grupo de checkbox
    const checkboxGroups = document.querySelectorAll('.post__tipo input[type="checkbox"], .post__prioridade input[type="checkbox"]');
    checkboxGroups.forEach(group => {
        group.addEventListener('click', function () {
            desmarcarOutros(this);
        });
    });
});
