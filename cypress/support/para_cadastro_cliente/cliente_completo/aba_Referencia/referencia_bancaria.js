import { gerarCpf, gerarNomeAleatorio, gerarEmailAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarNomeEmpresa }  from '../../../gerarDados';
import { gerarChavePixTelefone, gerarChavePixTelefoneErrada, gerarChavePixEmailErrada, gerarChavePixCpfCnpjErrada, 
         gerarChavePixEmail, gerarChavePixCPF, gerarChavePixAleatoria } from '../../../gerarDadosPIX'


//--------REFERENCIAS - REFERENCIA BANCÁRIA -------



//validar e clicar na aba Bancária, dentro de Referencias
export function clicarAbaRefBancaria (selector) {

    //validando botão Bancária
    cy.get('#menu_items_sec > :nth-child(3)')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('have.text', 'Bancária')

    cy.intercept('GET', '/views/cliente/refEtapaBancariaLista.html').as('api_ref_bancaria')
    //clicando botão Bancária
    cy.get('#menu_items_sec > :nth-child(3)')
        .click()
    cy.wait('@api_ref_bancaria', { timeout: 40000 })
}

//validando informações da tela antes de adicionar qualquer coisa
export function validarAbaRefBancariaVazia (selector) {

    //validando título quando entramos na aba
    cy.get('h3')
        .should('be.visible')
        .and('have.text', 'Referências / Bancária')

    //validando botão +
    cy.get('.layout-align-end-end > .md-fab')
        .should('be.visible')  
        .and('not.have.attr', 'disabled')

    //mensagem quando não tem nada adicionado na aba
    cy.get('.text-align-center')
        .should('be.visible')
        .and('have.text', 'Não foi encontrado nenhum registro')

    cy.get('.btn')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
        //.and('contain', 'SALVAR')
}

//clicar no botão + para adicionar uma nova referencia bancária
export function clicarAddNovaRefBancaria (selector) {

    cy.intercept('GET', '/views/cliente/modalClienteRefBancaria.html').as('api_modal_referencia_bancaria')
    cy.get('.layout-align-end-end > .md-fab')
        .click()
    cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 })
}

//validar informações do modal Referencia Bancária antes de preencher as informações
export function modalRefBancariaVazio (selector) {

    //título modal 
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
        .should('be.visible')
        .and('have.text', 'Referência bancária')

    //botão X
    cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //campo Banco
    cy.get('#txtBancoRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Banco
    cy.get('label[for="txtBancoRefBanc"]')
        .should('have.text', 'Banco')

    //campo Agencia
    cy.get('#txtAgenciaRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Agencia
    cy.get('label[for="txtAgenciaRefBanc"]')
        .should('have.text', 'Agência')

    //campo Conta
    cy.get('#txtContaRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Conta
    cy.get('label[for="txtContaRefBanc"]')
        .should('have.text', 'Conta')

    //ícone calendário
    cy.get('.md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //campo Data Abertura
    cy.get('input.md-datepicker-input.md-input')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação Data Abertura
    // cy.get('div[class="md-datepicker-input-container"]')
    //     .should('have.text', 'Data Abertura')

    //campo Boleto
    cy.get('#txtBoletoRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')
        
    //informação campo Boleto
    cy.get('label[for="txtBoletoRefBanc"]')
        .should('have.text', 'Boleto')

    //campo Telefone
    cy.get('#txtTelefoneRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Telefone
    cy.get('label[for="txtTelefoneRefBanc"]')
        .should('have.text', 'Telefone')

    //campo Gerente
    cy.get('#txtGerente')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Gerente
    cy.get('label[for="txtGerente"]')
        .should('have.text', 'Gerente')

    //campo Email
    cy.get('#txtEmailRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Gerente
    cy.get('label[for="txtEmailRefBanc"]')
        .should('have.text', 'Email')

    //campo CPF/CNPJ correntista
    cy.get('#txtCpfCnpjRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo CPF/CNPJ correntista
    cy.get('label[for="txtCpfCnpjRefBanc"]')
        .should('have.text', 'CPF/CNPJ correntista')

    //campo Nome do correntista
    cy.get('#txtNmCorrentRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação do campo Nome do correntista
    cy.get('label[for="txtNmCorrentRefBanc"]')
        .should('have.text', 'Nome do correntista')

    //campo Tipo de conta
    cy.get('#txtTpContaRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Tipo de conta
    cy.get('label[for="txtTpContaRefBanc"]')
        .should('have.text', 'Tipo de conta')

    //campo Operação
    cy.get('#txtOperacaoRefBanc')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //nformação Operação
    cy.get('label[for="txtOperacaoRefBanc"]')
        .should('have.text', 'Operação')

    //campo Forma de pagamento
    cy.get('#txtFrmPag')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação Forma de pagamento
    cy.get('label[for="txtFrmPag"]')
        .should('have.text', 'Forma de pagamento')

    //campo Tipo chave PIX
    cy.get('#txtIdTipoChavePix')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Tipo chave PIX
    cy.get('label[for="txtIdTipoChavePix"]')
        .should('have.text', 'Tipo chave PIX')

    //campo Chave PIX
    cy.get('#txtChavePix')
        .should('be.visible')
        .and('have.value', '')
        .and('not.have.attr', 'disabled')

    //informação campo Chave PIX
    cy.get('label[for="txtChavePix"]')
        .should('have.text', 'Chave PIX')

    //validar botão SALVAR, desabilitado
    cy.get('#btnModalAddRefPessoal')
        //.should('be.visible')
        .should('have.attr', 'disabled')
}

//referencia bancaria - escolher banco
export function selectBancoRefBancaria (selector) {

    //clicar para abrir as opções
    cy.get('#txtBancoRefBanc')
        .click()
    
    //selecionar a primeira opção 
    cy.contains('aaa')
        .click()
}

//referencia bancaria - escolher Agencia
export function selectAgenciaRefBancaria (selector) {

    //clicar para abrir as opções
    cy.get('#txtAgenciaRefBanc')
        .type('341')
}

//referencia bancaria - escolher Conta
export function selectContaRefBancaria (selector) {

    //clicar para abrir as opções
    cy.get('#txtContaRefBanc')
        .type('12345-1')
}

//referencia bancaria - escolher Data Abertura
export function selectDataAberturaRefBancaria (selector) {

    //clicar para abrir as opções
    cy.get('input.md-datepicker-input.md-input')
        .type('30/09/2024')
}

//referencia bancaria - escolher Boleto
export function selectBoletoRefBancaria (selector) {

    //clicar para abrir as opções
    cy.get('#txtBoletoRefBanc')
        .click()

    //selecionar "Sim"
    cy.contains('Sim')
        .click({force:true})
}

//referencia bancaria - escolher Telefone
export function selectTelefoneRefBancaria (selector) {

    const numero_telefone = gerarTelefoneAleatorio();

    //clicar para abrir as opções
    cy.get('#txtTelefoneRefBanc')
        .type(numero_telefone)
}

//referencia bancaria - escolher Gerente
export function selectGerenteRefBancaria (selector) {

    const NomeGerente = gerarNomeAleatorio(); // Gera um CPF válido

    //clicar para abrir as opções
    cy.get('#txtGerente')
        .type(NomeGerente)
}

//referencia bancaria - escolher Email
export function selectEmailRefBancaria (selector) {

    const emailAleatorio = gerarEmailAleatorio();

    //clicar para abrir as opções
    cy.get('#txtEmailRefBanc')
        .type(emailAleatorio)
}

//referencia bancaria - escolher CPF/CNPJ correntista
export function selectCPFCorrentistaRefBancaria (select) {

    const cpf = gerarCpf(); // Gera um CPF válido

    //Campo CPF 
    cy.get('#txtCpfCnpjRefBanc')
        .should('be.visible')
        .type(cpf, {force: true})
}

//referencia bancaria - escolher Nome do correntista
export function selectNomeCorrentistaRefBancaria (selector) {

    const NomeCorrentista = gerarNomeAleatorio(); 

    //clicar para abrir as opções
    cy.get('#txtNmCorrentRefBanc')
        .type(NomeCorrentista)
}

//referencia bancaria - escolher Tipo de conta
export function selectTipoContaRefBancaria (selector) {

    //abrir opções de tipo de conta
    cy.get('#txtTpContaRefBanc')
        .click()

    //clicar para selecionar uma conta corrente
    cy.contains('div.md-text.ng-binding', 'Conta Corrente').click()
        .click({force:true})
}

//referencia bancaria - escolher Operação
export function selectOperacaoRefBancaria (selector) {

    //inserir Operação
    cy.get('#txtOperacaoRefBanc')
        .type('1')
}

//referencia bancaria - escolher Forma de pagamento
export function selectFormaPagamentoRefBancaria (selector) {

    //clicar para abrir opções de forma de pagamento
    cy.get('#txtFrmPag')
        .click()

    //clicar na opção PIX
    cy.contains('div.md-text.ng-binding', 'PIX')
        .click()
}

//referencia bancaria - escolher Chave PIX
export function selectChavePixTefefoneRefBancaria (selector) {

    const chave_pix_telefone = gerarChavePixTelefone();

    //inserir chave PIX
    cy.get('#txtChavePix')
        .type(chave_pix_telefone)
}

//clicar para salvar Referencia Bancaria
export function clicarSalvarRefBancaria (selector) {

    cy.contains('button', 'Salvar')
        .should('be.visible')

    //validando botão salvar habilitado
    cy.get('#btnModalAddRefPessoal')
        .should('be.visible')
        .and('not.have.attr', 'disabled') 

    //clicar no botão SALVAR
    cy.get('#btnModalAddRefPessoal')   
        .click()
}

// validando mensagem Referencia Bancária incluída com sucesso Incluído com sucesso, após incluírmos a Referencia Bancária
export function messRefBancariaIncluidaSucesso (selector) {

    //Card Endereço incluído com sucesso.
    cy.get('.toast-success')
        .should('be.visible')

    //Card Endereço incluído com sucesso. - Aviso
    cy.get('.toast-success > .toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card Endereço incluído com sucesso. - Endereço incluído com sucesso.
    cy.get('.toast-success > .toast-message')
        .should('be.visible')
        .and('have.text', 'Referência Bancária incluída com sucesso.')
}

//validando informações que foram adicionadas no cadastro de referencia bancária
export function infosRefBancariaAdicionada (selector) {

    //Card de endereço adicionado
    cy.get('.md-whiteframe-2dp')
        .should('be.visible')
        .and('contain', 'aaa')
        .and('contain', 'Agencia:')
        .and('contain', 'Conta:')
}


//------------ PIX ERRADO tipo TELEFONE - 

//referencia bancaria - escolher Tipo chave PIX Telefone
export function selectTipoChavePixTelefoneRefBancaria (selector) {

    //clicar para abrir opções de Tipo chave PIX
    cy.get('#txtIdTipoChavePix')
        .click()

    //clicar na opção Telefone
    cy.contains('div.md-text.ng-binding', 'Telefone')
        .click()
}

//gerar chave pix tipo telefone errada
export function selectChavePixTelefoneErrada (selector) {

    const chave_pix_telefone_errada = gerarChavePixTelefoneErrada();

    //inserir chave PIX
    cy.get('#txtChavePix')
        .type(chave_pix_telefone_errada)
}

// validando mensagem de chave pix telefone inválida, após tentarmos inserir uma chave pix telefone fora do padrão
export function messRefBancariaChavePixTelefoneInvalida (selector) {

    //Card Erro identificado
    cy.get('.toast-error > .toast-title')
        .should('be.visible')

    //Card Endereço Erro identificado - Aviso
    cy.get('.toast-error > .toast-title')
        .should('be.visible')
        .and('have.text', 'Erro identificado')

    //Card Erro identificado -  mensagem
    cy.get('.toast-error > .toast-message')
        .should('be.visible')
        .and('have.text', 'Chave Pix Telefone não informada ou inválida. Deve conter o DDD (2 digitos) mais o número do celular (9 dígitos). Informar somente números')
}

//------------ PIX ERRADO tipo EMAIL

//referencia bancaria - escolher Tipo chave PIX Email
export function selectTipoChavePixEmailRefBancaria (selector) {

    //clicar para abrir opções de Tipo chave PIX Email
    cy.get('#txtIdTipoChavePix')
        .click()

    //clicar na opção Email 
    cy.contains('div.md-text.ng-binding', 'Email')
        .click()
}

//gerar chave pix tipo email errada
export function selectChavePixEmailErrada (selector) {

    const chave_pix_email_errada = gerarChavePixEmailErrada();

    //inserir chave PIX
    cy.get('#txtChavePix')
        .type(chave_pix_email_errada)
}

// validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix email fora do padrão
export function messRefBancariaChavePixEmailInvalida (selector) {

    //Card Erro identificado
    cy.get('.toast-error > .toast-title')
        .should('be.visible')

    //Card Endereço Erro identificado - Aviso
    cy.get('.toast-error > .toast-title')
        .should('be.visible')
        .and('have.text', 'Erro identificado')

    //Card Erro identificado -  mensagem
    cy.get('.toast-error > .toast-message')
        .should('be.visible')
        .and('have.text', 'Chave Pix E-Mail não informada ou inválida.')
}

//------------ PIX ERRADO tipo CPF CNPJ

//referencia bancaria - escolher Tipo chave Cpf Cnpj Email
export function selectTipoChavePixCpfCnpjRefBancaria (selector) {

    //clicar para abrir opções de Tipo chave CPF CNPJ
    cy.get('#txtIdTipoChavePix')
        .click()

    //clicar na opção CPF CNPJ 
    cy.contains('div.md-text.ng-binding', 'CPF CNPJ')
        .click()
}

//gerar chave pix tipo CPF CNPJ errada
export function selectChavePixCpfCnpjErrada (selector) {

    const chave_pix_CpfCnpj_errada = gerarChavePixCpfCnpjErrada();

    //inserir chave PIX
    cy.get('#txtChavePix')
        .type(chave_pix_CpfCnpj_errada)
}

// validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix CPF CNPJ fora do padrão
export function messRefBancariaChavePixCpfCnpjInvalida (selector) {

    //Card Erro identificado
    cy.get('.toast-error > .toast-title')
        .should('be.visible')

    //Card Endereço Erro identificado - Aviso
    cy.get('.toast-error > .toast-title')
        .should('be.visible')
        .and('have.text', 'Erro identificado')

    //Card Erro identificado -  mensagem
    cy.get('.toast-error > .toast-message')
        .should('be.visible')
        .and('have.text', 'Chave Pix CPF/CNPJ não informada ou inválida. Deve conter um CPF ou CNPJ válido. Informar somente números.')
}

//------------ PIX ERRADO tipo Aletória

//referencia bancaria - escolher Tipo chave Aletória Email
export function selectTipoChavePixAletoriaRefBancaria (selector) {

    //clicar para abrir opções de Tipo chave Aletória
    cy.get('#txtIdTipoChavePix')
        .click()

    //clicar na opção Aletória 
    cy.contains('div.md-text.ng-binding', 'Aleatória')
        .click()
}

// validando mensagem de chave pix email inválida, após tentarmos inserir uma chave pix Aletória fora do padrão
export function messRefBancariaChavePixAletoriaInvalida (selector) {

    //Card Erro identificado
    cy.get('.toast-error > .toast-title')
        .should('be.visible')

    //Card Endereço Erro identificado - Aviso
    cy.get('.toast-error > .toast-title')
        .should('be.visible')
        .and('have.text', 'Erro identificado')

    //Card Erro identificado -  mensagem
    cy.get('.toast-error > .toast-message')
        .should('be.visible')
        .and('have.text', 'Chave Pix Aleatória não informada ou inválida. A chave aleatória deve ser informada com os traços que separa cada conjunto da chave aleatória, ao todo são 4 traços.')
}


//---------------------

//arrastar referencia bancaria para fazer a edição
export function arrastarEditarRefBancaria (selector) {
    
    cy.get('.md-whiteframe-2dp')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 100, clientY: 0 }) // Ajuste clientX para a posição desejada
        .trigger('mouseup')
}

//clicar no lápis para editar referencia bancária
export function clicarEditarRefBancaria (selector) {

    //ícone lápis
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised > .ng-binding')
        .should('be.visible')

    //botão inteiro
    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    cy.get('.btn-remove-item-list > :nth-child(1) > .md-raised')
        .click({force:true})

    cy.intercept('GET', '/services/v3/forma_pagamento').as('api_modal_referencia_bancaria')
    cy.wait('@api_modal_referencia_bancaria', { timeout: 40000 })
}

//gerar chave pix tipo telefone correta
export function selectChavePixTelefone (selector) {

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
export function selectChavePixEmail (selector) {

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
export function selectChavePixCPF (selector) {

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
export function selectChavePixAleatorio (selector) {

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