import { iconeMenuOpcoes, opcaoClienteSimples, salvarClienteSimples, preencherNomeCompletoCPF, preencherNomeCompletoCNPJ, inserirPesquisarCEP, 
         preencherDataNascimento, inserirNumeroEndereco, arrastarPessoaJuridica, sexoPessoaFisica, cadastroRotaCliente, 
         mensagemPrimeiroRegistSalvoSucesso, prencherCPFcliente, preencherCNPJcliente, logarNovamente } from '../../support/para_cadastro_cliente/para_cliente_simples';
import gerarCpf from '../../support/gerarCPF';
import gerarCNPJ from '../../support/gerarCNPJ';

const cpf = gerarCpf(); // Gera um CPF válido
const cnpj = gerarCNPJ(); // Gera um CNPJ válido
const Numeroalteracao = '113'
const CEPalteracao = "87054320"
const idSupervisorTrial = "393"
const nomeSupervidorTrial = "T.A. USUÁRIO AUTOMAÇÃO"
const senhaSupervisor = "123.automacao"
const numeroCPF = "117.415.410-18" //usado apenas no teste de adicionar pelo botão na pesquisa de cliente

describe('Cadastrar cliente simples', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        titulopagina() //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
    })
  
    context('Cadastro de cliente simples', () => {

        it('Cliente simples CPF', () => {

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
        })  

        //REVISAR DATA NASCIMENTO
        it.only('Cliente simples CPF - alterar data de nascimento logo após cadastrar', () => {
    
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
            
            iconeMenuOpcoes() //ALTERAÇÃO DE CLIENTE SIMPLES - CPF
            opcaoClienteSimples()

            //Alteração - Campo data de nascimento
            cy.get('#input_888')
                .should('be.visible')
                .clear()
                .should('have.value','')
                .type("10/10/1990", {force:true})

            salvarClienteSimples()
            mensagemPrimeiroRegistSalvoSucesso()
        })  

        //REVISAR DATA NASCIMENTO
        it.skip('Cliente simples CPF - alterar data de nascimento (deve pedir trial)', () => {
    
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
            cy.wait(7500)

            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Preencher campo CPF - para alterar o cadastro que acabamos de gerar
            cy.get('#txtCpf')
                .type(`${cpf}`, { force: true }); //Inserindo CPF no campo "INFORME O CLIENTE"

            // ALTERAR DATA DE NASCIMENTO 

            //Clicar no campo Data de nascimento para aparecer a mensagem se desejo visualizar este cadastro
            cy.get('#input_124')
                .click()

            cy.wait (1000)

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

            cy.wait(2500)

            //Clicar na data que desejo, 29/09/1998
            cy.get('#input_124')
                .should('be.visible')
                .and('have.value','30/09/1998')
                .wait(200)
                .clear()
                .wait(200)
                .type("29/09/1997", {force:true})

            salvarClienteSimples()
            cy.wait(1000)

            salvarClienteSimples()
            cy.wait(3000)

            // Card de Autorização do Supervisor
            
            //Título Autorização do Supervisor
            cy.get('.md-toolbar-tools > .ng-binding')
                .should('be.visible')
                .and('have.text', 'Autorização do Supervisor')

            //Título da coluna Trial
            cy.get('thead > tr > :nth-child(1)')
                .should('be.visible')
                .and('have.text', 'Trial')

            //Informação da coluna Trial
            cy.get('tbody > .ng-scope > :nth-child(1)')
                .should('be.visible')

            //Título da coluna Descrição
            cy.get('thead > tr > :nth-child(2)')
                .should('be.visible')
                .and('have.text', 'Descrição')

            //Informação da coluna Descrição
            cy.get('tbody > .ng-scope > :nth-child(2)')
                .should('be.visible')

            //Título da coluna Status
            cy.get('thead > tr > :nth-child(3)')
                .should('be.visible')
                .and('have.text', 'Status')
            
            //Informação da coluna Status
            cy.contains('td.ng-binding', 'Pendente')
                .should('be.visible')
                .and('have.text', 'Pendente')
                .and('have.css', 'background-color', 'rgb(234, 7, 7)')

            //Título da coluna Permissão / Usuário
            cy.get('thead > tr > :nth-child(4)')
                .should('be.visible')
                .and('have.text', 'Permissão / Usuário')

            //Informação da coluna Permissão / Usuário
            cy.get('tbody > .ng-scope > :nth-child(4)')
                .should('be.visible')
                .and('have.text', 'Sim')

            //Validando Texto Supervisor
            cy.get('tbody > :nth-child(2) > .ng-binding')
                .should('be.visible')
                .and('have.text', 'Supervisor')

            //Validando ID do supervisor
            cy.get('[ng-model="idUsuario"]')
                .should('be.visible')
                .and('have.value', idSupervisorTrial)

            //Validando nome do Supervisor
            cy.get('[ng-model="nomeUsuario"]')
                .should('be.visible')
                .and('have.value', nomeSupervidorTrial)

            //Validando texto Senha
            cy.get('tbody > :nth-child(3) > :nth-child(1)')
                .should('be.visible')
                .and('have.text', 'Senha')
            
            //Validando campo de senha do supervisor
            cy.get(':nth-child(3) > [colspan="2"] > .ng-pristine')
                .should('be.visible')
                .and('have.value', '')
                .type(senhaSupervisor)

            //Validando botão CANCELAR
            cy.get('.layout-align-center-center > :nth-child(2) > .md-accent')
                .should('be.visible')
                .and('have.text', 'Cancelar')  
                .and('not.have.attr', 'disabled')

            //Validando botão CONFIRMAR
            cy.contains('button', 'Confirmar')
                .should('be.visible')
                .and('have.text', 'Confirmar')  
                .and('not.have.attr', 'disabled')

            //Clicar no botão CONFIRMAR
            cy.contains('button', 'Confirmar')
                .click()

            cy.wait(2000)

            mensagemPrimeiroRegistSalvoSucesso()

        })

        it('Cliente simples CPF - alterar tipo de sexo', () => {

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
            cy.wait(7000)

            iconeMenuOpcoes()
            opcaoClienteSimples()

            //Preencher campo CPF - para alterar o cadastro que acabamos de gerar
            cy.get('#txtCpf')
                .type(`${cpf}`, { force: true }); //Inserindo CPF no campo "INFORME O CLIENTE"

            // ALTERAR SEXO 

            //Campo Sexo - clicar
            cy.get('.md-default-theme[ng-model="cliente.idtiposexo"]')
                .click({force:true})

            cy.wait (2500)

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

            cy.wait(200)

            //Clicar em Sim para se desejo visualizar este cadastro
            cy.get('.md-confirm-button')
                .click({force:true})

            cy.wait(2000)

            //Selecionar feminino
            cy.get('.md-text.ng-binding')
                .contains('Feminino')
                .click({force:true})

            cy.wait(2500)

            //Clicar para abrir a modificação
            cy.get('.date-picker.flex-md-100 > .validaData > .md-datepicker-input-container > .md-datepicker-triangle-button')
                .click()

            cy.wait(200)

            salvarClienteSimples()
            cy.wait(1000)

            salvarClienteSimples()
            cy.wait(9000)

            mensagemPrimeiroRegistSalvoSucesso()
        })

        it('Cliente simples CPF - alterar Endereço logo após cadastrar', () => {
    
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

            // ALTERAÇÃO DE CLIENTE SIMPLES - CPF

            iconeMenuOpcoes()
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

        it('Cliente simples CNPJ', () => {
    
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

        it('Cliente simples CNPJ - alterar Endereço', () => {

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

        it('Botão de adicionar cliente, na pesquisa de cliente', () => {
        
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