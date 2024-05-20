document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('cursos');

    selectElement.onchange = () => {
        const cursoSelecionado = selectElement.value;
        if (cursoSelecionado) {
            const confirmacao = confirm('Você realmente deseja abrir a janela com informações sobre o curso selecionado?');
            if (confirmacao) {
                let url;
                switch (cursoSelecionado) {
                    case 'ads':
                        url = 'https://www.fatecsorocaba.edu.br/curso_ads.asp';
                        break;
                    case 'log':
                        url = 'https://www.fatecsorocaba.edu.br/curso_log.asp';
                        break;
                    case 'fm':
                        url = 'https://www.fatecsorocaba.edu.br/curso_fm.asp';
                        break;
                }

                if (url) {
                    window.open(url, 'Curso', 'width=600,height=300');
                }
            }
        }
    };
});
