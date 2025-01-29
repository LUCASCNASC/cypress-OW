//Escolher primeiro produto normal - 1860 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalPrimeiro (selector) {

    const primeiro_produto_normal = '1860'

    cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_primeiroNormal')

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

    cy.wait('@apiConsultaProdutos_primeiroNormal', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisaNormalPrimeiro (selector) {

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
export function escolherVoltagemProdutoNormalPrimeiro (selector) {

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
export function clicarAddProdutoNormalPrimeiro (selector) {

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

//-----

//Escolher segundo produto normal - 1870 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoNormalSegundo (selector) {

    const segundo_produto_normal = '1870'

    cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_segundoNormal')

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

    cy.wait('@apiConsultaProdutos_segundoNormal', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPesquisaNormalSegundo (selector) {

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
export function escolherVoltagemProdutoNormalSegundo (selector) {

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
export function clicarAddProdutoNormalSegundo (selector) {

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

//-----

//Escolher primeiro produto normal - 1862 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitPrimeiro (selector) {

    const primeiro_kit_normal = '1862'

    cy.intercept('GET', /\/consultaprodutos\/.*1862.*/).as('apiConsultaProduto_primeiroKit')

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

    cy.wait('@apiConsultaProduto_primeiroKit', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitPrimeiro (selector) {

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
export function escolherVoltagemProdutoKitPrimeiro (selector) {

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
export function clicarAddProdutoKitPrimeiro (selector) {

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

//-----

//Escolher primeiro produto normal - 1869 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoSemSaldo (selector) {

    const produto_sem_saldo = '1869'

    cy.intercept('GET', /\/consultaprodutos\/.*1869.*/).as('apiConsultaProdutos_semSaldo')

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

    cy.wait('@apiConsultaProdutos_semSaldo', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoSemSaldo (selector) {

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
export function escolherVoltagemProdutoSemSaldo (selector) {

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

//Escolher primeiro produto normal - 1880 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoCDPrimeiro (selector) {

    const primeiro_produto_CD = '1880'

    cy.intercept('GET', /\/consultaprodutos\/.*1880.*/).as('apiConsultaProdutos_CDPrimeiro')

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

    cy.wait('@apiConsultaProdutos_CDPrimeiro', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoCDPrimeiro (selector) {

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
export function escolherVoltagemProdutoCDPrimeiro (selector) {

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
export function clicarAddProdutoCDPrimeiro (selector) {

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

//-----

//Escolher produto remoto com saldo em seu CD (filial 1) - 1883 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoComCD (selector) {

    const remoto_saldo_CD = '1883'

    cy.intercept('GET', /\/consultaprodutos\/.*1883.*/).as('apiConsultaProdutos_remotoComCD')

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

    cy.wait('@apiConsultaProdutos_remotoComCD', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoRemotoComCD (selector) {

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
export function escolherVoltagemProdutoRemotoComCD (selector) {

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
export function clicarAddProdutoRemotoComCD (selector) {

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

//-----

//Escolher produto remoto com saldo em seu CD (filial 1) - com Intercept - processo venda 9860 (NFe)
export function produtoRemotoSemCD (selector) {

    const remoto__sem_saldo_CD = '1882'

    cy.intercept('GET', /\/consultaprodutos\/.*1882.*/).as('apiConsultaProdutos_remotoSemCD')

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

    cy.wait('@apiConsultaProdutos_remotoSemCD', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoRemotoSemCD (selector) {

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
export function escolherVoltagemProdutoRemotoSemCD (selector) {

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

//Escolher produto arredondar primeiro - 1908 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoArredondarCimaBaixo (selector) {

    const produto_arredondar = '1908'

    cy.intercept('GET', /\/consultaprodutos\/.*1908.*/).as('apiConsultaProdutos_arredondar')

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

    cy.wait('@apiConsultaProdutos_arredondar', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoArredondarCimaBaixo (selector) {

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
export function escolherVoltagemProdutoArredondarCimaBaixo (selector) {

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
export function clicarAddProdutoArredondarCimaBaixo (selector) {

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

//-----

//Escolher produto com desconto R$ - 1912 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoCifrao (selector) {

    const produto_desconto_cifrao = '1912'

    cy.intercept('GET', /\/consultaprodutos\/.*1912.*/).as('apiConsultaProdutos_descontoCifrao')

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

    cy.wait('@apiConsultaProdutos_descontoCifrao', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoCifrao (selector) {

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
export function escolherVoltagemProdutoDescontoCifrao (selector) {

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

//Escolher produto com desconto percentual - 1913 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoPercentual (selector) {

    const produto_desconto_percentual = '1913'

    cy.intercept('GET', /\/consultaprodutos\/.*1913.*/).as('apiConsultaProdutos_descontoPercentual')

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

    cy.wait('@apiConsultaProdutos_descontoPercentual', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoPercentual (selector) {

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
export function escolherVoltagemProdutoDescontoPercentual (selector) {

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

//Escolher produto com desconto valor fixo - 1914 0 0  - com Intercept - processo venda 9860 (NFe)
export function produtoDescontoValorFixo (selector) {

    const produto_desconto_valorfixo = '1914'

    cy.intercept('GET', /\/consultaprodutos\/.*1914.*/).as('apiConsultaProdutos_descontoValorFixo')

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

    cy.wait('@apiConsultaProdutos_descontoValorFixo', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoDescontoValorFixo (selector) {

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
export function escolherVoltagemProdutoDescontoValorFixo (selector) {

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

//Escolher Kit desconto - 1909 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitDesconto (selector) {

    const primeiro_kit_desconto = '1909'

    cy.intercept('GET', /\/consultaprodutos\/.*1909.*/).as('apiConsultaProdutos_kitDesconto')

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

    cy.wait('@apiConsultaProdutos_kitDesconto', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitDesconto (selector) {

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
export function escolherVoltagemProdutoKitDesconto (selector) {

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
export function clicarAddProdutoKitDesconto (selector) {

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

//-----

//Escolher produto kit remoto - 1915 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoKitRemoto (selector) {

    const primeiro_kit_remoto = '1915'

    cy.intercept('GET', /\/consultaprodutos\/.*1915.*/).as('apiConsultaProdutos_kitRemoto')

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

    cy.wait('@apiConsultaProdutos_kitRemoto', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoKitRemoto (selector) {

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
export function escolherVoltagemProdutoKitRemoto (selector) {

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
export function clicarAddProdutoKitRemoto (selector) {

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

//-----

//Escolher primeiro produto com promoção partida - 1868 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPartida (selector) {

    const produto_promocao_partida = '1868'

    cy.intercept('GET', /\/consultaprodutos\/.*1868.*/).as('apiConsultaProdutos_promoPartida')

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

    cy.wait('@apiConsultaProdutos_promoPartida', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPartida (selector) {

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
export function escolherVoltagemProdutoPromoPartida (selector) {

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
export function clicarAddProdutoPromoPartida (selector) {

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

//-----

//Escolher primeiro produto com promoção a prazo com entrada - 1866 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoEntrada (selector) {

    const produto_promocao_prazo_entrada = '1866'

    cy.intercept('GET', /\/consultaprodutos\/.*1866.*/).as('apiConsultaProdutos_PromoPrazoEntrada')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoEntrada', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPrazoEntrada  (selector) {

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
export function escolherVoltagemProdutoPromoPrazoEntrada  (selector) {

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
export function clicarAddProdutoPromoPrazoEntrada (selector) {

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

//-----

//Escolher primeiro produto com promoção a prazo parcelado - 1867 0 0 - com Intercept - processo venda 9860 (NFe)
export function produtoPromoPrazoParcelado (selector) {

    const produto_promocao_prazo_parcelado = '1867'

    cy.intercept('GET', /\/consultaprodutos\/.*1867.*/).as('apiConsultaProdutos_PromoPrazoParcelado')

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

    cy.wait('@apiConsultaProdutos_PromoPrazoParcelado', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProdutoPromoPrazoParcelado  (selector) {

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
export function escolherVoltagemProdutoPromoPrazoParcelado  (selector) {

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
export function clicarAddProdutoPromoPrazoParcelado (selector) {

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

//-----

//Pedido com promoção a prazo/parcelas (promoção 159): produto 1891 0 0 com garantia (isenta de juros)
export function prd1PrazoParcela (selector) {

    const produto_codigo = '1891'

    cy.intercept('GET', /\/consultaprodutos\/.*1891.*/).as('apiConsultaProdutos_prd1PrazoParcela')

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

    cy.wait('@apiConsultaProdutos_prd1PrazoParcela', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto1PrazoParcela  (selector) {

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
export function escolherVoltagemProduto1PrazoParcela  (selector) {

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
export function clicarAddProduto1PromoPrazoParcela (selector) {

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

//-----

//Pedido com promoção a prazo/entrada + parcelas (promoção 158): produto 1895 0 0 com garantia (isenta de juros)
export function prd2PrazoParcela (selector) {

    const produto_codigo = '1895'

    cy.intercept('GET', /\/consultaprodutos\/.*1895.*/).as('apiConsultaProdutos_prd2PrazoParcela')

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

    cy.wait('@apiConsultaProdutos_prd2PrazoParcela', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto2PrazoParcela  (selector) {

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
export function escolherVoltagemProduto2PrazoParcela  (selector) {

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
export function clicarAddProduto2PrazoParcela (selector) {

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

//-----

//Pedido com promoção a prazo/parcelas (promoção 160): produto 1893 0 0 com prestamista (isento de juros)
export function prd3PrazoParcela (selector) {

    const produto_codigo = '1893'

    cy.intercept('GET', /\/consultaprodutos\/.*1893.*/).as('apiConsultaProdutos_prd3PrazoParcela')

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

    cy.wait('@apiConsultaProdutos_prd3PrazoParcela', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto3PrazoParcela  (selector) {

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
export function escolherVoltagemProduto3PrazoParcela  (selector) {

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
export function clicarAddProduto3PrazoParcela (selector) {

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

//-----

//Pedido com promoção a prazo/parcelas (promoção 161): produto 1894 0 0 com garantia (isenta de juros) e prestamista (com juros)
export function prd4PrazoParcela (selector) {

    const produto_codigo = '1894'

    cy.intercept('GET', /\/consultaprodutos\/.*1894.*/).as('apiConsultaProdutos_prd4PrazoParcela')

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

    cy.wait('@apiConsultaProdutos_prd4PrazoParcela', { timeout: 40000 })
}

//Clicar para selecionar o produto que queremos adicionar ao pedido
export function escolherProduto4PrazoParcela  (selector) {

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
export function escolherVoltagemProduto4PrazoParcela  (selector) {

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
export function clicarAddProduto4PrazoParcela (selector) {

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

//-----