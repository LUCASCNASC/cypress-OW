//Escolher primeiro produto com promoção partida - 1868 0 0
export function produtoPromoPartida (selector) {

    const produto_promocao_partida = '1868'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_partida)
        .wait(100)
        .should('have.value', produto_promocao_partida)
}

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0
export function produtoPromoPrazoEntrada (selector) {

    const produto_promocao_prazo_entrada = '1866'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_entrada)
        .wait(100)
        .should('have.value', produto_promocao_prazo_entrada)
}

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0
export function produtoPromoPrazoParcelado (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_promocao_prazo_parcelado)
        .wait(100)
        .should('have.value', produto_promocao_prazo_parcelado)
}

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
export function prd1PrazoParcela (selector) {

    const produto_codigo = '1891'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
export function prd2PrazoParcela (selector) {

    const produto_codigo = '1895'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
export function prd3PrazoParcela (selector) {

    const produto_codigo = '1893'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1893 0 0 com garantia (isenta de juros) e prestamista (com juros)
export function prd4PrazoParcela (selector) {

    const produto_codigo = '1894'

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('exist')
        .and('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_codigo)
        .wait(100)
        .should('have.value', produto_codigo)
}

//Validando modal de carregamento "Adicionando produtos/serviços..."
export function messAdicionandoProdutosServicos (selector) {

    //validando ícone de carregamento
    cy.get('.conteudo > .layout-align-center-center > .md-accent')
        .should('exist')
        .and('be.visible')

    //validando mensagem de carregamento
    cy.get('h3')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Adicionando produtos/serviços...')
}

//validando e adicionando serviço prestamista
export function adicionarPrestamista (selector) {

    //validando ícone de serviço
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised > .ng-scope')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando botão de serviço
    cy.get('.btn-remove-item-list > :nth-child(2) > .md-raised')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    //validando título do modal "Seguro prestamista"
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('have.text', 'Seguro prestamista')

    //validando botão X do modal "Seguro prestamista"
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando subtítulo do modal "Seguro prestamista"
    cy.get('.md-subheader-content')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'Seguro Prestamista')

    //validando nome do seguro prestamista
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)') 
        .should('exist')
        .and('be.visible')

    //validando Quantidade do seguro prestamista
    cy.get('.md-list-item-text > :nth-child(2)')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Quantidade')

    //validando Valor unitário do seguro prestamista
    cy.get('.md-list-item-text > :nth-child(3)')
        .should('exist')
        .and('be.visible')
        .and('contain', 'Valor unitário')

    //validando R$ do valor do seguro prestamista
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup')
        .should('exist')
        .and('be.visible')
        .and('contain', 'R$')

    //validando valor do seguro prestamista
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding')
        .should('exist')
        .and('be.visible')

    //selecionar seguro prestamista
    cy.get('#checkbox-145-0 > .md-container')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click({force:true})

    //botão OK
    cy.get('md-dialog-actions.layout-row > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('have.text', ' Ok ')
        .click({force:true})
}

//validando e clicando para usar promoção
export function clicarUsarPromocao (selector) {

    //validando título do modal Promoções
    cy.get('h2.flex')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Promoções')

    //validando seta do modal Promoções
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando X modal Promoções
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando NÃO USAR PROMOÇÃO modal Promoções
    cy.get('[style="padding: 0 5px"] > .md-primary')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain', 'Não usar promoção')

    //validando existencia da promoção no modal Promoções
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //clicar na promoção
    cy.get('.md-3-line > div.md-button > .md-no-style')
        .click({force:true})
}

//validando e escolhendo forma de pagamento da promoção
export function selecionarFormaPagPromo (selector) {

    //validando título do modal Formas de pagamento
    cy.get('h2.flex')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .and('contain.text', 'Formas de pagamento')

    //validando seta do modal Formas de pagamento
    cy.get('.md-toolbar-tools > [ng-click="modalPromocao()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //validando X modal Formas de pagamento
    cy.get('#modal-formaPagamento > .md-dialog-fullscreen > .md-primary > .md-toolbar-tools > [ng-click="cancel()"] > .ng-binding')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')

    //Escolher uma forma de pagamento, no card de "Formas de pagamento"
    cy.get('button[aria-label="3860 - T.A. A Receber Futuro   Futuro"]')
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .click()
}

//Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
export function tipoServicoIsentoValidar (selector) {

    //Validando Tipo "Tipo(s) Serviço(s) Isento(s):" dentro do modal Promoções
    cy.contains('Tipo(s) Serviço(s) Isento(s):')
        .should('exist')
        .and('be.visible')

    //Validando "Garantias" dentro do modal Promoções
    cy.contains('Garantias')
        .should('exist')
        .and('be.visible')
}