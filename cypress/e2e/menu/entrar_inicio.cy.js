import { iconeMenuOpcoes, topoPagina, imageMenu, inicioOpcaoMenu, departamentoOpcaoMenu, servicosOpcaoMenu, pedidosPendentesOpcaoMenu,
         clienteOpcaoMenu, clienteCompletoOpcaoMenu, posVendaOpcaoMenu, intencaoCompraOpcaoMenu, propostaCreditoOpcaoMenu, 
         configuracoesOpcaoMenu, minhaPerformanceOpcaoMenu, botaoSair, iconeComputadorLogin } from '../../support/para_menus/para_menu_opcoes.js';

const filial = " 050 - PR - EMISSÃO NFe/NFCe "
const descricaoUsuario = "T.A. USUÁRIO AUTOMAÇÃO"
const versaoPW = "4.6.0.0"
const versaoREST = "16.45.1.11"

describe('Validações de menu - menu opções', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login('sabium.automacao', '123.automacao')
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Menu opções - validar as opções que o menu traz, entrando nas telas', () => {
        it.skip('Início - validar as opção Início, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            inicioOpcaoMenu()
        })

        it.skip('Departamento - validar as opção Departamento, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            departamentoOpcaoMenu()
        })

        it.skip('Serviços - validar as opção Serviços, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            servicosOpcaoMenu()
        })

        it.skip('Pedidos pendentes - validar as opção Pedidos pendentes, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            pedidosPendentesOpcaoMenu()
        })

        it.skip('Cliente - validar as opção Cliente, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            clienteOpcaoMenu()
        })

        it.skip('Cliente completo - validar as opção Cliente completo, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            clienteCompletoOpcaoMenu()
        })

        it.skip('Pós-venda - validar as opção Pós-venda, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            posVendaOpcaoMenu()
        })

        it.skip('Intenção de compra - validar as opção Intenção de compra, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            intencaoCompraOpcaoMenu()
        })

        it.skip('Proposta de crédito - validar as opção Proposta de crédito, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            propostaCreditoOpcaoMenu()
        })

        it.skip('Configurações - validar as opção Configurações, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            configuracoesOpcaoMenu()
        })

        it.skip('Minha performance - validar as opção Minha performance, entrando na tela', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            minhaPerformanceOpcaoMenu()
        })

        it.skip('Botão Sair - validar as opção Sair, saindo do sistema', () => {

            topoPagina()
            iconeMenuOpcoes()
            imageMenu()
            botaoSair()
            cy.wait(3000)
            iconeComputadorLogin()
        })
    })  
})