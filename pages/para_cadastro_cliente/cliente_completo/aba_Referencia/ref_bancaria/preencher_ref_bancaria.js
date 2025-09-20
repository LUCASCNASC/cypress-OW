import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarTelefoneAleatorio } from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada,
  gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria} from '../../../../gerarDadosPIX';

//Page Object para preenchimento dos campos de Referência Bancária.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillRefBanking {
  //Seleciona o banco "aaa".
  static bank() {
    cy.get('#txtBancoRefBanc').click();
    cy.contains('aaa').click();
  }

  //Preenche o campo Agência.
  static agency() {
    cy.get('#txtAgenciaRefBanc').type('341');
  }

  //Preenche o campo Conta.
  static account() {
    cy.get('#txtContaRefBanc').type('12345-1');
  }

  //Preenche o campo Data Abertura.
  static dateOpening() {
    cy.get('input.md-datepicker-input.md-input').type('30/09/2024');
  }

  //Seleciona "Sim" para boleto.
  static ticket() {
    cy.get('#txtBoletoRefBanc').click();
    cy.contains('Sim').click({ force: true });
  }

  //Preenche o campo Telefone.
  static phone() {
    const numero_telefone = gerarTelefoneAleatorio();
    cy.get('#txtTelefoneRefBanc').type(numero_telefone);
  }

  //Preenche o campo Gerente.
  static manager() {
    const NomeGerente = gerarNomeAleatorio();
    cy.get('#txtGerente').type(NomeGerente);
  }

  //Preenche o campo Email.
  static email() {
    const emailAleatorio = gerarEmailAleatorio();
    cy.get('#txtEmailRefBanc').type(emailAleatorio);
  }

  //Preenche o campo CPF/CNPJ do correntista.
  static cpfAccountHolder() {
    const cpf = gerarCpf();
    cy.get('#txtCpfCnpjRefBanc').should('be.visible').type(cpf, { force: true });
  }

  //Preenche o campo Nome do correntista.
  static nameAccountHolder() {
    const NomeCorrentista = gerarNomeAleatorio();
    cy.get('#txtNmCorrentRefBanc').type(NomeCorrentista);
  }

  //Seleciona o tipo de conta como Conta Corrente.
  static typeAccount() {
    cy.get('#txtTpContaRefBanc').click();
    cy.contains('div.md-text.ng-binding', 'Conta Corrente').click().click({ force: true });
  }

  //Preenche o campo Operação.
  static operation() {
    cy.get('#txtOperacaoRefBanc').type('1');
  }

  //Seleciona a forma de pagamento PIX.
  static formPayment() {
    cy.get('#txtFrmPag').click();
    cy.contains('div.md-text.ng-binding', 'PIX').click();
  }

  // PIX ERRADO tipo TELEFONE

  //Seleciona tipo de chave PIX Telefone.
  static typeKeyPixPhone() {
    cy.get('#txtIdTipoChavePix').click();
    cy.contains('div.md-text.ng-binding', 'Telefone').click();
  }

  //Preenche chave PIX telefone errada.
  static keyPixPhoneWrong() {
    const chave_pix_telefone_errada = gerarChavePixTelefoneErrada();
    cy.get('#txtChavePix').type(chave_pix_telefone_errada);
  }

  // PIX ERRADO tipo EMAIL

  //Seleciona tipo de chave PIX Email.
  static typeKeyPixEmail() {
    cy.get('#txtIdTipoChavePix').click();
    cy.contains('div.md-text.ng-binding', 'Email').click();
  }

  //Preenche chave PIX email errada.
  static keyPixEmailWrong() {
    const chave_pix_email_errada = gerarChavePixEmailErrada();
    cy.get('#txtChavePix').type(chave_pix_email_errada);
  }

  // PIX ERRADO tipo CPF CNPJ

  //Seleciona tipo de chave PIX CPF CNPJ.
  static typeKeyPixCpfCnpj() {
    cy.get('#txtIdTipoChavePix').click();
    cy.contains('div.md-text.ng-binding', 'CPF CNPJ').click();
  }

  //Preenche chave PIX CPF CNPJ errada.
  static keyPixCpfCnpjWrong() {
    const chave_pix_CpfCnpj_errada = gerarChavePixCpfCnpjErrada();
    cy.get('#txtChavePix').type(chave_pix_CpfCnpj_errada);
  }

  // PIX ERRADO tipo ALEATÓRIA

  //Seleciona tipo de chave PIX Aleatória.
  static typeKeyPixRandom() {
    cy.get('#txtIdTipoChavePix').click();
    cy.contains('div.md-text.ng-binding', 'Aleatória').click();
  }

  // PIX CHAVES CORRETAS

  //Preenche chave PIX telefone correta.
  static keyPixPhone() {
    const chave_pix_telefone = gerarChavePixTelefone();
    cy.get('#txtChavePix').scrollIntoView().wait(200);
    cy.get('#txtChavePix').clear().wait(200).should('have.value', '').wait(200).type(chave_pix_telefone);
  }

  //Preenche chave PIX email correta.
  static keyPixEmail() {
    const chave_pix_email = gerarChavePixEmail();
    cy.get('#txtChavePix').scrollIntoView().wait(200);
    cy.get('#txtChavePix').clear().wait(200).should('have.value', '').wait(200).type(chave_pix_email);
  }

  //Preenche chave PIX CPF correta.
  static keyPixCPF() {
    const chave_pix_cpf = gerarChavePixCPF();
    cy.get('#txtChavePix').scrollIntoView().wait(200);
    cy.get('#txtChavePix').clear().wait(200).should('have.value', '').wait(200).type(chave_pix_cpf);
  }

  //Preenche chave PIX Aleatória correta.
  static keyPixRandom() {
    const chave_pix_aleatoria = gerarChavePixAleatoria();
    cy.get('#txtChavePix').scrollIntoView().wait(200);
    cy.get('#txtChavePix').clear().wait(200).should('have.value', '').wait(200).type(chave_pix_aleatoria);
  }
}