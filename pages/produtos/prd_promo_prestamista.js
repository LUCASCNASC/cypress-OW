/**
 * Page Object para testes de produtos com promoção prestamista (abatimento).
 */
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