export class GeneralOrder {
  /**
   * Trocar filial de faturamento - faturamento remoto da filial 50 para 6.
   */
  static changeBranchInvoicing() {
    const filial_local = '50 - PR - EMISSÃO NFe/NFCe';
    const filial_remota = '6 - GAZIN - IND. E COM. DE MÓVEIS E ELETROD. LTDA.';

    cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"] > .ng-binding').should('be.visible');
    cy.get('[ng-click="openModalFilial(itemClicado.grade, false);"]')
      .should('be.visible')
      .and('contain', filial_local)
      .click({ force: true });
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Filial');
    cy.get('.md-dialog-fullscreen > .md-primary > .md-toolbar-tools > .md-icon-button > .ng-binding').should('be.visible');
    cy.get('p.ng-binding').contains(filial_local).should('be.visible').and('not.be.disabled');
    cy.get('p.ng-binding').contains(filial_remota).should('be.visible').and('not.be.disabled');
    cy.get('.white > md-list.md-default-theme > :nth-child(2) > div.md-button > .md-no-style').click();
  }

  /**
   * Validando composição deste KIT.
   */
  static compositionKit() {
    cy.get('.is-expanded > v-pane-header.ng-scope > div')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('contain', 'Composição deste KIT');
  }

  /**
   * Clicar no botão editar parcelas da forma de pagamento.
   */
  static clickEditInstallments() {
    cy.get('.btn-remove-item-list > :nth-child(3) > .md-raised').click({ force: true });
  }

  /**
   * Comparar valores Subtotal e Total Financeiro.
   */
  static compareSubtotalTotalFinancial(span1, span2) {
    cy.get(span1)
      .invoke('text')
      .then((texto1) => {
        const valor1 = texto1.replace(/[^0-9,]/g, '').trim();
        cy.get(span2)
          .invoke('text')
          .then((texto2) => {
            const valor2 = texto2.replace(/[^0-9,]/g, '').trim();
            const valor1Numerico = parseFloat(valor1.replace(',', '.'));
            const valor2Numerico = parseFloat(valor2.replace(',', '.'));
            expect(valor1Numerico).to.equal(valor2Numerico);
          });
      });
  }
}