export class Service {
  /**
   * Marca garantia "T.A. Garantia Separa Mesmo Processo" - 139
   */
  static garantiaSepMesmoProc() {
    cy.get('#checkbox-139-0 > .md-container').should('not.be.disabled').click();
  }

  /**
   * Marca garantia "T.A. Garantia Não Separa" - 140
   */
  static garantiaNaoSep() {
    cy.get('#checkbox-140-1 > .md-container').should('exist').and('not.be.disabled').click();
  }

  /**
   * Marca Garantia separa título em um processo diferente - 141
   */
  static garantiaSepTituloProcDif() {
    cy.get('#checkbox-141-2 > .md-container').should('exist').and('not.be.disabled').click();
  }

  /**
   * Marca Mão de Obra "T.A. MO Destaca e Não Separa" - 142
   */
  static maoObraDestNaoSep() {
    cy.get('#checkbox-142-0 > .md-container').should('exist').and('not.be.disabled').click();
  }

  /**
   * Marca Mão de Obra "T.A. MO Não Destaca e Separa Mesmo Processo" - 143
   */
  static maoObraNaoDestSepMesmoProc() {
    cy.get('#checkbox-143-1 > .md-container').should('exist').and('not.be.disabled').click();
  }

  /**
   * Marca Mão de obra que não destaca e separa título em processo diferente - 144
   */
  static maoObraNaoDestSepaProcDif() {
    cy.get('#checkbox-144-2 > .md-container').should('not.be.disabled').click();
  }

  /**
   * Validações card de serviços vinculados.
   */
  static validateModalServLinked() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible').and('contain', 'Serviços Vinculados');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.icon').should('be.visible');
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h2').should('be.visible').and('have.text', 'O item foi adicionado ao carrinho');
    cy.get('.ng-scope.flex-100 > .layout-wrap > :nth-child(2) > h4').should('be.visible').and('have.text', 'Aproveite para adicionar os serviços abaixo');
    cy.get('p.ng-binding').contains('Garantias').should('be.visible');
    cy.get('p.ng-binding').contains('Mão de Obra').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Clica no botão OK do modal Serviços Vinculados - com intercept.
   */
  static clickOKServiceLinked() {
    cy.intercept('POST', '/services/v3/pedido_calcular_frete').as('api_pedido_calcular_frete');
    cy.get('button[ng-click="salvar()"]').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ');
    cy.get('button[ng-click="salvar()"]').click({ force: true });
    cy.wait('@api_pedido_calcular_frete', { timeout: 40000 });
  }

  /**
   * Clica no botão OK do modal Serviços Vinculados de pedidos remotos.
   */
  static clickOKServiceLinkedRemote() {
    cy.get('button[ng-click="salvar()"]').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ');
    cy.get('button[ng-click="salvar()"]').click({ force: true });
  }

  /**
   * Valida modal de seguro prestamista e clica em OK.
   */
  static okInsurancePrest() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.white > .md-no-sticky > .md-subheader-inner').should('be.visible');
    cy.get('.md-container').should('be.visible').and('not.be.disabled');
    cy.get('.md-container.md-ink-ripple').should('have.css', 'color', 'rgba(37, 202, 19, 0.87)');
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)').should('be.visible');
    cy.get('.md-list-item-text > :nth-child(2)').should('be.visible').and('include.text', 'Quantidade');
    cy.get('.md-list-item-text > :nth-child(3)').should('be.visible').and('include.text', 'Valor unitário');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup').should('be.visible').and('contain', 'R$');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding').should('be.visible').and('include.text', 'R$');
    cy.get('md-dialog-actions.layout-row > .md-primary').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ');
    cy.get('md-dialog-actions.layout-row > .md-primary').click();
  }

  /**
   * Valida mensagem de remoção do prestamista por agrupamento.
   */
  static messPrestRemoved() {
    cy.get('.toast').should('be.visible');
    cy.get('.toast-title').should('be.visible').and('have.text', 'Atenção');
    cy.get('.toast-message').should('be.visible').and('have.text', 'O seguro prestamista será removido, você terá que adicioná-lo novamente');
  }

  /**
   * Valida modal de seguro prestamista e clica para adicionar.
   */
  static addInsurancePrest() {
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex').should('be.visible');
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible').and('not.be.disabled');
    cy.get('.white > .md-no-sticky > .md-subheader-inner').should('be.visible');
    cy.get('.md-container').should('be.visible').and('not.be.disabled');
    cy.get('.md-no-style > .md-list-item-text > :nth-child(1)').should('be.visible');
    cy.get('.md-list-item-text > :nth-child(2)').should('be.visible').and('include.text', 'Quantidade');
    cy.get('.md-list-item-text > :nth-child(3)').should('be.visible').and('include.text', 'Valor unitário');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding > sup').should('be.visible').and('contain', 'R$');
    cy.get('.md-no-style > .md-secondary-container > :nth-child(1) > .ng-binding').should('be.visible').and('include.text', 'R$');
    cy.get('#checkbox-158-0 > .md-container').should('be.visible').and('not.be.disabled').click();
    cy.get('md-dialog-actions.layout-row > .md-primary').should('be.visible').and('not.be.disabled').and('have.text', ' Ok ');
    cy.get('md-dialog-actions.layout-row > .md-primary').click();
  }
}