function area() {

    class Retangulo {
        constructor(altura, largura) {
            this.altura = altura;
            this.largura = largura;
        }

        calculaArea() {
            return (this.altura * this.largura);
        }
    }

    var objRetangulo = new Retangulo();
    objRetangulo.largura = parseFloat(prompt("Digite o valor da largura:"));
    objRetangulo.altura = parseFloat(prompt("Digite o valor da altura:"));

    alert(objRetangulo.calculaArea());

}


function contaBanco() {

    class Conta {
        constructor() {
            this.nome ;
            this.banco;
            this.conta;
            this.saldo;
            this.tipoConta;
        }

        getNome() {
            return this.nome;
        }

        getBanco() {
            return this.banco;
        }

        getConta() {
            return this.conta;
        }

        getSaldo() {
            return this.saldo;
        }

        getTipoConta() {
            return this.tipoConta;
        }

        setNome(value) {
            this.nome = value;
        }

        setBanco(value) {
            this.banco = value;
        }

        setConta(value) {
            this.conta = value;
        }

        setSaldo(value) {
            this.saldo = value;
        }

        setTipoConta(value) {
            this.tipoConta = value;
        }

    }

    class ContaCorrente extends Conta {
        constructor() {
            super();
            this.saldoEspecial = 0;
        }

        getSaldoEspecial() {
            return this.saldoEspecial;
        }

        setSaldoEspecial(value) {
            this.saldoEspecial = value;
        }

        getTotalSaldo() {
            return this.getSaldo() + this.getSaldoEspecial();
        }
    }

    class ContaPoupanca extends Conta {
        constructor() {
            super();
            this.juros;
            this.dataVencimento;
        }

        getJuros() {
            return this.juros;
        }

        getDataVencimento() {
            return this.dataVencimento;
        }

        setJuros(value) {
            this.juros = value;
        }

        setDataVencimento(value) {
            this.dataVencimento = value;
        }

        getTotalComJuros() {
            return this.getSaldo() * (1 + this.getJuros() / 100);
        }
    }

    var objconta = new Conta();
    objconta.setNome(prompt("Nome: "));
    objconta.setBanco(prompt("Banco: "));
    objconta.setConta(prompt("Conta: "));
    objconta.setSaldo(parseFloat(prompt("Saldo: ")));
    objconta.setTipoConta(prompt("Tipo de conta (corrente ou poupança): "));

    if (objconta.getTipoConta() === 'corrente') {

        var objcontaCorrente = new ContaCorrente();
        objcontaCorrente.setSaldoEspecial(1000);

        alert("Tipo de conta: Corrente" + "\nNome: " + objconta.getNome() + "\nBanco: " + objconta.getBanco() + "\nConta: " + objconta.getConta() + "\nSaldo: RS" + objconta.getSaldo() + "\nSaldo especial: " + objcontaCorrente.getSaldoEspecial() + "\nSaldo total: R$" + objcontaCorrente.getTotalSaldo());

    } else if (objconta.getTipoConta() === 'poupança') {

        var objcontaPoupanca = new ContaPoupanca();
        objcontaPoupanca.setDataVencimento("24/04");
        objcontaPoupanca.setJuros(0.5);

        alert("Tipo de conta: Poupança" + "\nNome: " + objconta.getNome() + "\nBanco: " + objconta.getBanco() + "\nConta: " + objconta.getConta() + "\nSaldo: RS" + objconta.getSaldo() + "\nData vencimento: " + objcontaPoupanca.getDataVencimento() + "\nJuros: " + objcontaPoupanca.getJuros() + "%\nSaldo total: R$" + objcontaPoupanca.getTotalComJuros());
    }

}


