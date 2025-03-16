//NÃO ESTÃO SENDO USADOS
export class GeralProduto {

    constructor(page) {
        this.page = page
    }

    //Clicar para selecionar o produto que queremos adicionar ao pedido
    async chooseProductSearch (selector) {

        cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram')

        //Imagem do produto
        cy.get('.resultado-imagem')
            .should('be.visible')

        //Nome do produto
        cy.get('.md-resultado-titulo')
            .should('be.visible')

        //Saldo disponível
        cy.get('.md-list-item-text > .ng-scope')
            .should('be.visible')

        //Código do produto
        cy.get('.badge-saldo.ng-binding')
            .should('be.visible')

        //Cifrão do valor do produto
        cy.get('sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //Valor do produto
        cy.get('.valor-busca')
            .should('be.visible')

        // //Check box do produto
        // cy.get('.expandeIcone')
        //     .should('be.visible')

        //Clicar para adicionar no carrinho
        cy.get('.md-list-item-text')
            .should('be.visible')
            .click({force:true})

        cy.wait('@api_produto_tambem_compraram', { timeout: 40000 })
    }

    //Clicar para selecionar a voltagem que queremos adicionar ao pedido
    async clickVoltageProduct (selector) {

        cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista')

        //Mensagem "Selecione a cor, a voltagem e o local de saldo "
        cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
            .should('be.visible')
            .and('have.text', 'Selecione a cor, a voltagem e o local de saldo')

        //Botão de expandir produto
        cy.get('.layout-align-end-center > .md-fab')
            .should('be.visible')
            .and('not.be.disabled')

        //ícone do botão de expandir produto
        cy.get('.layout-align-end-center > .md-fab')
            .should('be.visible')
            .and('not.be.disabled')

        //Card de voltagem - Cifrão
        cy.get('.md-secondary-container > div > .ng-binding > sup')
            .should('be.visible')
            .and('have.text', 'R$')

        //Card de voltagem 
        cy.get('.md-list-item-inner')
            .should('be.visible')
            .and('contain', 'Cód. Fabricante:')
            .and('contain', 'Filial:')
            .and('contain', 'Saldo Local:')
            .and('contain', 'Saldo Depósito:')

        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style')
            .click({force:true})

        cy.wait('@api_produto_relacionado_lista', { timeout: 40000 })
    }

    //Botão adicionar produto após selecionar voltagem do produto
    async clickAddProduct (selector) {

        cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados')

        //Botão adicionar produto após selecionar voltagem do produto
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .scrollIntoView()
            .wait(200)
            .should('be.visible')
            .and('not.be.disabled')
            .and('contain','Adicionar')

        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})

        cy.wait('@api_servicos_vinculados', { timeout: 40000 })
    }
}