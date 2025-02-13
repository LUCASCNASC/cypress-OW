export class addMuitosProdutos {

    constructor(page) {
        this.page = page
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 1 1
    async Produto1 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.1.1').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 2 2
    async Produto2 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.2.2').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 3 3
    async Produto3 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.3.3').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 4 4
    async Produto4 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.4.4').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 5 5
    async Produto5 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.5.5').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 6 6
    async Produto6 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.6.6').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 7 7
    async Produto7 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.7.7').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 8 8
    async Produto8 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.8.8').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 9 9
    async Produto9 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.9.9').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 10 10
    async Produto10 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.10.10').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 11 11
    async Produto11 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.11.11').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 12 12
    async Produto12 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.12.12').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 13 13
    async Produto13 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.13.13').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 14 14
    async Produto14 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.14.14').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 15 15
    async Produto15 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.15.15').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 16 16
    async Produto16 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.16.16').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 17 17
    async Produto17 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.17.17').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 18 18
    async Produto18 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.18.18').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 19 19
    async Produto19 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.19.19').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 20 20
    async Produto20 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.20.20').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 21 21
    async Produto21 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.21.21').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 22 22
    async Produto22 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.22.22').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 23 23
    async Produto23 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.23.23').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 24 24
    async Produto24 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.24.24').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 25 25
    async Produto25 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.25.25').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 26 26
    async Produto26 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.26.26').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 27 27
    async Produto27 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.27.27').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 28 28
    async Produto28 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.28.28').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 29 29
    async Produto29 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.29.29').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 30 30
    async Produto30 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.30.30').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 31 31
    async Produto31 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.31.31').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 32 32
    async Produto32 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.32.32').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 33 33
    async Produto33 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.33.33').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 34 34
    async Produto34 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.34.34').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 35 35
    async Produto35 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.35.35').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 36 36
    async Produto36 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.36.36').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 37 37
    async Produto37 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.37.37').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 38 38
    async Produto38 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.38.38').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 39 39
    async Produto39 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.39.39').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }

    //escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 40 40
    async Produto40 (selector) {

        cy.intercept('GET', '/services/v3/local_saldo?filial_saldo=10050&sku=1907.40.40').as('api_local_saldo')
        //Card de voltagem - clicar
        cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
            .click({force:true})
        cy.wait('@api_local_saldo', { timeout: 40000 })

        //cy.intercept('POST', '/services/v3/executar_filtro').as('api_executar_filtro')
        //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
        cy.get('[style="padding: 0px 5px;"] > .md-accent')
            .click({force:true})
        //cy.wait('@api_executar_filtro', { timeout: 40000 })

        //Botão Retirada / Entrega - texto Retirada / Entrega
        cy.get('.md-checked > .md-label')
            .click({force:true})
    }
}