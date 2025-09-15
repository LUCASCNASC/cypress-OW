/**
 * Page Object para testes de produtos normais.
 */
export class Product {
  // Métodos estáticos para não depender de instanciação

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