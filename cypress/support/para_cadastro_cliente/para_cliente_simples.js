import { gerarCpf, gerarNomeAleatorio, gerarCNPJ, gerarTelefoneAleatorio, gerarEmailAleatorio, gerarNomeEmpresa }  from '../gerarDados';

//const cpf = gerarCpf(); // Gera um CPF válido
//const cnpj = gerarCNPJ(); // Gera um CNPJ válido

//Menu de opções
export function iconeMenuOpcoes (selector) {

    //Ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')
            
    //Clicar ni ícone do menu de opções
    cy.get('[aria-label="Menu de opções"] > .ng-binding')
        .click({force:true})
}

//Escolher opção cliente no menu de opções
export function opcaoClienteSimples (selector) {

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .should('have.attr', 'aria-label', 'Cliente')

    //Opção Cliente no menu de opções
    cy.get('a[aria-label="Cliente"]')
        .scrollIntoView()
        .click({force:true})
}

//Botão SALVAR, do cliente simples
export function salvarClienteSimples (selector) {

    //Botão SALVAR
    cy.get('.layout-align-end-center > .md-raised')
        .scrollIntoView()
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Clica no botão SALVAR
    cy.get('.layout-align-end-center > .md-raised')
        .click({force:true})
}

//Preencher campo CPF com CPF
export function prencherCPFcliente (selector) {

    const cpf = gerarCpf(); // Gera um CPF válido

    //Campo CPF - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCpf"]')
        .should('have.text', 'CPF')

    //Campo CPF 
    cy.get('#txtCpf')
        .should('be.visible')
        .and('have.value','')
        .type(cpf, {force: true})
}

//Preencher campo CNPJ com CNPJ
export function preencherCNPJcliente (selector) {

    const cnpj = gerarCNPJ(); // Gera um CNPJ válido

    //Campo CNPJ - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCNPJ"]')
        .should('have.text', 'CNPJ')

    //Campo CNPJ
    cy.get('#txtCNPJ')
        .should('be.visible')
        .and('have.value','')
        .type(cnpj, { force: true })
}

//Campo Nome completo - cliente CPF
export function preencherNomeCompletoCPF (selector) {

    const nomeCompleto = gerarNomeAleatorio();

    //Campo Nome Completo - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNomeCompleto"]')
        .should('have.text', 'Nome Completo')     

    //Campo Nome Completo
    cy.get('#txtNomeCompleto')
        .should('be.visible')
        .and('have.value','')
        .type(nomeCompleto, {force: true})
}

//Campo Nome completo - cliente CNPJ
export function preencherNomeCompletoCNPJ (selector) {

    const nomeCompletoEmpresa = gerarNomeEmpresa();

    //Campo CNPJ - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNomeCompleto"]')
        .should('have.text', 'Nome Completo')

    //Campo CNPJ
    cy.get('#txtNomeCompleto')
        .should('be.visible')
        .and('have.value','')
        .wait(200)
        .type(nomeCompletoEmpresa, { force: true })
}

//Campo CEP - inserir e pesquisar
export function inserirPesquisarCEP (selector) {

    const CEPcadastro = "87065300"

    //Campo CEP - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtCep"]')
        .should('have.text', 'CEP')   

    //Campo CEP
    cy.get('#txtCep')
        .scrollIntoView()
        .wait(200)
        .should('be.visible')
        .and('have.value','')
        .type(CEPcadastro, {force:true})

    //Lupa de pesquisa do CEP
    cy.get('.md-icon-float > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Clicar na lupa de pesquisa do CEP
    cy.get('.md-icon-float > .ng-binding')
        .click({force:true})
}

//Campo Número - validar e preencher
export function inserirNumeroEndereco (selector) {

    const numero_rendereco = '66'

    //Campo Número - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtNumero"]')
        .should('have.text', 'Número') 

    //Campo Número, do endereço
    cy.get('#txtNumero')
        .should('be.visible')
        .and('have.value','')
        .type(numero_rendereco, {force:true})
}

//Campo Data Nascimento - validar e preencher
export function preencherDataNascimento (selector) {

    //Ícone de data de nascimento
    cy.get(':nth-child(3) > .layout-xs-column > .md-block > .validaData > .md-datepicker-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo Data de nascimento - validando mensagem dentro do campo antes de preencher
    cy.get('label[aria-hidden="false"]')
        .should('have.text', 'Data de nascimento')     

    //Campo data de nascimento
    cy.get('input[ng-focus="ctrl.setFocused(true)"]')
        .should('be.visible')
        .and('have.value','')
        .wait(200)
        //.type("30/09/1998", {force:true})

    cy.contains('Data de nascimento').parent().find('input')
        .type("30/09/1998", {force:true})
}

//Botão arrastar para pessoa jurídica - arrastar e validar
export function arrastarPessoaJuridica (selector) {

    //Arrastar para Pessoa jurídica
    cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
        .should('be.visible')
        .and('contain',' Pessoa Física/Pessoa Júridica ')

    //Arrastar para Pessoa jurídica
    cy.get('.flex-md-100 > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//Selecionar sexo da pessoa física
export function sexoPessoaFisica (selector) {

    //Campo Sexo
    cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
        .scrollIntoView()
        .should('be.visible')
        .and('have.value','')

    //Campo Sexo - clicar
    cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
        .click({force:true})

    //Selecionar masculino
    cy.get('.md-text.ng-binding')
        .contains('Masculino')
        .click({force:true})
}

//Preenchendo rota do cadastro de cliente
export function cadastroRotaCliente (selector) {

    //Campo Código da rota - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="codigo_rota"]')
        .should('have.text', 'Código da rota') 

    cy.intercept('GET', '/views/carrinho/modalRotas.html').as('api_carrinho_modalRotas')
    //Preencher campo rota 1
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .should('be.visible')
        .and('have.value','')
        .type('1', {force:true})
    cy.wait('@api_carrinho_modalRotas', { timeout: 40000 })

    //Lupa do campo Rota 1
    cy.get('.rota-frete > .md-icon-right > .ng-binding')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Campo rota 2 - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="txtBuscaRotaModal"]')
        .should('have.text', 'Rota') 

    //Preencher campo rota 2
    cy.get('#txtBuscaRotaModal')
        .should('be.visible')
        .and('have.value','')
        .type('1', {force:true}, '{downarrow}')

    //Lupa do campo Rota 2
    cy.get('md-icon[aria-label="Pesquisar"]')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Clicar na lupa do campo Rota 2
    cy.get('md-icon[ng-click="pesquisar()"]')
        .click({force:true})
    
    //Escolher última informação da rota
    cy.get('v-pane-header.ng-scope > div')
        .click({force:true})
}

//Primeira mensagem de Registro salvo com sucesso!
export function mensagemPrimeiroRegistSalvoSucesso (selector) {

    //Card de mensagem de Registro salvo com sucesso!
    cy.get('.toast')
        .should('be.visible')

    //Card de mensagem de Registro salvo com sucesso! - Aviso
    cy.get('.toast-title')
        .should('be.visible')
        .and('have.text', 'Aviso')

    //Card de mensagem de Registro salvo com sucesso! - Registro salvo com sucesso!
    cy.get('.toast-message')
        .should('be.visible')
        .and('have.text', 'Registro salvo com sucesso!')
}

//logar no sistema novamente, para realizar as alterações no cadastro
export function logarNovamente (selector) {

     //Inserir Usuário para logar novamente
     cy.get('#txtusername')
        .type('sabium.automacao')

    //Inserir Senha para logar novamente
    cy.get('#txtpassword')
        .type('123.automacao')

    //Clicar no botão Entrar, para logar novamente
    cy.get('.test_btnSalvarCliente')
        .click({force:true})
}

//clicar para sair do sistema
export function clicarSairSistema (selector) {

    //Clicar no botão Sair
    cy.get('.rodape > ._md-button-wrap > div.md-button > .md-no-style')
        .click({force:true})
}

//validar e clicar em SIM na mensagem "Deseja visualizar este cadastro?", quando quero alterar data de nascimento de um cadastro de cliente simples
export function desejoVisualizarCadastro (selector) {

    //Mensagem se desejo visualizar o cadastro
    cy.get('.md-title')
        .should('be.visible')
        .and('contain', 'Este CPF / CNPJ já está cadastrado para')
        .and('contain', ', deseja visualizar este cadastro?')

    //Validar Não para se desejo visualizar este cadastro
    cy.get('.md-cancel-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled') 

    //Validar Sim para se desejo visualizar este cadastro
    cy.get('.md-confirm-button')
        .should('be.visible')
        .and('not.have.attr', 'disabled')

    //Clicar em Sim para se desejo visualizar este cadastro
    cy.get('.md-confirm-button')
        .click({force:true})
}