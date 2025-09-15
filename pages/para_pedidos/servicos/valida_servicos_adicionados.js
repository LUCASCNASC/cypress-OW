export class ValidateService {
  /**
   * Valida título de "Serviços vinculados" para pedido com um produto.
   */
  static servLinked() {
    cy.get('.md-subheader-inner').scrollIntoView().wait(200).should('be.visible');
    cy.get('.md-subheader-content').should('be.visible').and('have.text', 'Serviços vinculados');
  }

  /**
   * Valida Garantia "139 - T.A. Garantia Separa Mesmo Processo".
   */
  static addGarantSepMesmoProc() {
    cy.contains('139 - T.A. Garantia Separa Mesmo Processo').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Valida Garantia "140 - T.A. Garantia Não Separa".
   */
  static addGarantNaoSep() {
    cy.contains('140 - T.A. Garantia Não Separa').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Valida Garantia "141 - T.A. Garantia Separa Processo Diferente".
   */
  static addGarantSepTituloProcDif() {
    cy.contains('141 - T.A. Garantia Separa Processo Diferente').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Valida Mão de Obra "142 - T.A. MO Destaca e Não Separa".
   */
  static addMODestNaoSepara() {
    cy.contains('142 - T.A. MO Destaca e Não Separa').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Valida Mão de Obra "143 - T.A. MO Não Destaca e Separa Mesmo Processo".
   */
  static addMONaoDestSepMesmoProc() {
    cy.contains('143 - T.A. MO Não Destaca e Separa Mesmo Processo').scrollIntoView().wait(200).should('be.visible');
  }

  /**
   * Valida Mão de Obra "144 - T.A. MO Não Destaca e Separa Processo Diferente".
   */
  static addMONaoDestSepProcDif() {
    cy.contains('144 - T.A. MO Não Destaca e Separa Processo Diferente').scrollIntoView().wait(200).should('be.visible');
  }
}