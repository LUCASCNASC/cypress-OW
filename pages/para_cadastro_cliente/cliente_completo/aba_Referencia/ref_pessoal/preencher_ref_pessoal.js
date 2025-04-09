import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarRelacionamento }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX'

export class FillRefGuys {

    constructor(page) {
        this.page = page
    }

    //referencia pessoal - escolher Nome 
    async name (selector) {

        const Nome = gerarNomeAleatorio(); 

        //clicar para abrir as opções
        cy.get('#txtNomeRefPes')
            .type(Nome)
    }

    //referencia pessoal - escolher Email
    async email (selector) {

        const email = gerarEmailAleatorio();

        //clicar para abrir as opções
        cy.get('#txtEmailRefPes')
            .type(email)
    }

    //referencia pessoal - escolher Telefone
    async phone (selector) {

        const numero_telefone = gerarTelefoneAleatorio();

        //clicar para abrir as opções
        cy.get('#txtTelefoneRefPes')
            .type(numero_telefone)
    }

    //referencia pessoal - escolher Relacionamento
    async relationship (selector) {

        const relacionamento = gerarRelacionamento();

        //clicar para abrir as opções
        cy.get('#txtRelacionamentoRefPes')
            .type(relacionamento)
    }
}