import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone } from '../../../gerarDadosPIX'

export class PreencherPessoa {

    constructor(page) {
        this.page = page
    }

    //Validar e preencher campo Data Nascimento
    async dataNascimento (selector) {

        //Ícone de data de nascimento 
        cy.get('#txtDataNasc > .md-datepicker-button')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Campo Data Nascimento - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtDataNasc"]')
            .should('have.text', 'Data Nascimento') 

        cy.wait(200)

        cy.contains('Data Nascimento').parent().find('input').type('30/09/1998');

    }

    //Validar e prencher campo Nome Completo - CPF
    async nomeCompleto (selector) {

        const NomeCompleto = gerarNomeAleatorio();

        //Campo Nome - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtRazaoSocial"]')
            .should('have.text', 'Nome Completo') 

        //Campo Nome Completo
        cy.get('#txtRazaoSocial')
            .should('be.visible')
            .and('have.value','')
            .type(NomeCompleto)
    }

    //Validar e prencher campo Nome CNPJ - CPF
    async nomeCNPJ (selector) {

        const razaoSocial = gerarNomeEmpresa();

        //clicar em algo aleatorio para carregar campo razao social
        cy.get('#txtRazaoSocial')
            .click()

        //Campo Nome - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtRazaoSocial"]')
            .should('have.text', 'Razão Social') 

        //Campo Nome Completo
        cy.get('#txtRazaoSocial')
            .should('be.visible')
            .and('have.value','')
            .type(razaoSocial, {force: true})
    }

    //Validar e preencher campo CPF
    async cpfCliente (selector) {

        const cpf = gerarCpf(); // Gera um CPF válido

        //Campo CPF - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCpfCnpj"]')
            .should('have.text', 'CPF')

        //Campo CPF 
        cy.get('#txtCpfCnpj')
            .should('be.visible')
            .and('have.value','')
            .type(cpf, {force: true})
    }

    //Validar e preencher campo CNPJ
    async cnpjCliente (selector) {

        const cnpj = gerarCNPJ(); // Gera um CNPJ válido

        //Campo CPF - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtCpfCnpj"]')
            .should('have.text', 'CPF')

        //Campo CNPJ
        cy.get('#txtCpfCnpj')
            .should('be.visible')
            .and('have.value','')
            .type(cnpj, {force: true})
    }

    //Validar e prencher campo Nome Fantasia - CPF
    async nomeFantasiaCNPJ (selector) {

        const nomeClienteCNPJ = "Novo cadastro cliente CNPJ"

        //Campo Nome Fantasia - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNomeFantasia"]')
            .should('have.text', 'Nome Social') 

        cy.get('#txtNomeFantasia')
            .should('be.visible')
            .and('have.value','')
            .type(nomeClienteCNPJ, { force: true })
    }

    //Validar e prencher campo Nome Social - CPF
    async nomeSocial (selector) {

        const NomeSocial = gerarNomeAleatorio();

        //Campo Nome - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtNomeFantasia"]')
            .should('have.text', 'Nome Social') 

        //Campo Nome Completo
        cy.get('#txtNomeFantasia')
            .should('be.visible')
            .and('have.value','')
            .type(NomeSocial)
    }

     //Validar e escolher sexo da pessoa
     async sexoCliente (selector) {

        //Campo Sexo - validando mensagem dentro do campo antes de preencher
        cy.get('label[for="txtSexo"]')
            .should('have.text', 'Sexo') 

        //Campo Tipo de Sexo
        cy.get('#txtSexo')
            .should('be.visible')

        //Clicar no campo Tipo de sexo
        cy.get('#txtSexo')
            .click({force:true})

        //Clicar na opção MASCULINO
        cy.get('.md-text.ng-binding')
            .contains('Masculino')
            .click({force:true})
    }
}