//produto normal com saldo, para exclusiva - 1896 0 0 - com intercept
export function primeiroPrdNormalExclusiva (selector) {

    const produto_exclusiva = '1896'

    cy.intercept('/consultaprodutos/**').as('apiConsultaProdutos')

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
export function escolherVoltagemPrimeiroPrdNormalExclusiva (selector) {

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
export function clicarAddProdutoPrimeiroPrdNormalExclusiva (selector) {

    cy.intercept('GET', '/services/v3/produto_servico_vinculado?sku=1896.0.0&valor=1300&quantidade=1&processo=9869').as('api_servicos_vinculados')

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

//-----

//produto kit normal sem saldo, para exclusiva e sem saldo a receber - 1900 0 0 - com intercept
export function kitSemSaldoAgendamento (selector) {

    const kit_semsaldo = '1900'

    cy.intercept('/consultaprodutos/**').as('apiConsultaProdutos')

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
export function escolherVoltagemkitSemSaldoAgendamento (selector) {

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

//-----

//produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber - 1903 0 0 - com intercept
export function kitVolumes (selector) {

    const kit_volumes = '1903'

    cy.intercept('/consultaprodutos/**').as('apiConsultaProdutos')

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
export function escolherVoltagemkitVolumes (selector) {

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

//-----

//produto normal com saldo a receber, para exclusiva - 1905 0 0 - com intercept
export function produtoSaldoReceber (selector) {

    const produto_saldoreceber = '1905'

    cy.intercept('/consultaprodutos/**').as('apiConsultaProdutos')

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
export function escolherVoltagemSaldoReceber (selector) {

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
export function clicarAddProdutoSaldoReceber (selector) {

    cy.intercept('GET', '/services/v3/produto_servico_vinculado?sku=1905.0.0&valor=1300&quantidade=1&processo=9869').as('api_servicos_vinculados')

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

//-----

//produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
export function prdSaldoReceberDuasLinhas (selector) {

    const produto_saldoreceber_duaslinhas = '1906'

    cy.intercept('/consultaprodutos/**').as('apiConsultaProdutos')

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
export function escolherVoltagemSaldoReceberDuasLinhas (selector) {

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

//-----