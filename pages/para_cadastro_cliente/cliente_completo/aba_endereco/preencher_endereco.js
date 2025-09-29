//Page Object para preenchimento de campos do endereço.
//Todos os métodos são estáticos para facilitar o uso sem instanciação.
export class FillAdress {
  //Seleciona o tipo de endereço "Padrão".
  static typeAdress() {
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });
  }

  //Preenche o campo CEP no cadastro de endereço e pesquisa.
  static cepAdress() {
    const CEPcadastro = "87065300";
    cy.get('#txtCepEndereco').type(CEPcadastro, { force: true });
    cy.get('.md-icon-float > .ng-binding').should('be.visible');
    cy.intercept('GET', '/services/v3/cidade?uf=PR').as('api_cidade');
    cy.get('.md-icon-float > .ng-binding').click({ force: true });
    cy.wait('@api_cidade', { timeout: 40000 });
  }

  //Preenche o campo Número no cadastro de endereço.
  static numberAdress() {
    const numero_endereco = "66";
    cy.get('#txtNumEndereco').type(numero_endereco, { force: true });
  }
}