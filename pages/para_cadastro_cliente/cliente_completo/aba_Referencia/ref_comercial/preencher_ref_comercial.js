import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'


export class preencherRefComercial {

    constructor(page) {
        this.page = page
    }

    //referencia Comercial - escolher Agencia
    async Empresa (selector) {

        const empresa = gerarNomeEmpresa()

        //inserir dados
        cy.get('#txtEmpresaRefCom')
            .type(empresa)
    }

    //referencia Comercial - escolher Contato
    async Contato (selector) {

        const contato = gerarTelefoneAleatorio()

        //inserir dados
        cy.get('#txtContatoRefCom')
            .type(contato)
    }

    //referencia Comercial - escolher Telefone
    async Telefone (selector) {

        const telefone = gerarTelefoneAleatorio()

        //inserir dados
        cy.get('#txtTelefoneRefCom')
            .type(telefone)
    }

    //referencia Comercial - escolher Email
    async Email (selector) {

        const email = gerarEmailAleatorio()

        //inserir dados
        cy.get('#txtEmailRefCom')
            .type(email)
    }

    //referencia Comercial - escolher Observação
    async Observacao (selector) {

        const observacao = gerarObservação()

        //inserir dados
        cy.get('#txtObsRefCom')
            .type(observacao)
    }
}