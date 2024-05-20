function validarDados() {
            
    // usando a posicao no formulario
    if (document.forms.formulario.elements[0].value == "" || document.forms.formulario.elements[0].value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario.elements[0].focus();
        return false;
    };

    // usando o nome no formulario
    if (document.forms.formulario.elements["idEmail"].value == "" || document.forms.formulario.elements["idEmail"].value.indexOf('@') == -1 || document.forms.formulario.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario.elements.idEmail.focus();
       return false;
    }

    //usando o nome no formulario  de maneira direta
    if (document.forms.formulario.elements.idMensagem.value == "" || document.forms.formulario.elements.idMensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.getElementById("idMensagem").focus();
        return false;
    }

    // validar o campo de radio
    var radioSelecionado = false;
    var radios = document.getElementsByName("check");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radioSelecionado = true;
            break;
        }
    }
    if (!radioSelecionado) {
        alert("Por favor, selecione se é a primeira vez na página!");
        return false;
    } 

    var primeiraVez = false;
    if (!primeiraVez) {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à esta página!");
    }

    return true;
}
    


