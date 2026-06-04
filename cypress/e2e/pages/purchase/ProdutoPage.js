export class GeneralProduct {

  //Seleciona um produto na busca e adiciona ao pedido.
  static chooseProductSearch() {
    cy.intercept('GET', '/services/v3/produto_tambem_compraram**').as('api_produto_tambem_compraram');

    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.md-list-item-text > .ng-scope').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');

    cy.get('.md-list-item-text').should('be.visible').click({ force: true });

    cy.wait('@api_produto_tambem_compraram', { timeout: 40000 });
  }

  //Seleciona a voltagem do produto para adicionar ao pedido.
  static clickVoltageProduct() {
    cy.intercept('GET', '/services/v3/produto_relacionado**').as('api_produto_relacionado_lista');

    cy.get('md-list.md-default-theme > .btn-rounded > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Selecione a cor, a voltagem e o local de saldo');

    cy.get('.layout-align-end-center > .md-fab').should('be.visible').and('not.be.disabled');
    cy.get('.md-secondary-container > div > .ng-binding > sup').should('be.visible').and('have.text', 'R$');
    cy.get('.md-list-item-inner')
      .should('be.visible')
      .and('contain', 'Cód. Fabricante:')
      .and('contain', 'Filial:')
      .and('contain', 'Saldo Local:')
      .and('contain', 'Saldo Depósito:');

    cy.get(':nth-child(1) > md-list.md-default-theme > .md-2-line > div.md-button > .md-no-style').click({ force: true });

    cy.wait('@api_produto_relacionado_lista', { timeout: 40000 });
  }

  //Clica no botão "Adicionar" para incluir o produto selecionado.
  static clickAddProduct() {
    cy.intercept('GET', '/services/v3/produto_servico_vinculado**').as('api_servicos_vinculados');

    cy.get('[style="padding: 0px 5px;"] > .md-accent')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled')
      .and('contain', 'Adicionar')
      .click({ force: true });

    cy.wait('@api_servicos_vinculados', { timeout: 40000 });
  }
}

//Page Object para testes de produtos exclusivos (produtos especiais no fluxo de venda).
export class ProductExclusiva {
  
  static firstNormal() {
    const produto = '1896';
    cy.intercept('GET', /\/consultaprodutos\/.*1896.*/).as('apiConsultaProdutos_primeiroPrdNormalExclusiva');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_primeiroPrdNormalExclusiva', { timeout: 40000 });
  }

  static kitWithoutBalanceScheduling() {
    const produto = '1900';
    cy.intercept('GET', /\/consultaprodutos\/.*1900.*/).as('apiConsultaProdutos_kitSemSaldoAgendamento');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_kitSemSaldoAgendamento', { timeout: 40000 });
  }

  static kitVolumes() {
    const produto = '1903';
    cy.intercept('GET', /\/consultaprodutos\/.*1903.*/).as('apiConsultaProdutos_kitVolumes');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_kitVolumes', { timeout: 40000 });
  }

  static balanceReceive() {
    const produto = '1905';
    cy.intercept('GET', /\/consultaprodutos\/.*1905.*/).as('apiConsultaProdutos_produtoSaldoReceber');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_produtoSaldoReceber', { timeout: 40000 });
  }

  static balanceReceiveTwoLines() {
    const produto = '1906';
    cy.intercept('GET', /\/consultaprodutos\/.*1906.*/).as('apiConsultaProdutos_prdSaldoReceberDuasLinhas');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_prdSaldoReceberDuasLinhas', { timeout: 40000 });
  }
}

//Page Object para testes de produtos normais.
export class Product {

  static fisrt() {
    const produto = '1860';
    cy.intercept('GET', /\/consultaprodutos\/.*1860.*/).as('apiConsultaProdutos_primeiroNormal');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_primeiroNormal', { timeout: 40000 });
  }

  static second() {
    const produto = '1870';
    cy.intercept('GET', /\/consultaprodutos\/.*1870.*/).as('apiConsultaProdutos_segundoNormal');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_segundoNormal', { timeout: 40000 });
  }

  static kitFirst() {
    const produto = '1862';
    cy.intercept('GET', /\/consultaprodutos\/.*1862.*/).as('apiConsultaProduto_primeiroKit');
    cy.get('#searchText').should('be.visible').clear().should('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProduto_primeiroKit', { timeout: 40000 });
  }

  static withoutBalance() {
    const produto = '1869';
    cy.intercept('GET', /\/consultaprodutos\/.*1869.*/).as('apiConsultaProdutos_semSaldo');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_semSaldo', { timeout: 40000 });
  }

  static cdFirst() {
    const produto = '1880';
    cy.intercept('GET', /\/consultaprodutos\/.*1880.*/).as('apiConsultaProdutos_CDPrimeiro');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_CDPrimeiro', { timeout: 40000 });
  }

  static cdSecond() {
    const produto = '1881';
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
  }

  static remoteWithCD() {
    const produto = '1883';
    cy.intercept('GET', /\/consultaprodutos\/.*1883.*/).as('apiConsultaProdutos_remotoComCD');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_remotoComCD', { timeout: 40000 });
  }

  static remoteWithoutCD() {
    const produto = '1882';
    cy.intercept('GET', /\/consultaprodutos\/.*1882.*/).as('apiConsultaProdutos_remotoSemCD');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_remotoSemCD', { timeout: 40000 });
  }

  static roundUpDown() {
    const produto = '1908';
    cy.intercept('GET', /\/consultaprodutos\/.*1908.*/).as('apiConsultaProdutos_arredondar');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_arredondar', { timeout: 40000 });
  }

  static discountNumber() {
    const produto = '1912';
    cy.intercept('GET', /\/consultaprodutos\/.*1912.*/).as('apiConsultaProdutos_descontoCifrao');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_descontoCifrao', { timeout: 40000 });
  }

  static discountPercentage() {
    const produto = '1913';
    cy.intercept('GET', /\/consultaprodutos\/.*1913.*/).as('apiConsultaProdutos_descontoPercentual');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_descontoPercentual', { timeout: 40000 });
  }

  static discountValueFixed() {
    const produto = '1914';
    cy.intercept('GET', /\/consultaprodutos\/.*1914.*/).as('apiConsultaProdutos_descontoValorFixo');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_descontoValorFixo', { timeout: 40000 });
  }

  static kitDiscount() {
    const produto = '1909';
    cy.intercept('GET', /\/consultaprodutos\/.*1909.*/).as('apiConsultaProdutos_kitDesconto');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_kitDesconto', { timeout: 40000 });
  }

  static kitRemote() {
    const produto = '1915';
    cy.intercept('GET', /\/consultaprodutos\/.*1915.*/).as('apiConsultaProdutos_kitRemoto');
    cy.get('#searchText').and('be.visible').should('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_kitRemoto', { timeout: 40000 });
  }

  static promoMatch() {
    const produto = '1868';
    cy.intercept('GET', /\/consultaprodutos\/.*1868.*/).as('apiConsultaProdutos_promoPartida');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_promoPartida', { timeout: 40000 });
  }

  static promoDeadlineEntry() {
    const produto = '1866';
    cy.intercept('GET', /\/consultaprodutos\/.*1866.*/).as('apiConsultaProdutos_PromoPrazoEntrada');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoEntrada', { timeout: 40000 });
  }

  static promoDeadlineInstallment() {
    const produto = '1867';
    cy.intercept('GET', /\/consultaprodutos\/.*1867.*/).as('apiConsultaProdutos_PromoPrazoParcelado');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoParcelado', { timeout: 40000 });
  }

  static firstInstallmentDeadline() {
    const produto = '1891';
    cy.intercept('GET', /\/consultaprodutos\/.*1891.*/).as('apiConsultaProdutos_prd1PrazoParcela');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_prd1PrazoParcela', { timeout: 40000 });
  }

  static secondInstallmentDeadline() {
    const produto = '1895';
    cy.intercept('GET', /\/consultaprodutos\/.*1895.*/).as('apiConsultaProdutos_prd2PrazoParcela');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_prd2PrazoParcela', { timeout: 40000 });
  }

  static thirdInstallmentDeadline() {
    const produto = '1893';
    cy.intercept('GET', /\/consultaprodutos\/.*1893.*/).as('apiConsultaProdutos_prd3PrazoParcela');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_prd3PrazoParcela', { timeout: 40000 });
  }

  static fourthInstallmentDeadline() {
    const produto = '1894';
    cy.intercept('GET', /\/consultaprodutos\/.*1894.*/).as('apiConsultaProdutos_prd4PrazoParcela');
    cy.get('#searchText').should('be.visible').and('have.value', '').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_prd4PrazoParcela', { timeout: 40000 });
  }
}

//Page Object para testes de produtos com promoção prestamista (abatimento).
export class ProductPromo {

  static termInstallmentPrest() {
    const produto = '1918';
    cy.intercept('GET', /\/consultaprodutos\/.*1918.*/).as('apiConsultaProdutos_PromoPrazoParcelaPrest');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoParcelaPrest', { timeout: 40000 });
  }

  static secondTermInstallmentPrest() {
    const produto = '1919';
    cy.intercept('GET', /\/consultaprodutos\/.*1919.*/).as('apiConsultaProdutos_SegPromoPrazoParcelaPrest');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_SegPromoPrazoParcelaPrest', { timeout: 40000 });
  }

  static matchPrest() {
    const produto = '1920';
    cy.intercept('GET', /\/consultaprodutos\/.*1920.*/).as('apiConsultaProdutos_PromoPartidaPrest');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPartidaPrest', { timeout: 40000 });
  }

  static thirdTermInstallmentPrest() {
    const produto = '1921';
    cy.intercept('GET', /\/consultaprodutos\/.*1921.*/).as('apiConsultaProdutos_TerPromoPrazoParcelaPrest');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_TerPromoPrazoParcelaPrest', { timeout: 40000 });
  }

  static termFisrtPrestAbatVF() {
    const produto = '1922';
    cy.intercept('GET', /\/consultaprodutos\/.*1922.*/).as('apiConsultaProdutos_PromoPrazoPrestPrimeiroAbatVF');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoPrestPrimeiroAbatVF', { timeout: 40000 });
  }

  static termSecondPrestAbatVF() {
    const produto = '1923';
    cy.intercept('GET', /\/consultaprodutos\/.*1923.*/).as('apiConsultaProdutos_PromoPrazoPrestSegAbatVF');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoPrestSegAbatVF', { timeout: 40000 });
  }

  static termThirdPrestAbatVF() {
    const produto = '1924';
    cy.intercept('GET', /\/consultaprodutos\/.*1924.*/).as('apiConsultaProdutos_PromoPrazoPrestTercAbatVF');
    cy.get('#searchText').clear().wait(100).should('have.value', '');
    cy.get('#searchText').should('be.visible').and('not.be.disabled');
    cy.get('label[for="searchText"]').should('have.text', 'Buscar produtos');
    cy.get('#searchText').type(produto).wait(100).should('have.value', produto);
    cy.wait('@apiConsultaProdutos_PromoPrazoPrestTercAbatVF', { timeout: 40000 });
  }
}

export class ValidateBalance {

  //Valida produto com saldo disponível local.
  static withBalance() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo disponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(92, 184, 92)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }

  //Valida produto com saldo disponível no CD.
  static withBalanceCD() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo disponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(240, 173, 78)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }

  //Valida produto com saldo indisponível.
  static withoutBalance() {
    cy.get('.resultado-imagem').should('be.visible');
    cy.get('.label')
      .should('be.visible')
      .and('have.text', 'Saldo indisponivel')
      .invoke('css', 'background-color')
      .should('equal', 'rgb(217, 83, 79)');
    cy.get('.md-resultado-titulo').should('be.visible');
    cy.get('.badge-saldo.ng-binding').should('be.visible');
    cy.get('sup').should('be.visible').and('have.text', 'R$');
    cy.get('.valor-busca').should('be.visible');
    // cy.get('.expandeIcone').should('be.visible'); // Uncomment if needed
  }
}