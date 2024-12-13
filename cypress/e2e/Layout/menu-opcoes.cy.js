//Importando funções 
import { titulopagina } from '../../support/para_todos';
import { iconeMenuOpcoes, inicioOpcaoMenu, departamentoOpcaoMenu, servicosOpcaoMenu, pedidosPendentesOpcaoMenu, servicosOpcaoMenu, 
         clienteCompletoOpcaoMenu, posVendaOpcaoMenu, intencaoCompraOpcaoMenu, propostaCreditoOpcaoMenu, configuracoesOpcaoMenu
         } from '../../support/para_layout/para_menu_opcoes.js';

const filial = " 050 - PR - EMISSÃO NFe/NFCe "
const descricaoUsuario = "T.A. USUÁRIO AUTOMAÇÃO"
const versaoPW = "4.6.0.0"
const versaoREST = "16.45.1.11"

describe('Validações de layout - menu opções', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage(); 
    })

    context('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

        //VERIFICAR ERRO
        it('Menu opções - validar as opções que o menu traz, mas sem entrar nas telas', () => {

            cy.login('sabium.automacao', '123.automacao'); //Comando personalizado para login
    
            //Vai variar de acordo com SBX e SABIUM, modificar no arquivo uiUtils.js, na função.
            titulopagina()

            //Topo da página - parte colorida
            cy.get('.topo > .md-toolbar-tools')
                .should('exist')
                .and('be.visible')

            iconeMenuOpcoes()

            //Validando imagem no início do modal menu
            cy.get('.md-primary > .logo > .md-default-theme > img')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            inicioOpcaoMenu()

            cy.wait(200)

            departamentoOpcaoMenu()

            cy.wait(200)

            servicosOpcaoMenu()

            cy.wait(200)

            pedidosPendentesOpcaoMenu()

            cy.wait(200)

            clienteOpcaoMenu()

            cy.wait(200)

            clienteCompletoOpcaoMenu()

            cy.wait(200)

            posVendaOpcaoMenu()

            cy.wait(200)

            intencaoCompraOpcaoMenu()

            cy.wait(200)

            propostaCreditoOpcaoMenu()

            cy.wait(200)

            configuracoesOpcaoMenu()

            cy.wait(200)

            minhaPerformanceOpcaoMenu()

            cy.wait(200)

            //Validando descrição do usuário logado
            cy.get('.usuario > :nth-child(1)')
                .should('exist')
                .and('be.visible')
                .and('have.text', descricaoUsuario)

            //Validando filial
            cy.get('.usuario > div > .ng-binding')
                .should('exist')
                .and('be.visible')
                .and('have.text', filial)

            //Validando botão Sair
            cy.get('button[aria-label="Sair"]')
                .should('have.attr', 'aria-label', 'Sair')

            //Validando botão Sair
            cy.get('button[aria-label="Sair"]')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Validando mensagem de Pedido de Venda - final do modal
            cy.get('p.ng-binding')
                .should('exist')
                .and('be.visible')
                .and('contain', 'Pedido de Venda')
                .and('contain', '- ERP')

            //Validando mensagem de Pedido de Venda - final do modal - versão Pedido Web
            cy.get('#pvProjeto')
                .should('exist')
                .and('be.visible')
                .and('have.text', versaoPW)

            //Validando mensagem de Pedido de Venda - final do modal - versão REST
            cy.get('#pvERP')
                .should('exist')
                .and('be.visible')
                .and('have.text', versaoREST)

            //Clicaer na mensagem de Pedido de Venda - final do modal - versão Pedido Web
            cy.get('#pvProjeto')
                .click({force:true})

            cy.wait(200)

            //Primeiro alerta - card
            cy.get('#toast-container > :nth-child(1)')

            //Primeiro alerta - ALERTA
            cy.get(':nth-child(1) > .toast-title')


            //Primeiro alerta - mensagem do card
            cy.get(':nth-child(1) > .toast-message')

            //Primeiro alerta - botão X
            cy.get(':nth-child(1) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Segundo alerta - card
            cy.get('#toast-container > :nth-child(2)')


            //Segundo alerta - ALERTA
            cy.get(':nth-child(2) > .toast-title')


            //Segundo alerta - mensagem do card
            cy.get(':nth-child(2) > .toast-message')


            //Segundo alerta - botão X
            cy.get(':nth-child(2) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')

            //Terceiro alerta - card
            cy.get('#toast-container > :nth-child(3)')


            //Terceiro alerta - ALERTA
            cy.get(':nth-child(3) > .toast-title')


            //Terceiro alerta - mensagem do card
            cy.get(':nth-child(3) > .toast-message')

            //Terceiro alerta - botão X
            cy.get(':nth-child(3) > .toast-close-button')
                .should('exist')
                .and('be.visible')
                .and('not.have.attr', 'disabled')
        })
    })  
})