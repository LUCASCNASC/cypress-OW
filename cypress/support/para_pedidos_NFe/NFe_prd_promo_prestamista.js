//Escolher primeiro produto normal - 1918 0 0 - com Intercept - processo venda 9860 (NFe)
export function prdPromoPrazoParcelaPrest (selector) {

    const primeiro_produto_normal = '1918'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1918*%20codigo:1918%20OR%20nome:*1918*%20OR%20codigo:*1918*%20OR%20nomeecommerce:*1918*%20OR%20marca_descricao:*1918*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_normal)
        .wait(100)
        .should('have.value', primeiro_produto_normal)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisaProdutoPromoPrazoParcelaPrest (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1918').as('api_produto_tambem_compraram_1918')

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

    //Check box do produto
    cy.get('.expandeIcone')
        .should('be.visible')

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .should('be.visible')
        .click({force:true})

    cy.wait('@api_produto_tambem_compraram_1918', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoPromoPrazoParcelaPrest (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1918').as('api_produto_relacionado_lista_1918')

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

    cy.wait('@api_produto_relacionado_lista_1918', { timeout: 40000 })
}

//Botão adicionar produto após selecionar voltagem do produto
export function clicarAddProdutoPromoPrazoParcelaPrest (selector) {

    cy.intercept('GET', '/services/v3/produto_servico_vinculado?sku=1918.0.0&valor=950&quantidade=1&processo=9860').as('api_servicos_vinculados')

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