//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalPrimeiro (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1860*%20codigo:1860%20OR%20nome:*1860*%20OR%20codigo:*1860*%20OR%20nomeecommerce:*1860*%20OR%20marca_descricao:*1860*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

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
export function escolherProdutoPesquisaNormalPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1860').as('api_produto_tambem_compraram_1860')

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

    cy.wait('@api_produto_tambem_compraram_1860', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoNormalPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1860').as('api_produto_relacionado_lista_1860')

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

    cy.wait('@api_produto_relacionado_lista_1860', { timeout: 40000 })
}

//-----

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalSegundo (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1870*%20codigo:1870%20OR%20nome:*1870*%20OR%20codigo:*1870*%20OR%20nomeecommerce:*1870*%20OR%20marca_descricao:*1870*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_normal)
        .wait(100)
        .should('have.value', segundo_produto_normal)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisaNormalSegundo (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1870').as('api_produto_tambem_compraram_1870')

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

    cy.wait('@api_produto_tambem_compraram_1870', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoNormalSegundo (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1870').as('api_produto_relacionado_lista_1870')

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

    cy.wait('@api_produto_relacionado_lista_1870', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitPrimeiro (selector) {

    const primeiro_kit_normal = '1862'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1862*%20codigo:1862%20OR%20nome:*1862*%20OR%20codigo:*1862*%20OR%20nomeecommerce:*1862*%20OR%20marca_descricao:*1862*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .clear()
        .should('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_normal)
        .wait(100)
        .should('have.value', primeiro_kit_normal)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1862').as('api_produto_tambem_compraram_1862')

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

    cy.wait('@api_produto_tambem_compraram_1862', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoKitPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1862').as('api_produto_relacionado_lista_1862')

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

    cy.wait('@api_produto_relacionado_lista_1862', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoSemSaldo (selector) {

    const produto_sem_saldo = '1869'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1869*%20codigo:1869%20OR%20nome:*1869*%20OR%20codigo:*1869*%20OR%20nomeecommerce:*1869*%20OR%20marca_descricao:*1869*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_sem_saldo)
        .wait(100)
        .should('have.value', produto_sem_saldo)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoSemSaldo (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1869').as('api_produto_tambem_compraram_1869')

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

    cy.wait('@api_produto_tambem_compraram_1869', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoSemSaldo (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1869').as('api_produto_relacionado_lista_1869')

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

    cy.wait('@api_produto_relacionado_lista_1869', { timeout: 40000 })
}

//-----

//Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoCDPrimeiro (selector) {

    const primeiro_produto_CD = '1880'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1880*%20codigo:1880%20OR%20nome:*1880*%20OR%20codigo:*1880*%20OR%20nomeecommerce:*1880*%20OR%20marca_descricao:*1880*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_produto_CD)
        .wait(100)
        .should('have.value', primeiro_produto_CD)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoCDPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1880').as('api_produto_tambem_compraram_1880')

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

    cy.wait('@api_produto_tambem_compraram_1880', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoCDPrimeiro (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1880').as('api_produto_relacionado_lista_1880')

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

    cy.wait('@api_produto_relacionado_lista_1880', { timeout: 40000 })
}

//-----

//Escolher segundo produto normal - 1881 0 0
export function produtoCDSegundo (selector) {

    const segundo_produto_CD = '1881'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(segundo_produto_CD)
        .wait(100)
        .should('have.value', segundo_produto_CD)
}

//Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoComCD (selector) {

    const remoto_saldo_CD = '1883'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1883*%20codigo:1883%20OR%20nome:*1883*%20OR%20codigo:*1883*%20OR%20nomeecommerce:*1883*%20OR%20marca_descricao:*1883*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(remoto_saldo_CD)
        .wait(100)
        .should('have.value', remoto_saldo_CD)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoRemotoComCD (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1883').as('api_produto_tambem_compraram_1883')

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

    cy.wait('@api_produto_tambem_compraram_1883', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoRemotoComCD (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1883').as('api_produto_relacionado_lista_1883')

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

    cy.wait('@api_produto_relacionado_lista_1883', { timeout: 40000 })
}

//-----

//Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoSemCD (selector) {

    const remoto__sem_saldo_CD = '1882'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1882*%20codigo:1882%20OR%20nome:*1882*%20OR%20codigo:*1882*%20OR%20nomeecommerce:*1882*%20OR%20marca_descricao:*1882*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(remoto__sem_saldo_CD)
        .wait(100)
        .should('have.value', remoto__sem_saldo_CD)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoRemotoSemCD (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1882').as('api_produto_tambem_compraram_1882')

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

    cy.wait('@api_produto_tambem_compraram_1882', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoRemotoSemCD (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1882').as('api_produto_relacionado_lista_1882')

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

    cy.wait('@api_produto_relacionado_lista_1882', { timeout: 40000 })
}

//-----

//Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoArredondarCimaBaixo (selector) {

    const produto_arredondar = '1908'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1908*%20codigo:1908%20OR%20nome:*1908*%20OR%20codigo:*1908*%20OR%20nomeecommerce:*1908*%20OR%20marca_descricao:*1908*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_arredondar)
        .wait(100)
        .should('have.value', produto_arredondar)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoArredondarCimaBaixo (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1908').as('api_produto_tambem_compraram_1908')

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

    cy.wait('@api_produto_tambem_compraram_1908', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoArredondarCimaBaixo (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1908').as('api_produto_relacionado_lista_1908')

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

    cy.wait('@api_produto_relacionado_lista_1908', { timeout: 40000 })
}

//-----

//Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoCifrao (selector) {

    const produto_desconto_cifrao = '1912'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1912*%20codigo:1912%20OR%20nome:*1912*%20OR%20codigo:*1912*%20OR%20nomeecommerce:*1912*%20OR%20marca_descricao:*1912*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_cifrao)
        .wait(100)
        .should('have.value', produto_desconto_cifrao)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoCifrao (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1912').as('api_produto_tambem_compraram_1912')

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

    cy.wait('@api_produto_tambem_compraram_1912', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoDescontoCifrao (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1912').as('api_produto_relacionado_lista_1912')

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

    cy.wait('@api_produto_relacionado_lista_1912', { timeout: 40000 })
}

//-----

//Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoPercentual (selector) {

    const produto_desconto_percentual = '1913'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1913*%20codigo:1913%20OR%20nome:*1913*%20OR%20codigo:*1913*%20OR%20nomeecommerce:*1913*%20OR%20marca_descricao:*1913*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_percentual)
        .wait(100)
        .should('have.value', produto_desconto_percentual)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoPercentual (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1913').as('api_produto_tambem_compraram_1913')

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

    cy.wait('@api_produto_tambem_compraram_1913', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoDescontoPercentual (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1913').as('api_produto_relacionado_lista_1913')

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

    cy.wait('@api_produto_relacionado_lista_1913', { timeout: 40000 })
}

//-----

//Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoValorFixo (selector) {

    const produto_desconto_valorfixo = '1914'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1914*%20codigo:1914%20OR%20nome:*1914*%20OR%20codigo:*1914*%20OR%20nomeecommerce:*1914*%20OR%20marca_descricao:*1914*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_desconto_valorfixo)
        .wait(100)
        .should('have.value', produto_desconto_valorfixo)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoValorFixo (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1914').as('api_produto_tambem_compraram_1914')

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

    cy.wait('@api_produto_tambem_compraram_1914', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoDescontoValorFixo (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1914').as('api_produto_relacionado_lista_1914')

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

    cy.wait('@api_produto_relacionado_lista_1914', { timeout: 40000 })
}

//-----

//Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitDesconto (selector) {

    const primeiro_kit_desconto = '1909'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1909*%20codigo:1909%20OR%20nome:*1909*%20OR%20codigo:*1909*%20OR%20nomeecommerce:*1909*%20OR%20marca_descricao:*1909*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_desconto)
        .wait(100)
        .should('have.value', primeiro_kit_desconto)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitDesconto (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1909').as('api_produto_tambem_compraram_1909')

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

    cy.wait('@api_produto_tambem_compraram_1909', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoKitDesconto (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1909').as('api_produto_relacionado_lista_1909')

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

    cy.wait('@api_produto_relacionado_lista_1909', { timeout: 40000 })
}

//-----

//Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitRemoto (selector) {

    const primeiro_kit_remoto = '1915'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1915*%20codigo:1915%20OR%20nome:*1915*%20OR%20codigo:*1915*%20OR%20nomeecommerce:*1915*%20OR%20marca_descricao:*1915*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .and('be.visible')
        .should('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(primeiro_kit_remoto)
        .wait(100)
        .should('have.value', primeiro_kit_remoto)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitRemoto (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1915').as('api_produto_tambem_compraram_1915')

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

    cy.wait('@api_produto_tambem_compraram_1915', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoKitRemoto (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1915').as('api_produto_relacionado_lista_1915')

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

    cy.wait('@api_produto_relacionado_lista_1915', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPartida (selector) {

    const produto_promocao_partida = '1868'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1868*%20codigo:1868%20OR%20nome:*1868*%20OR%20codigo:*1868*%20OR%20nomeecommerce:*1868*%20OR%20marca_descricao:*1868*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPartida (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1968').as('api_produto_tambem_compraram_1968')

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

    cy.wait('@api_produto_tambem_compraram_1968', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoPromoPartida (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1968').as('api_produto_relacionado_lista_1968')

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

    cy.wait('@api_produto_relacionado_lista_1968', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoEntrada (selector) {

    const produto_promocao_prazo_entrada = '1866'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1866*%20codigo:1866%20OR%20nome:*1866*%20OR%20codigo:*1866*%20OR%20nomeecommerce:*1866*%20OR%20marca_descricao:*1866*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPrazoEntrada  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1966').as('api_produto_tambem_compraram_1966')

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

    cy.wait('@api_produto_tambem_compraram_1966', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoPromoPrazoEntrada  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1966').as('api_produto_relacionado_lista_1966')

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

    cy.wait('@api_produto_relacionado_lista_1966', { timeout: 40000 })
}

//-----

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoParcelado (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1867*%20codigo:1867%20OR%20nome:*1867*%20OR%20codigo:*1867*%20OR%20nomeecommerce:*1867*%20OR%20marca_descricao:*1867*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPrazoParcelado  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1967').as('api_produto_tambem_compraram_1967')

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

    cy.wait('@api_produto_tambem_compraram_1967', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoPromoPrazoParcelado  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1967').as('api_produto_relacionado_lista_1967')

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

    cy.wait('@api_produto_relacionado_lista_1967', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
export function prd1PrazoParcela (selector) {

    const produto_codigo = '1891'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1891*%20codigo:1891%20OR%20nome:*1891*%20OR%20codigo:*1891*%20OR%20nomeecommerce:*1891*%20OR%20marca_descricao:*1891*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1891').as('api_produto_tambem_compraram_1891')

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

    cy.wait('@api_produto_tambem_compraram_1891', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProdutoPrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1891').as('api_produto_relacionado_lista_1891')

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

    cy.wait('@api_produto_relacionado_lista_1891', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
export function prd2PrazoParcela (selector) {

    const produto_codigo = '1895'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1895*%20codigo:1895%20OR%20nome:*1895*%20OR%20codigo:*1895*%20OR%20nomeecommerce:*1895*%20OR%20marca_descricao:*1895*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto2PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1895').as('api_produto_tambem_compraram_1895')

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

    cy.wait('@api_produto_tambem_compraram_1895', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto2PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1895').as('api_produto_relacionado_lista_1895')

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

    cy.wait('@api_produto_relacionado_lista_1895', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
export function prd3PrazoParcela (selector) {

    const produto_codigo = '1893'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1893*%20codigo:1893%20OR%20nome:*1893*%20OR%20codigo:*1893*%20OR%20nomeecommerce:*1893*%20OR%20marca_descricao:*1893*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto3PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1893').as('api_produto_tambem_compraram_1893')

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

    cy.wait('@api_produto_tambem_compraram_1893', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto3PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1893').as('api_produto_relacionado_lista_1893')

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

    cy.wait('@api_produto_relacionado_lista_1893', { timeout: 40000 })
}

//-----

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)
export function prd4PrazoParcela (selector) {

    const produto_codigo = '1894'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9860*))%20AND%20(codigo:*1894*%20codigo:1894%20OR%20nome:*1894*%20OR%20codigo:*1894*%20OR%20nomeecommerce:*1894*%20OR%20marca_descricao:*1894*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
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

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto4PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1894').as('api_produto_tambem_compraram_1894')

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

    cy.wait('@api_produto_tambem_compraram_1894', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemProduto4PrazoParcela  (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1894').as('api_produto_relacionado_lista_1894')

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

    cy.wait('@api_produto_relacionado_lista_1894', { timeout: 40000 })
}

//-----

//produto normal com saldo, para exclusiva - 1896 0 0 - com intercept
export function primeiroPrdNormalExclusiva (selector) {

    const produto_exclusiva = '1896'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1896*%20codigo:1896%20OR%20nome:*1896*%20OR%20codigo:*1896*%20OR%20nomeecommerce:*1896*%20OR%20marca_descricao:*1896*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_exclusiva)
        .wait(100)
        .should('have.value', produto_exclusiva)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisaPrimeiroPrdNormalExclusiva (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1896').as('api_produto_tambem_compraram_1896')

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

    cy.wait('@api_produto_tambem_compraram_1896', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemPrimeiroPrdNormalExclusiva (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1896').as('api_produto_relacionado_lista_1896')

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

    cy.wait('@api_produto_relacionado_lista_1896', { timeout: 40000 })
}

//-----

//produto kit normal sem saldo, para exclusiva e sem saldo a receber - 1900 0 0 - com intercept
export function kitSemSaldoAgendamento (selector) {

    const kit_semsaldo = '1900'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1900*%20codigo:1900%20OR%20nome:*1900*%20OR%20codigo:*1900*%20OR%20nomeecommerce:*1900*%20OR%20marca_descricao:*1900*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_semsaldo)
        .wait(100)
        .should('have.value', kit_semsaldo)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisakitSemSaldoAgendamento (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1900').as('api_produto_tambem_compraram_1900')

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

    cy.wait('@api_produto_tambem_compraram_1900', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemkitSemSaldoAgendamento (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1900').as('api_produto_relacionado_lista_1900')

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

    cy.wait('@api_produto_relacionado_lista_1900', { timeout: 40000 })
}

//-----

//produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber - 1903 0 0 - com intercept
export function kitVolumes (selector) {

    const kit_volumes = '1903'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1903*%20codigo:1903%20OR%20nome:*1903*%20OR%20codigo:*1903*%20OR%20nomeecommerce:*1903*%20OR%20marca_descricao:*1903*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_volumes)
        .wait(100)
        .should('have.value', kit_volumes)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisakitVolumes (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1903').as('api_produto_tambem_compraram_1903')

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

    cy.wait('@api_produto_tambem_compraram_1903', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemkitVolumes (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1903').as('api_produto_relacionado_lista_1903')

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

    cy.wait('@api_produto_relacionado_lista_1903', { timeout: 40000 })
}

//-----

//produto normal com saldo a receber, para exclusiva - 1905 0 0 - com intercept
export function produtoSaldoReceber (selector) {

    const produto_saldoreceber = '1905'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1905*%20codigo:1905%20OR%20nome:*1905*%20OR%20codigo:*1905*%20OR%20nomeecommerce:*1905*%20OR%20marca_descricao:*1905*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber)
        .wait(100)
        .should('have.value', produto_saldoreceber)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisaSaldoReceber (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1905').as('api_produto_tambem_compraram_1905')

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

    cy.wait('@api_produto_tambem_compraram_1905', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemSaldoReceber (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1905').as('api_produto_relacionado_lista_1905')

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

    cy.wait('@api_produto_relacionado_lista_1905', { timeout: 40000 })
}

//-----

//produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
export function prdSaldoReceberDuasLinhas (selector) {

    const produto_saldoreceber_duaslinhas = '1906'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1906*%20codigo:1906%20OR%20nome:*1906*%20OR%20codigo:*1906*%20OR%20nomeecommerce:*1906*%20OR%20marca_descricao:*1906*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber_duaslinhas)
        .wait(100)
        .should('have.value', produto_saldoreceber_duaslinhas)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherPesquisaSaldoReceberDuasLinhas (selector) {

    cy.intercept('GET', '/services/v3/produto_tambem_compraram?lista=1906').as('api_produto_tambem_compraram_1906')

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

    cy.wait('@api_produto_tambem_compraram_1906', { timeout: 40000 })
}

//Clicar para selecionar a voltagem que queremos adicionar ao pedido
export function escolherVoltagemSaldoReceberDuasLinhas (selector) {

    cy.intercept('GET', '/services/v3/produto_relacionado?lista=1906').as('api_produto_relacionado_lista_1906')

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

    cy.wait('@api_produto_relacionado_lista_1906', { timeout: 40000 })
}

//-----