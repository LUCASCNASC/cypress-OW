import { escolherClientePedido, pedidoGerado, botaoFinalizarPedido, finalizandoPedido, botaoGerarParcelas, processoVendaPrincipal, 
         avancarParcelasEntrega, avancarFinal, carregandoFormaPagamento,
         produtoPrincipal, escolherProdutoPesquisa, botãoAdicionarProduto, addproduto1, addproduto2, addproduto3, addproduto4, addproduto5, 
         addproduto6, addproduto7, addproduto8, addproduto9, addproduto10, addproduto11, addproduto12, addproduto13, addproduto14, addproduto15, 
         addproduto16, addproduto17, addproduto18, addproduto19, addproduto20, addproduto21, addproduto22, addproduto23, addproduto24, 
         addproduto25, addproduto26, addproduto27,addproduto28, addproduto29, addproduto30, addproduto31, addproduto32, addproduto33, addproduto34, 
         addproduto35, addproduto36, addproduto37, addproduto38, addproduto39, addproduto40 } from '../../../support/para_pedidos/para_pedidos_muitos_produtos.js';
import { escolherFormaPagamentoPrincipal } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos';

describe('Gerar pedido normal - sem serviço vinculado e tirar a entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(700)
    })

    context('Sem frete/ processo 9860 - caminho feliz - produtos sem serviço', () => {

        it('Pedido de venda: produto 1860 0 0', () => {

            produtoPrincipal() //primeira pesquisa de 
            cy.wait(1500)
            escolherProdutoPesquisa() //primeira vez escolher produto - 1907 1 1
            cy.wait(500)
            addproduto1() //produto - 1907 1 1
            cy.wait(500)

            produtoPrincipal() //segunda pesquisa de produto - 1907 2 2
            cy.wait(1800)
            escolherProdutoPesquisa() //segunda vez escolher produto - 1907 2 2
            cy.wait(700)
            addproduto2() //produto - 1907 2 2
            cy.wait(800)

            produtoPrincipal() //teceira pesquisa de produto - 1907 3 3
            cy.wait(2100)
            escolherProdutoPesquisa() //teceira vez escolher produto - 1907 3 3
            cy.wait(900)
            addproduto3() //produto - 1907 3 3
            cy.wait(1100)

            produtoPrincipal() //quarta pesquisa de produto - 1907 4 4
            cy.wait(2400)
            escolherProdutoPesquisa() //quarta vez escolher produto - 1907 4 4
            cy.wait(1100)
            addproduto4() //produto - 1907 4 4
            cy.wait(1400)

            produtoPrincipal() //quinta pesquisa de produto - 1907 5 5
            cy.wait(2700)
            escolherProdutoPesquisa() //quinta vez escolher produto - 1907 5 5
            cy.wait(1300)
            addproduto5() //produto - 1907 5 5
            cy.wait(1700)

            produtoPrincipal() //sexta pesquisa de produto - 1907 6 6
            cy.wait(3000)
            escolherProdutoPesquisa() //sexta vez escolher produto - 1907 6 6
            cy.wait(1500)
            addproduto6() //produto - 1907 6 6
            cy.wait(2000)

            produtoPrincipal() //sétima pesquisa de produto - 1907 7 7
            cy.wait(3300)
            escolherProdutoPesquisa() //sétima vez escolher produto - 1907 7 7
            cy.wait(1700)
            addproduto7() //produto - 1907 7 7
            cy.wait(2300)

            produtoPrincipal() //oitava pesquisa de produto - 1907 8 8
            cy.wait(3600)
            escolherProdutoPesquisa() //oitava vez escolher produto - 1907 8 8
            cy.wait(1900)
            addproduto8() //produto - 1907 8 8
            cy.wait(2600)

            produtoPrincipal() //nona pesquisa de produto - 1907 9 9
            cy.wait(3900)
            escolherProdutoPesquisa() //nona vez escolher produto - 1907 9 9
            cy.wait(2100)
            addproduto9() //produto - 1907 9 9
            cy.wait(2900)

            produtoPrincipal() //décima pesquisa de produto - 1907 10 10
            cy.wait(4200)
            escolherProdutoPesquisa() //décima vez escolher produto - 1907 10 10
            cy.wait(2300)
            addproduto10() //produto - 1907 10 10
            cy.wait(3200)

            produtoPrincipal() //onze pesquisa de produto - 1907 11 11
            cy.wait(4500)
            escolherProdutoPesquisa() //onze vez escolher produto - 1907 11 11
            cy.wait(2700)
            addproduto11() //produto - 1907 11 11
            cy.wait(3500)

            produtoPrincipal() //doze pesquisa de produto - 1907 12 12
            cy.wait(4800)
            escolherProdutoPesquisa() //doze vez escolher produto - 1907 12 12
            cy.wait(2900)
            addproduto12() //produto - 1907 12 12
            cy.wait(3800)

            produtoPrincipal() //treze pesquisa de produto - 1907 13 13
            cy.wait(5100)
            escolherProdutoPesquisa() //treze vez escolher produto - 1907 13 13
            cy.wait(3100)
            addproduto13() //produto - 1907 13 13 
            cy.wait(4200)

            produtoPrincipal() //quatorze pesquisa de produto - 1907 14 14
            cy.wait(5400)
            escolherProdutoPesquisa() //quatorze vez escolher produto - 1907 14 14
            cy.wait(3300)
            addproduto14() //produto - 1907 14 14
            cy.wait(4500)

            produtoPrincipal() //quinze pesquisa de produto - 1907 15 15
            cy.wait(5700)
            escolherProdutoPesquisa() //quinze vez escolher produto - 1907 15 15
            cy.wait(3500)
            addproduto15() //produto - 1907 15 15
            cy.wait(4800)

            produtoPrincipal() //dezesseis pesquisa de produto - 1907 16 16
            cy.wait(6000)
            escolherProdutoPesquisa() //dezesseis vez escolher produto - 1907 16 16
            cy.wait(3700)
            addproduto16() //produto - 1907 16 16
            cy.wait(5100)

            produtoPrincipal() //dezessete pesquisa de produto - 1907 17 17
            cy.wait(6300)
            escolherProdutoPesquisa() //dezessete vez escolher produto - 1907 17 17
            cy.wait(3900)
            addproduto17() //produto - 1907 17 17
            cy.wait(5400)

            produtoPrincipal() //dezoito pesquisa de produto - 1907 18 18
            cy.wait(6600)
            escolherProdutoPesquisa() //dezoito vez escolher produto - 1907 18 18
            cy.wait(4100)
            addproduto18() //produto - 1907 18 18
            cy.wait(5700)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 19 19
            cy.wait(6900)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 19 19
            cy.wait(4300)
            addproduto19() //produto - 1907 19 19
            cy.wait(6000)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 20 20
            cy.wait(7200)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 20 20
            cy.wait(4500)
            addproduto20() //produto - 1907 20 20
            cy.wait(6300)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 21 21
            cy.wait(7500)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 21 21
            cy.wait(4700)
            addproduto21() //produto - 1907 21 21
            cy.wait(6600)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 22 22
            cy.wait(7800)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 22 22
            cy.wait(4900)
            addproduto22() //produto - 1907 22 22
            cy.wait(6900)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 23 23
            cy.wait(8100)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 23 23
            cy.wait(5100)
            addproduto23() //produto - 1907 23 23
            cy.wait(7200)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 24 24
            cy.wait(8400)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 24 24
            cy.wait(5300)
            addproduto24() //produto - 1907 24 24
            cy.wait(7500)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 25 25
            cy.wait(8700)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 25 25
            cy.wait(5500)
            addproduto25() //produto - 1907 25 25
            cy.wait(7800)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 26 26
            cy.wait(9000)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 26 26
            cy.wait(5700)
            addproduto26() //produto - 1907 26 26
            cy.wait(8100)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 27 27
            cy.wait(9300)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 27 27
            cy.wait(5900)
            addproduto27() //produto - 1907 27 27
            cy.wait(8400)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 28 28
            cy.wait(9600)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 28 28
            cy.wait(6100)
            addproduto28() //produto - 1907 28 28
            cy.wait(8700)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 29 29
            cy.wait(9900)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 29 29
            cy.wait(6300)
            addproduto29() //produto - 1907 29 29
            cy.wait(9000)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 30 30
            cy.wait(10200)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 30 30
            cy.wait(6500)
            addproduto30() //produto - 1907 30 30
            cy.wait(9300)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 31 31
            cy.wait(10500)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 31 31
            cy.wait(6700)
            addproduto31() //produto - 1907 31 31
            cy.wait(9600)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 32 32
            cy.wait(10800)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 32 32
            cy.wait(6900)
            addproduto32() //produto - 1907 32 32
            cy.wait(9900)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 33 33
            cy.wait(11100)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 33 33
            cy.wait(7100)
            addproduto33() //produto - 1907 33 33
            cy.wait(10200)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 34 34
            cy.wait(11400)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 34 34
            cy.wait(7300)
            addproduto34() //produto - 1907 34 34
            cy.wait(10500)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 35 35
            cy.wait(11700)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 35 35
            cy.wait(7500)
            addproduto35() //produto - 1907 35 35
            cy.wait(10800)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 36 36
            cy.wait(12000)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 36 36
            cy.wait(7700)
            addproduto36() //produto - 1907 36 36
            cy.wait(11100)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 37 37
            cy.wait(12300)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 37 37
            cy.wait(7900)
            addproduto37() //produto - 1907 37 37
            cy.wait(11400)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 38 38
            cy.wait(12600)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 38 38
            cy.wait(8100)
            addproduto38() //produto - 1907 38 38
            cy.wait(11700)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 39 39
            cy.wait(12900)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 39 39
            cy.wait(8300)
            addproduto39() //produto - 1907 39 39
            cy.wait(12000)

            produtoPrincipal() //dezenove pesquisa de produto - 1907 40 40
            cy.wait(13200)
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 40 40
            cy.wait(8500)
            addproduto40() //produto - 1907 40 40
            cy.wait(12300)




            
        })
    })

//     afterEach(() => {
//         // RESUMO DO PEDIDO - ANTES DE FINALIZAR
//         botaoFinalizarPedido()
//         finalizandoPedido()
//         cy.wait(10000)
//         pedidoGerado()
//       });
})