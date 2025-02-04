import { clienteComRota, produtoPrincipal, escolherProdutoPesquisa, addproduto1, addproduto2, addproduto3, addproduto4, addproduto5, 
         addproduto6, addproduto7, addproduto8, addproduto9, addproduto10, addproduto11, addproduto12, addproduto13, addproduto14, addproduto15, 
         addproduto16, addproduto17, addproduto18, addproduto19, addproduto20, addproduto21, addproduto22, addproduto23, addproduto24, 
         addproduto25, addproduto26, addproduto27,addproduto28, addproduto29, addproduto30, addproduto31, addproduto32, addproduto33, addproduto34, 
         addproduto35, addproduto36, addproduto37, addproduto38, addproduto39, addproduto40 } from '../../../support/para_pedidos/para_pedidos_muitos_produtos.js';
import { botaoGerarParcelas, escolherFormaPagamentoPrincipal, carregandoFormaPagamento, escolherUmaParcelaPagamento, escolherDuasParcelaPagamento } from '../../../support/para_pedidos/apenas_formas_pagamento.js';
import { modalServicosVinculados, okServicosVinculados } from '../../../support/para_pedidos/apenas_servicos.js';
import { botaoFinalizarPedido, finalizandoPedido, pedidoGerado } from '../../../support/para_pedidos/apenas_finalizar_pedido.js';
import { processoVendaNFe } from '../../../support/para_pedidos/apenas_processos_venda.js';
import { avancarParaParcelas, avancarFinal, avancarParaTransportadora, avancarParcelasEntrega } from '../../../support/para_pedidos/apenas_botoes_avancar.js';
import { escolherTransportadora, escolherRota, modalInconsRotaTransp, modalInconsApenasTransp, modalInconsApenasRota, tirarEntrega,
         tirarEntregaSegundo, tirarEntregaTerceiro, tirarMontagem, tirarMontagemSegundo } from '../../../support/para_pedidos/apenas_entrega.js';

describe('Gerar pedido normal - sem serviço vinculado e tirar a entrega', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
        processoVendaNFe()
        clienteComRota()
    })

    context('Sem enterga/ processo 9860 - caminho feliz - produtos sem serviço', () => {

        it.skip('1. Ped venda: produto 1907 e suas voltagens 1 1 a 40 40', () => {

            produtoPrincipal() //primeira pesquisa de produto - 1907 1 1
            escolherProdutoPesquisa() //primeira vez escolher produto - 1907 1 1
            addproduto1() //produto - 1907 1 1

            produtoPrincipal() //segunda pesquisa de produto - 1907 2 2
            escolherProdutoPesquisa() //segunda vez escolher produto - 1907 2 2
            addproduto2() //produto - 1907 2 2

            produtoPrincipal() //teceira pesquisa de produto - 1907 3 3
            escolherProdutoPesquisa() //teceira vez escolher produto - 1907 3 3
            addproduto3() //produto - 1907 3 3

            produtoPrincipal() //quarta pesquisa de produto - 1907 4 4
            escolherProdutoPesquisa() //quarta vez escolher produto - 1907 4 4
            addproduto4() //produto - 1907 4 4

            produtoPrincipal() //quinta pesquisa de produto - 1907 5 5
            escolherProdutoPesquisa() //quinta vez escolher produto - 1907 5 5
            addproduto5() //produto - 1907 5 5

            produtoPrincipal() //sexta pesquisa de produto - 1907 6 6
            escolherProdutoPesquisa() //sexta vez escolher produto - 1907 6 6
            addproduto6() //produto - 1907 6 6

            produtoPrincipal() //sétima pesquisa de produto - 1907 7 7
            escolherProdutoPesquisa() //sétima vez escolher produto - 1907 7 7
            addproduto7() //produto - 1907 7 7

            produtoPrincipal() //oitava pesquisa de produto - 1907 8 8
            escolherProdutoPesquisa() //oitava vez escolher produto - 1907 8 8
            addproduto8() //produto - 1907 8 8

            produtoPrincipal() //nona pesquisa de produto - 1907 9 9
            escolherProdutoPesquisa() //nona vez escolher produto - 1907 9 9
            addproduto9() //produto - 1907 9 9

            produtoPrincipal() //décima pesquisa de produto - 1907 10 10
            escolherProdutoPesquisa() //décima vez escolher produto - 1907 10 10
            addproduto10() //produto - 1907 10 10

            produtoPrincipal() //onze pesquisa de produto - 1907 11 11
            escolherProdutoPesquisa() //onze vez escolher produto - 1907 11 11
            addproduto11() //produto - 1907 11 11

            produtoPrincipal() //doze pesquisa de produto - 1907 12 12
            escolherProdutoPesquisa() //doze vez escolher produto - 1907 12 12
            addproduto12() //produto - 1907 12 12

            produtoPrincipal() //treze pesquisa de produto - 1907 13 13
            escolherProdutoPesquisa() //treze vez escolher produto - 1907 13 13
            addproduto13() //produto - 1907 13 13 

            produtoPrincipal() //quatorze pesquisa de produto - 1907 14 14
            escolherProdutoPesquisa() //quatorze vez escolher produto - 1907 14 14
            addproduto14() //produto - 1907 14 14

            produtoPrincipal() //quinze pesquisa de produto - 1907 15 15
            escolherProdutoPesquisa() //quinze vez escolher produto - 1907 15 15
            addproduto15() //produto - 1907 15 15

            produtoPrincipal() //dezesseis pesquisa de produto - 1907 16 16
            escolherProdutoPesquisa() //dezesseis vez escolher produto - 1907 16 16
            addproduto16() //produto - 1907 16 16

            produtoPrincipal() //dezessete pesquisa de produto - 1907 17 17
            escolherProdutoPesquisa() //dezessete vez escolher produto - 1907 17 17
            addproduto17() //produto - 1907 17 17

            produtoPrincipal() //dezoito pesquisa de produto - 1907 18 18
            escolherProdutoPesquisa() //dezoito vez escolher produto - 1907 18 18
            addproduto18() //produto - 1907 18 18

            produtoPrincipal() //dezenove pesquisa de produto - 1907 19 19
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 19 19
            addproduto19() //produto - 1907 19 19

            produtoPrincipal() //dezenove pesquisa de produto - 1907 20 20
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 20 20
            addproduto20() //produto - 1907 20 20

            produtoPrincipal() //dezenove pesquisa de produto - 1907 21 21
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 21 21
            addproduto21() //produto - 1907 21 21

            produtoPrincipal() //dezenove pesquisa de produto - 1907 22 22
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 22 22
            addproduto22() //produto - 1907 22 22

            produtoPrincipal() //dezenove pesquisa de produto - 1907 23 23
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 23 23
            addproduto23() //produto - 1907 23 23

            produtoPrincipal() //dezenove pesquisa de produto - 1907 24 24
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 24 24
            addproduto24() //produto - 1907 24 24

            produtoPrincipal() //dezenove pesquisa de produto - 1907 25 25
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 25 25
            addproduto25() //produto - 1907 25 25

            produtoPrincipal() //dezenove pesquisa de produto - 1907 26 26
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 26 26
            addproduto26() //produto - 1907 26 26

            produtoPrincipal() //dezenove pesquisa de produto - 1907 27 27
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 27 27
            addproduto27() //produto - 1907 27 27

            produtoPrincipal() //dezenove pesquisa de produto - 1907 28 28
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 28 28
            addproduto28() //produto - 1907 28 28

            produtoPrincipal() //dezenove pesquisa de produto - 1907 29 29
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 29 29
            addproduto29() //produto - 1907 29 29

            produtoPrincipal() //dezenove pesquisa de produto - 1907 30 30
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 30 30
            addproduto30() //produto - 1907 30 30

            produtoPrincipal() //dezenove pesquisa de produto - 1907 31 31
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 31 31
            addproduto31() //produto - 1907 31 31

            produtoPrincipal() //dezenove pesquisa de produto - 1907 32 32
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 32 32
            addproduto32() //produto - 1907 32 32

            produtoPrincipal() //dezenove pesquisa de produto - 1907 33 33
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 33 33
            addproduto33() //produto - 1907 33 33

            produtoPrincipal() //dezenove pesquisa de produto - 1907 34 34
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 34 34
            addproduto34() //produto - 1907 34 34

            produtoPrincipal() //dezenove pesquisa de produto - 1907 35 35
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 35 35
            addproduto35() //produto - 1907 35 35

            produtoPrincipal() //dezenove pesquisa de produto - 1907 36 36
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 36 36
            addproduto36() //produto - 1907 36 36

            produtoPrincipal() //dezenove pesquisa de produto - 1907 37 37
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 37 37
            addproduto37() //produto - 1907 37 37

            produtoPrincipal() //dezenove pesquisa de produto - 1907 38 38
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 38 38
            addproduto38() //produto - 1907 38 38

            produtoPrincipal() //dezenove pesquisa de produto - 1907 39 39
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 39 39
            addproduto39() //produto - 1907 39 39

            produtoPrincipal() //dezenove pesquisa de produto - 1907 40 40
            escolherProdutoPesquisa() //dezenove vez escolher produto - 1907 40 40
            addproduto40() //produto - 1907 40 40

            
        })
    })

    // afterEach(() => {
    //     botaoFinalizarPedido() //RESUMO
    //     pedidoGerado()
    //   });
})