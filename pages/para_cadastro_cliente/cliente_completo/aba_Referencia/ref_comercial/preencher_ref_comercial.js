import {gerarEmailAleatorio, gerarTelefoneAleatorio, gerarNomeEmpresa, gerarObservação} from '../../../../gerarDados';

//Page Object para preenchimento dos campos de Referência Comercial.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillRefCommercial {
  //Preenche o campo Empresa.
  static enterprise() {
    const empresa = gerarNomeEmpresa();
    cy.get('#txtEmpresaRefCom').type(empresa);
  }

  //Preenche o campo Contato.
  static contact() {
    const contato = gerarTelefoneAleatorio();
    cy.get('#txtContatoRefCom').type(contato);
  }

  //Preenche o campo Telefone.
  static phone() {
    const telefone = gerarTelefoneAleatorio();
    cy.get('#txtTelefoneRefCom').type(telefone);
  }

  //Preenche o campo Email.
  static email() {
    const email = gerarEmailAleatorio();
    cy.get('#txtEmailRefCom').type(email);
  }

  //Preenche o campo Observação.
  static observation() {
    const observacao = gerarObservação();
    cy.get('#txtObsRefCom').type(observacao);
  }
}