import {gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa,
  gerarRelacionamento, gerarObservação} from '../../../../gerarDados';

//Início exp. crédito
function gerarDataReferenciaFinanceira() {
  const dataInicio = new Date('2000-01-01');
  const dataAtual = new Date();
  const dataAleatoria = new Date(dataInicio.getTime() + Math.random() * (dataAtual.getTime() - dataInicio.getTime()));
  const dia = String(dataAleatoria.getDate()).padStart(2, '0');
  const mes = String(dataAleatoria.getMonth() + 1).padStart(2, '0');
  const ano = dataAleatoria.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

//Valor prestação
function gerarValorDuasCasasAposVirgula() {
  const valorInteiro = Math.floor(Math.random() * 900) + 100;
  const valorDecimal = (Math.random()).toFixed(2).substring(2);
  const valorFinal = `${valorInteiro}.${valorDecimal}`;
  return valorFinal;
}

//Page Object para preenchimento dos campos de Referência Financeira.
//Todos os métodos são estáticos para facilitar o uso direto.
export class FillRefFinance {
  //Preenche o campo Início exp. crédito.
  static dateStart() {
    const data_inicio = gerarDataReferenciaFinanceira();
    cy.contains('Início exp. crédito').parent().find('input').type(data_inicio);
  }

  //Preenche o campo Local Experiência.
  static localExp() {
    const local_experiencia = gerarNomeEmpresa();
    cy.get('#txtLocExp').type(local_experiencia);
  }

  //Preenche o campo Plano experiência.
  static flatExp() {
    const plano_experiencia = '444';
    cy.get('#txtPlExp').type(plano_experiencia);
  }

  //Preenche o campo Valor prestação.
  static valuePrest() {
    const valor_prestacao = gerarValorDuasCasasAposVirgula();
    cy.get('#txtVlrPrest').type(valor_prestacao);
  }
}