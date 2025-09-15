/**
 * Page Object para testes de produtos exclusivos (produtos especiais no fluxo de venda).
 */
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