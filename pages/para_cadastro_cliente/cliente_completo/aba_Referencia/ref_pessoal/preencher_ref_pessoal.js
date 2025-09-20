import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada } from '../../../../gerarDadosPIX';

//Page Object para preenchimento dos campos de Referência Pessoal.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillRefGuys {
  //Preenche o campo Nome.
  static name() {
    const Nome = gerarNomeAleatorio();
    cy.get('#txtNomeRefPes').type(Nome);
  }

  //Preenche o campo Email.
  static email() {
    const email = gerarEmailAleatorio();
    cy.get('#txtEmailRefPes').type(email);
  }

  //Preenche o campo Telefone.
  static phone() {
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtTelefoneRefPes').type(numero_telefone);
  }

  //Preenche o campo Relacionamento.
  static relationship() {
    const relacionamento = gerarRelacionamento();
    cy.get('#txtRelacionamentoRefPes').type(relacionamento);
  }
}