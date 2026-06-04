export class ProcessoVendaPage {
  
  //Seleciona processo de venda 9860 NFe
  static NFe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('center');
    cy.get('.md-text.ng-binding').contains('9860 - T.A. Pedido Negociável - NFe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda 9869 Exclusiva NFe
  static exclusive() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('center');
    cy.get('.md-text.ng-binding').contains('9869 - T.A. Pedido Negociável Exclusiva').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda entrega futura 9862 normal - NFe
  static deliveryFutureNFe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('center');
    cy.get('.md-text.ng-binding').contains('9862 - T.A. Pedido Entrega Futura NFe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda financeiro baixa 9863 normal - NFe
  static financePaymentNFe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('center');
    cy.get('.md-text.ng-binding').contains('9863 - T.A.Pedido Financeiro Baixa NFe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda 9888 - serviços avulsos NFe
  static saleServiceLoose() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('bottom').wait(200);
    cy.get('.md-text.ng-binding').contains('9888 - T.A. Venda de serviço avulso').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda 9890 - Negociável NFCe
  static NFCe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('bottom');
    cy.get('.md-text.ng-binding').contains('9890 - T.A. Pedido Negociável - NFCe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda entrega futura 9891 normal - NFCe
  static deliveryFutureNFCe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('bottom').wait(200);
    cy.get('.md-text.ng-binding').contains('9891 - T.A. Pedido Entrega Futura NFCe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }

  //Seleciona processo de venda financeiro baixa 9892 normal - NFCe
  static financePaymentNFCe() {
    cy.get('#select_value_label_4 > .md-select-icon').should('be.visible').and('not.be.disabled').click();
    cy.get('#select_listbox_12').should('be.visible').scrollTo('bottom').wait(200);
    cy.get('.md-text.ng-binding').contains('9892 - T.A.Pedido Financeiro Baixa NFCe').click({ force: true });
    cy.get('.md-select-backdrop').wait(200).dblclick().wait(200);
  }
}