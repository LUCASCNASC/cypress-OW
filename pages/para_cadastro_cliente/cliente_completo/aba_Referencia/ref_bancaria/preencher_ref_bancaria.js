import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada, 
         gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria } from '../../../../gerarDadosPIX'

export class FillRefBanking {

    constructor(page) {
        this.page = page
    }

    //referencia bancaria - escolher banco
    async bank (selector) {

        //clicar para abrir as opções
        cy.get('#txtBancoRefBanc')
            .click()
        
        //selecionar a primeira opção 
        cy.contains('aaa')
            .click()
    }

    //referencia bancaria - escolher Agencia
    async agency (selector) {

        //clicar para abrir as opções
        cy.get('#txtAgenciaRefBanc')
            .type('341')
    }

    //referencia bancaria - escolher Conta
    async account (selector) {

        //clicar para abrir as opções
        cy.get('#txtContaRefBanc')
            .type('12345-1')
    }

    //referencia bancaria - escolher Data Abertura
    async dateOpening (selector) {

        //clicar para abrir as opções
        cy.get('input.md-datepicker-input.md-input')
            .type('30/09/2024')
    }

    //referencia bancaria - escolher Boleto
    async ticket (selector) {

        //clicar para abrir as opções
        cy.get('#txtBoletoRefBanc')
            .click()

        //selecionar "Sim"
        cy.contains('Sim')
            .click({force:true})
    }

    //referencia bancaria - escolher Telefone
    async phone (selector) {

        const numero_telefone = gerarTelefoneAleatorio();

        //clicar para abrir as opções
        cy.get('#txtTelefoneRefBanc')
            .type(numero_telefone)
    }

    //referencia bancaria - escolher Gerente
    async manager (selector) {

        const NomeGerente = gerarNomeAleatorio(); // Gera um CPF válido

        //clicar para abrir as opções
        cy.get('#txtGerente')
            .type(NomeGerente)
    }

    //referencia bancaria - escolher Email
    async email (selector) {

        const emailAleatorio = gerarEmailAleatorio();

        //clicar para abrir as opções
        cy.get('#txtEmailRefBanc')
            .type(emailAleatorio)
    }

    //referencia bancaria - escolher CPF/CNPJ correntista
    async cpfAccountHolder (select) {

        const cpf = gerarCpf(); // Gera um CPF válido

        //Campo CPF 
        cy.get('#txtCpfCnpjRefBanc')
            .should('be.visible')
            .type(cpf, {force: true})
    }

    //referencia bancaria - escolher Nome do correntista
    async nameAccountHolder (selector) {

        const NomeCorrentista = gerarNomeAleatorio(); 

        //clicar para abrir as opções
        cy.get('#txtNmCorrentRefBanc')
            .type(NomeCorrentista)
    }

    //referencia bancaria - escolher Tipo de conta
    async typeAccount (selector) {

        //abrir opções de tipo de conta
        cy.get('#txtTpContaRefBanc')
            .click()

        //clicar para selecionar uma conta corrente
        cy.contains('div.md-text.ng-binding', 'Conta Corrente').click()
            .click({force:true})
    }

    //referencia bancaria - escolher Operação
    async operation (selector) {

        //inserir Operação
        cy.get('#txtOperacaoRefBanc')
            .type('1')
    }

    //referencia bancaria - escolher Forma de pagamento
    async formPayment (selector) {

        //clicar para abrir opções de forma de pagamento
        cy.get('#txtFrmPag')
            .click()

        //clicar na opção PIX
        cy.contains('div.md-text.ng-binding', 'PIX')
            .click()
    }

    //------------ PIX ERRADO tipo TELEFONE - 

    //referencia bancaria - escolher Tipo chave PIX Telefone
    async typeKeyPixPhone (selector) {

        //clicar para abrir opções de Tipo chave PIX
        cy.get('#txtIdTipoChavePix')
            .click()

        //clicar na opção Telefone
        cy.contains('div.md-text.ng-binding', 'Telefone')
            .click()
    }

    //gerar chave pix tipo telefone errada
    async keyPixPhoneWrong (selector) {

        const chave_pix_telefone_errada = gerarChavePixTelefoneErrada();

        //inserir chave PIX
        cy.get('#txtChavePix')
            .type(chave_pix_telefone_errada)
    }

    //------------ PIX ERRADO tipo EMAIL

    //referencia bancaria - escolher Tipo chave PIX Email
    async typeKeyPixEmail (selector) {

        //clicar para abrir opções de Tipo chave PIX Email
        cy.get('#txtIdTipoChavePix')
            .click()

        //clicar na opção Email 
        cy.contains('div.md-text.ng-binding', 'Email')
            .click()
    }

    //gerar chave pix tipo email errada
    async keyPixEmailWrong (selector) {

        const chave_pix_email_errada = gerarChavePixEmailErrada();

        //inserir chave PIX
        cy.get('#txtChavePix')
            .type(chave_pix_email_errada)
    }

    //------------ PIX ERRADO tipo CPF CNPJ

    //referencia bancaria - escolher Tipo chave Cpf Cnpj Email
    async typeKeyPixCpfCnpj (selector) {

        //clicar para abrir opções de Tipo chave CPF CNPJ
        cy.get('#txtIdTipoChavePix')
            .click()

        //clicar na opção CPF CNPJ 
        cy.contains('div.md-text.ng-binding', 'CPF CNPJ')
            .click()
    }

    //gerar chave pix tipo CPF CNPJ errada
    async keyPixCpfCnpjWrong (selector) {

        const chave_pix_CpfCnpj_errada = gerarChavePixCpfCnpjErrada();

        //inserir chave PIX
        cy.get('#txtChavePix')
            .type(chave_pix_CpfCnpj_errada)
    }

    //------------ PIX ERRADO tipo Aletória

    //referencia bancaria - escolher Tipo chave Aletória Email
    async typeKeyPixRandom (selector) {

        //clicar para abrir opções de Tipo chave Aletória
        cy.get('#txtIdTipoChavePix')
            .click()

        //clicar na opção Aletória 
        cy.contains('div.md-text.ng-binding', 'Aleatória')
            .click()
    }

    //------------ PIX CHAVES CORRETAS

    //gerar chave pix tipo telefone correta
    async keyPixPhone (selector) {

        const chave_pix_telefone = gerarChavePixTelefone();

        cy.get('#txtChavePix')
            .scrollIntoView()
            .wait(200)

        //inserir chave PIX
        cy.get('#txtChavePix')
            .clear()
            .wait(200)
            .should('have.value', '')
            .wait(200)
            .type(chave_pix_telefone)
    }

    //gerar chave pix tipo email correta
    async keyPixEmail (selector) {

        const chave_pix_email = gerarChavePixEmail();

        cy.get('#txtChavePix')
            .scrollIntoView()
            .wait(200)

        //inserir chave PIX
        cy.get('#txtChavePix')
            .clear()
            .wait(200)
            .should('have.value', '')
            .wait(200)
            .type(chave_pix_email)
    }

    //gerar chave pix tipo CPF correta
    async keyPixCPF (selector) {

        const chave_pix_cpf = gerarChavePixCPF();

        cy.get('#txtChavePix')
            .scrollIntoView()
            .wait(200)

        //inserir chave PIX
        cy.get('#txtChavePix')
            .clear()
            .wait(200)
            .should('have.value', '')
            .wait(200)
            .type(chave_pix_cpf)
    }

    //gerar chave pix tipo Aleatorio correta
    async keyPixRandom (selector) {

        const chave_pix_aleatoria = gerarChavePixAleatoria();

        cy.get('#txtChavePix')
            .scrollIntoView()
            .wait(200)

        //inserir chave PIX
        cy.get('#txtChavePix')
            .clear()
            .wait(200)
            .should('have.value', '')
            .wait(200)
            .type(chave_pix_aleatoria)
    } 
}