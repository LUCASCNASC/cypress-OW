import { gerarTelefoneAleatorio } from '../../../gerarDados';

//Page Object para preenchimento dos campos de Telefone.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillRefPhone {
  //Seleciona o tipo de telefone "Padrão".
  static typePhone() {
    cy.get('#txtTpTel').click({ force: true });
    cy.get('.md-text.ng-binding').contains('Padrão').click({ force: true });
  }

  //Preenche o campo Número no cadastro de telefone.
  static numberPhone() {
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtNumTel').type(numero_telefone);
  }

  //Preenche o campo Ramal no cadastro de telefone.
  static ramalPhone() {
    const ramal_telefone = "435";
    cy.get('#txtRamalTel').type(ramal_telefone);
  }
}