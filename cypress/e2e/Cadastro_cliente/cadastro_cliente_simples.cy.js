import { iconeMenuOpcoes, opcaoClienteSimples, salvarClienteSimples, preencherNomeCompletoCPF, preencherNomeCompletoCNPJ, inserirPesquisarCEP, 
         preencherDataNascimento, inserirNumeroEndereco, arrastarPessoaJuridica, sexoPessoaFisica, cadastroRotaCliente, 
         mensagemPrimeiroRegistSalvoSucesso, prencherCPFcliente, preencherCNPJcliente, logarNovamente, clicarSairSistema,
         desejoVisualizarCadastro, autorizarTrialAlterarDataNascimento } from '../../support/para_cadastro_cliente/para_cliente_simples';
import { gerarCpf }  from '../../support/gerarDados';

//
//const cnpj = gerarCNPJ(); // Gera um CNPJ válido
const Numeroalteracao = '113'
const CEPalteracao = "87054320"
const numeroCPF = "117.415.410-18" //usado apenas no teste de adicionar pelo botão na pesquisa de cliente

describe('Cadastrar cliente simples', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })
  
    context('Cadastro de cliente simples', () => {

        it.skip('Cliente simples CPF', () => {

            iconeMenuOpcoes()
            opcaoClienteSimples()
            prencherCPFcliente()
            preencherNomeCompletoCPF()
            preencherDataNascimento()
            sexoPessoaFisica()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            // salvarClienteSimples()
            // mensagemPrimeiroRegistSalvoSucesso()
        })  

        it.skip('Cliente simples CPF - alterar Endereço logo após cadastrar', () => {
    
            iconeMenuOpcoes()
            opcaoClienteSimples()
            prencherCPFcliente()
            preencherNomeCompletoCPF()
            preencherDataNascimento()
            sexoPessoaFisica()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()

            iconeMenuOpcoes() // ALTERAÇÃO DE CLIENTE SIMPLES - CPF
            opcaoClienteSimples()

            //Campo CEP - alterar
            cy.get('#txtCep')
                .should('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type(CEPalteracao, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type(Numeroalteracao, {force:true})

            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })

        it.skip('Cliente simples CPF - alterar data de nascimento logo após cadastrar', () => {
    
            iconeMenuOpcoes()
            opcaoClienteSimples()
            prencherCPFcliente()
            preencherNomeCompletoCPF()
            preencherDataNascimento()
            sexoPessoaFisica()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
            cy.wait(2000)
            
            iconeMenuOpcoes() //ALTERAÇÃO DE CLIENTE SIMPLES - CPF
            opcaoClienteSimples()

            cy.contains('Data de nascimento').parent().find('input')
                .scrollIntoView()
                .wait(200)

            //Alteração - Campo data de nascimento
            cy.contains('Data de nascimento').parent().find('input')
                .should('be.visible')
                .clear()
                .should('have.value','')
                .type("10/10/1990", {force:true})

            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })  

        it.skip('Cliente simples CPF - alterar data de nascimento (deve pedir trial)', () => {

            const cpf = gerarCpf(); // Gera um CPF válido
    
            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

            //Campo CPF 
            cy.get('#txtCpf')
                .should('be.visible')
                .and('have.value','')
                .type(cpf, {force: true})

            //Copiar cpf colocado no campo
            cy.get('#txtCpf')
                .then((value) => {
                    cy.log(`Valor copiado: ${cpf}`); // Exibe o valor no log
                    // Aqui você pode usar 'value' como precisar
                });

            preencherNomeCompletoCPF()
            preencherDataNascimento()
            sexoPessoaFisica()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
            cy.wait(1000)

            opcaoClienteSimples()
            clicarSairSistema()
            cy.wait(2000)

            logarNovamente()
            cy.wait(5000)

            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Preencher campo CPF - para alterar o cadastro que acabamos de gerar
            cy.get('#txtCpf')
                .type(`${cpf}`, { force: true }); //Inserindo CPF no campo "INFORME O CLIENTE"


            // ALTERAR DATA DE NASCIMENTO 

            //Clicar no campo Data de nascimento para aparecer a mensagem se desejo visualizar este cadastro
            cy.contains('Data de nascimento').parent().find('input')
                .click()

            cy.wait (1000)

            desejoVisualizarCadastro()

            cy.wait(2500)

            //Clicar na data que desejo, 29/09/1998
            cy.contains('Data de nascimento').parent().find('input')
                .should('be.visible')
                .and('have.value','30/09/1998')
                .wait(200)
                .clear()
                .wait(200)
                .type("29/09/1997")

            salvarClienteSimples()
            cy.wait(1000)

            // salvarClienteSimples()
            // cy.wait(3000)

            autorizarTrialAlterarDataNascimento()

            // cy.wait(1000)
            // mensagemPrimeiroRegistSalvoSucesso()
        })

        it.skip('Cliente simples CPF - alterar tipo de sexo', () => {

            const cpf = gerarCpf(); // Gera um CPF válido

            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Campo CPF - validando mensagem dentro do campo antes de preencher
            cy.get('label[for="txtCpf"]')
                .should('have.text', 'CPF')

            //Campo CPF 
            cy.get('#txtCpf')
                .should('be.visible')
                .and('have.value','')
                .type(cpf, {force: true})

            //Copiar cpf colocado no campo
            cy.get('#txtCpf')
                .then((value) => {
                    cy.log(`Valor copiado: ${cpf}`); // Exibe o valor no log
                    // Aqui você pode usar 'value' como precisar
                });

            preencherNomeCompletoCPF() //NOME CLIENTE
            preencherDataNascimento()
            sexoPessoaFisica()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
            cy.wait(1000)
            iconeMenuOpcoes() //ABRIR MODAL
            clicarSairSistema()
            cy.wait(2000)
            logarNovamente() 
            cy.wait(5000)
            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Preencher campo CPF - para alterar o cadastro que acabamos de gerar
            cy.get('#txtCpf')
                .type(`${cpf}`, {force: true}) //Inserindo CPF no campo "INFORME O CLIENTE"
                .wait(200)

            //clicando em qualquer elemento para ver o cadastro
            cy.get('.cliente-endereco > .padding-5 > :nth-child(1)')
                .click({force: true})
                .wait(1000)

            desejoVisualizarCadastro()
            cy.wait(3000)

            // ALTERAR SEXO 

            //Campo Sexo - clicar
            cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
                .click({force:true})

            //Selecionar feminino
            cy.get('.md-text.ng-binding')
                .contains('Feminino')
                .click()

            cy.wait(1000)

            //Clicar para abrir a modificação
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button')
                .click()

            cy.wait(200)
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })

        it.skip('Cliente simples CNPJ', () => {
    
            iconeMenuOpcoes()
            opcaoClienteSimples()
            arrastarPessoaJuridica()
            preencherCNPJcliente()
            preencherNomeCompletoCNPJ()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })

        it.skip('Cliente simples CNPJ - alterar Endereço', () => {

            iconeMenuOpcoes()
            opcaoClienteSimples()
            arrastarPessoaJuridica()
            preencherCNPJcliente()
            preencherNomeCompletoCNPJ()
            inserirPesquisarCEP()
            inserirNumeroEndereco()
            cadastroRotaCliente()
            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
            
            iconeMenuOpcoes() //ALTERAÇÃO DE CLIENTE SIMPLES - CPF
            opcaoClienteSimples()

            //Campo CEP - alterar
            cy.get('#txtCep')
                .should('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type(CEPalteracao, {force:true})

            //Lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            //Clicar na lupa de pesquisa do CEP
            cy.get('.md-icon-float > .ng-binding')
                .click({force:true})

            //Campo Número, do endereço
            cy.get('#txtNumero')
                .should('be.visible')
                .clear({force:true})
                .and('have.value','')
                .type(Numeroalteracao, {force:true})

            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })
    })

    context('Botão de adicionar cliente, na pesquisa de cliente', () => {

        it.skip('Botão de adicionar cliente, na pesquisa de cliente', () => {
        
            //inserir CPF/CNPJ no campo de cliente para podermos pesquisar pela lupa
            cy.get('.click-cliente > .informe-o-cliente > .cliente-header')
                .wait(800)
                .type(numeroCPF,'{downArrow}')

            cy.wait(800)

            //clicar na lupa de pesquisa de clientes
            cy.get('.md-block > .ng-binding')
                .should('be.visible')
                .click()

            cy.wait(2000)

            //Card inteiro de Clientes
            cy.get('.md-dialog-fullscreen')
                .should('be.visible')

            //Card de clientes - Título Clientes
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .flex')
                .should('be.visible')
                .and('have.text', 'Clientes')

            //Card de clientes - Botão X
            cy.get('.md-dialog-fullscreen > ._md-toolbar-transitions > .md-toolbar-tools > .md-icon-button > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

                //Card de clientes - Texto Digite o nome ou o CPF do cliente para busca
            cy.get('label[for="txtBuscaClienteModal"]')
                .should('have.text', 'Digite o nome ou o CPF do cliente para busca')
                .and('be.visible')

            //Card de clientes - Botão de cadastrar novo cliente
            cy.get('[ng-click="novoCliente()"] > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - Botão comando de voz
            cy.get('[ng-click="capturarVozCliente()"] > .ng-binding')
                .should('be.visible')
                .and('not.have.attr', 'disabled')

            //Card de clientes - campo para digitar cliente
            cy.get('#txtBuscaClienteModal')
                .should('be.visible')
                .invoke('val')
                .should('not.be.empty')

            //Card de clientes - Clicar no botão de cadastrar novo cliente
            cy.get('[ng-click="novoCliente()"] > .ng-binding')
                .click({force:true})

            //Tela de Cadastro de Cliente - botão CLIENTE - validar se realmente redirecionou para lá
            cy.get('.md-default')
                .should('be.visible')
                .and('not.have.attr', 'disabled')
        })
    })
})