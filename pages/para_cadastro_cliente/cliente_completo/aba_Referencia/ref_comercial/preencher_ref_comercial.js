import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
         gerarRelacionamento, gerarObservação }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'


export class FillRefCommercial {

    constructor(page) {
        this.page = page
    }

    //referencia Comercial - escolher Agencia
    async enterprise (selector) {

        const empresa = gerarNomeEmpresa()

        //inserir dados
        cy.get('#txtEmpresaRefCom')
            .type(empresa)
    }

    //referencia Comercial - escolher Contato
    async contact (selector) {

        const contato = gerarTelefoneAleatorio()

        //inserir dados
        cy.get('#txtContatoRefCom')
            .type(contato)
    }

    //referencia Comercial - escolher Telefone
    async phone (selector) {

        const telefone = gerarTelefoneAleatorio()

        //inserir dados
        cy.get('#txtTelefoneRefCom')
            .type(telefone)
    }

    //referencia Comercial - escolher Email
    async email (selector) {

        const email = gerarEmailAleatorio()

        //inserir dados
        cy.get('#txtEmailRefCom')
            .type(email)
    }

    //referencia Comercial - escolher Observação
    async observation (selector) {

        const observacao = gerarObservação()

        //inserir dados
        cy.get('#txtObsRefCom')
            .type(observacao)
    }
}
  