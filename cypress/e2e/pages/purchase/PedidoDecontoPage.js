export class PedidoDecontoPage {

  //Clicar e validar botão % (desconto).
  static clicarBotaoDesconto() {
    cy.get('[ng-click="abrirModalDescontoProduto($index)"]')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('[ng-click="abrirModalDescontoProduto($index)"] > .ng-scope')
      .scrollIntoView()
      .wait(200)
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  //Validar modal Sub/Sobre.
  static validateModalSub() {
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Sub/Sobre');
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.md-primary > .md-container > .md-bar').should('be.visible').and('not.be.disabled');
    cy.contains('Sub (-)').should('be.visible');
    cy.contains('(+) Sobre').should('be.visible');
    cy.contains('button', 'R$').should('be.visible').and('not.be.disabled');
    cy.contains('button', '%').should('be.visible').and('not.be.disabled');
    cy.contains('button', 'VALOR FIXO').should('be.visible').and('not.be.disabled');
    cy.get('md-icon').should('be.visible');
    cy.get('input.campoMoeda_desconto.md-input').should('be.visible').and('have.value', '0');
    cy.get('button[ng-click="aplicarSubSobre()"]').should('be.visible').and('contain', 'Aplicar').and('not.be.disabled');
  }

  //Arrastar forma de pagamento escolhida para aparecer desconto.
  static dragFormPayment() {
    cy.get('.md-whiteframe-2dp')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 100, clientY: 0 })
      .trigger('mouseup');
  }

  //Clicar no botão R$.
  static clickChangeValue() {
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
      .should('be.visible')
      .and('not.be.disabled');
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-scope')
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }

  //Validar modal Alterar o valor.
  static modalChangeValue() {
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .flex')
      .should('be.visible')
      .and('have.text', 'Alterar o valor');
    cy.get('.md-transition-in > ._md > .md-toolbar-tools > .md-icon-button > .ng-binding')
      .should('be.visible')
      .and('not.be.disabled');
    cy.contains('Valor da parcela').should('be.visible');
    cy.get('[ng-model="formaPgtoValor"]').should('be.visible').and('be.enabled');
    cy.contains('Numero de parcelas').should('be.visible');
    cy.get('[ng-model="formaPgtoQtdVezes"]').should('be.visible').and('not.be.enabled');
    cy.contains('Subtotal').should('be.visible');
    cy.get('[ng-model="formaPgtoSubtotal"]').should('be.visible').and('be.enabled');
    cy.get('button.md-raised.md-primary').should('be.visible').and('contain', ' Aplicar ');
  }

  //Alterar valor para baixo.
  static changeValueToLow() {
    cy.get('[ng-model="formaPgtoValor"]').clear().wait(200).type('136000');
    cy.get('[ng-model="formaPgtoSubtotal"]').clear().wait(200).type('136000');
    cy.get('button[ng-click="aplicarAlterarValor()"]').click({ force: true });
  }

  //Alterar valor para cima.
  static changeValueToTop() {
    cy.get('[ng-model="formaPgtoValor"]').clear().wait(200).type('137000');
    cy.get('[ng-model="formaPgtoSubtotal"]').clear().wait(200).type('137000');
    cy.get('button[ng-click="aplicarAlterarValor()"]').click({ force: true });
  }

  //Aplicar desconto Sub(-) com R$.
  static applyDiscountR$() {
    const valor_desconto_R$ = '1000';
    cy.contains('button', 'R$').click({ force: true });
    cy.get('#txtReajusteReal_0').type(valor_desconto_R$);
    cy.get('button[ng-click="aplicarSubSobre()"]').click({ force: true });
  }

  //Aplicar desconto Sub(-) com %.
  static applyDiscountPencentage() {
    const valor_desconto_porcentagem = '2';
    cy.contains('button', '%').click({ force: true });
    cy.get('#txtReajustePorc_0').type(valor_desconto_porcentagem);
    cy.get('button[ng-click="aplicarSubSobre()"]').click({ force: true });
  }

  //Aplicar desconto Sub(-) com VALOR FIXO.
  static applyDiscountVF() {
    const valor_desconto_valorFixo = '280000';
    cy.contains('button', 'VALOR FIXO').click({ force: true });
    cy.get('#txtReajusteFixo_0').clear().wait(100).type(valor_desconto_valorFixo);
    cy.get('button[ng-click="aplicarSubSobre()"]').click({ force: true });
  }
}