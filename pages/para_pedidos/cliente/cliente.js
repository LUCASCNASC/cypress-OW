export class EscolherCliente {

    constructor(page) {
        this.page = page
    }

    //Função para escolher cliente CPF para gerar pedido de venda - inserir cliente 
    async pedido2 (selector) {
        
        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(500)
            .type('    48976249089{enter}')

        cy.wait(2000)

        //Card Intenções de Compra - título "Intenções de Compra"
        cy.get('.md-title')
            .should('be.visible')
            .and('have.text', 'Intenções de Compra')

        //Card Intenções de Compra - mensagem dentro do card
        cy.get('.md-dialog-content-body > .ng-binding')
            .should('be.visible')
            .and('have.text', 'O cliente selecionado possui produtos adicionados nas intenções de compra, deseja acessá-los?')

        //Card Intenções de Compra - validando botão SIM
        cy.get('.md-confirm-button')
            .should('be.visible')
            .and('not.be.disabled')
            .should('have.text', 'Sim')

        //Card Intenções de Compra - validando botão NÃO
        cy.get('.md-cancel-button')
            .should('be.visible')
            .and('not.be.disabled')
            .should('have.text', 'Não')
            .click({force:true})
    }

    //Função para escolher cliente CPF para gerar pedido de venda - pesquisa por cliente
    async comRota (selector) {

        //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
        cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
            .wait(500)
            .type('48976249089 {downArrow}')

        cy.intercept('/views/cliente/modalClientes.html').as('api_modalclientes');
        //clicar na lupa de pesquisa de clientes
        cy.get('.md-block > .ng-binding')
            .should('be.visible')
            .click()
        cy.wait('@api_modalclientes', { timeout: 40000 })
        cy.intercept('/consultaclientes/*').as('api_consultaclientes');
        cy.wait('@api_consultaclientes', { timeout: 40000 })

        // cy.wait(1000)

        cy.intercept('/services/v3/pedido_validar_cliente').as('api_pedido_validar_cliente');
        //após a pesquisa encontrar o cliente, vamos selecionar ele
        cy.get('.md-3-line > div.md-button > .md-no-style')
            .should('be.visible')
            .click()
        cy.wait('@api_pedido_validar_cliente', { timeout: 40000 })
    }
}