import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa }  from '../gerarDados';

export class GeneralClientSimple {

    constructor(page) {
        this.page = page
    }

    //Menu de opções
    async iconMenuOptions (selector) {

        //Ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .should('be.visible')
            .and('not.have.attr', 'disabled')
                
        //Clicar ni ícone do menu de opções
        cy.get('[aria-label="Menu de opções"] > .ng-binding')
            .click({force:true})
    }

    //Escolher opção cliente no menu de opções
    async optionClientSimple (selector) {

        //Opção Cliente no menu de opções
        cy.get('a[aria-label="Cliente"]')
            .should('have.attr', 'aria-label', 'Cliente')

        //Opção Cliente no menu de opções
        cy.get('a[aria-label="Cliente"]')
            .scrollIntoView()
            .click({force:true})
    }

    //Botão SALVAR, do cliente simples
    async saveClientSimple (selector) {

        //Botão SALVAR
        cy.get('.layout-align-end-center > .md-raised')
            .scrollIntoView()
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Clica no botão SALVAR
        cy.get('.layout-align-end-center > .md-raised')
            .click({force:true})
    }

    //Botão arrastar para pessoa jurídica - arrastar e validar
    async dragPersonLegal (selector) {

        //Arrastar para Pessoa jurídica
        cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
            .should('be.visible')
            .and('contain',' Pessoa Física/Pessoa Júridica ')

        //Arrastar para Pessoa jurídica
        cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
            .click({force:true})
    }

    //Primeira mensagem de Registro salvo com sucesso!
    async messFirstRegistSaveSucess (selector) {

        //Card de mensagem de Registro salvo com sucesso!
        cy.get('.toast')
            .should('be.visible')

        //Card de mensagem de Registro salvo com sucesso! - Aviso
        cy.get('.toast-title')
            .should('be.visible')
            .and('have.text', 'Aviso')

        //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
        cy.get('.toast-message')
            .should('be.visible')
            .and('have.text', 'Registro salvo com sucesso!')
    }

    //logar no sistema novamente, para realizar as alterações no cadastro
    async loginAgain (selector) {

        //Inserir Usuário para logar novamente
        cy.get('#txtusername')
            .type('sabium.automacao')

        //Inserir Senha para logar novamente
        cy.get('#txtpassword')
            .type('123.automacao')

        cy.intercept('GET', '/images/icons/discount.svg').as('api_entrar_sistema')
        //Clicar no botão Entrar, para logar novamente
        cy.get('.test_btnSalvarCliente')
            .click({force:true})
        cy.wait('@api_entrar_sistema', { timeout: 40000 })
    }

    //clicar para sair do sistema
    async clickOutSystem (selector) {

        //Clicar no botão Sair
        cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
            .click({force:true})
    }

    //validar e clicar em SIM na mensagem "Deseja visualizar este cadastro?", quando quero alterar data de nascimento de um cadastro de cliente simples
    async desireSeeRegister (selector) {

        //Mensagem se desejo visualizar o cadastro
        cy.get('.md-title')
            .should('be.visible')
            .and('contain', 'Este CPF / CNPJ já está cadastrado para')
            .and('contain', ', deseja visualizar este cadastro?')

        //Validar Não para se desejo visualizar este cadastro
        cy.get('.md-cancel-button')
            .should('be.visible')
            .and('not.have.attr', 'disabled') 

        //Validar Sim para se desejo visualizar este cadastro
        cy.get('.md-confirm-button')
            .should('be.visible')
            .and('not.have.attr', 'disabled')

        //Clicar em Sim para se desejo visualizar este cadastro
        cy.get('.md-confirm-button')
            .click({force:true})
    }

    //validar trial quando alteramos a data de nascimento do cliente simples
    async authorizeTrialDateBirth (selector) {

        const idSupervisorTrial = "393"
        const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO"
        const senhaSupervisor = "123.automacao"

        // Card de Autorização do Supervisor
                
                //Título Autorização do Supervisor
                cy.get('.md-toolbar-tools > .ng-binding')
                    .should('be.visible')
                    .and('have.text', 'Autorização do Supervisor')

                //Título da coluna Trial
                cy.get('thead > tr > :nth-child(1)')
                    .should('be.visible')
                    .and('have.text', 'Trial')

                //Informação da coluna Trial
                cy.get('tbody > .ng-scope > :nth-child(1)')
                    .should('be.visible')

                //Título da coluna Descrição
                cy.get('thead > tr > :nth-child(2)')
                    .should('be.visible')
                    .and('have.text', 'Descrição')

                //Informação da coluna Descrição
                cy.get('tbody > .ng-scope > :nth-child(2)')
                    .should('be.visible')

                //Título da coluna Status
                cy.get('thead > tr > :nth-child(3)')
                    .should('be.visible')
                    .and('have.text', 'Status')
                
                //Informação da coluna Status
                cy.contains('td.ng-binding', 'Pendente')
                    .should('be.visible')
                    .and('have.text', 'Pendente')
                    .and('have.css', 'background-color', 'rgb(234, 7, 7)')

                //Título da coluna Permissão / Usuário
                cy.get('thead > tr > :nth-child(4)')
                    .should('be.visible')
                    .and('have.text', 'Permissão / Usuário')

                //Informação da coluna Permissão / Usuário
                cy.get('tbody > .ng-scope > :nth-child(4)')
                    .should('be.visible')
                    .and('have.text', 'Sim')

                //Validando Texto Supervisor
                cy.get('tbody > :nth-child(2) > .ng-binding')
                    .should('be.visible')
                    .and('have.text', 'Supervisor')

                //Validando ID do supervisor
                cy.get('[ng-model="idUsuario"]')
                    .should('be.visible')
                    .and('have.value', idSupervisorTrial)

                //Validando nome do Supervisor
                cy.get('[ng-model="nomeUsuario"]')
                    .should('be.visible')
                    .and('have.value', nomeSupervidorTrial)

                //Validando texto Senha
                cy.get('tbody > :nth-child(3) > :nth-child(1)')
                    .should('be.visible')
                    .and('have.text', 'Senha')
                
                //Validando campo de senha do supervisor
                cy.get(':nth-child(3) > [colspan="2"] > .ng-pristine')
                    .should('be.visible')
                    .and('have.value', '')
                    .type(senhaSupervisor)

                // //Validando botão CANCELAR
                // cy.contains('button', 'Cancelar')
                //     .should('be.visible')
                //     .and('have.text', 'Cancelar')  
                //     .and('not.have.attr', 'disabled')

                // //Validando botão CONFIRMAR
                // cy.contains('button', 'Confirmar')
                //     .should('be.visible')
                //     .and('have.text', 'Confirmar')  
                //     .and('not.have.attr', 'disabled')

                //Clicar no botão CONFIRMAR
                cy.contains('button', 'Confirmar')
                    .click()
    }
}