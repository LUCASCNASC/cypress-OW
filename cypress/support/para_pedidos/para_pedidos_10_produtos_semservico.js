// produto
export function produtoPrincipal (selector) {

    const produto_principal = '1907'

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(400)

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_principal)
        .wait(100)
}

//Clicar para selecionar o produto que queremos adicionar ao pedido - sem validações
export function escolherProdutoPesquisa (selector) {

    //Clicar para adicionar no carrinho
    cy.get('.md-list-item-text')
        .click({force:true})
}


//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 1 1
export function addproduto1 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > [style=""] > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get('[ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 2 2
export function addproduto2 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(3) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(3) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 3 3
export function addproduto3 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(4) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(4) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 4 4
export function addproduto4 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(5) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(5) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 5 5
export function addproduto5 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(6) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(6) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 6 6
export function addproduto6 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(7) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(7) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 7 7
export function addproduto7 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(8) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(8) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 8 8
export function addproduto8 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(9) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(9) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 9 9
export function addproduto9 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(10) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(10) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 10 10
export function addproduto10 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(11) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(11) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 11 11
export function addproduto11 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(12) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(12) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 12 12
export function addproduto12 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(13) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(13) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 13 13
export function addproduto13 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(14) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(14) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 14 14
export function addproduto14 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(15) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(15) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 15 15
export function addproduto15 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(16) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(1900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(16) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 16 16
export function addproduto16 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(17) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(17) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 17 17
export function addproduto17 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(18) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(18) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 18 18
export function addproduto18 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(19) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(19) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 19 19
export function addproduto19 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(20) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 20 20
export function addproduto20 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(21) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 21 21
export function addproduto21 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(1) > md-list.md-default-theme > :nth-child(20) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(22) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 22 22
export function addproduto22 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(23) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(23) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 23 23
export function addproduto23 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(24) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(24) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 24 24
export function addproduto24 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(25) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(25) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 25 25
export function addproduto25 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(26) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(2900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(26) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 26 26
export function addproduto26 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(27) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(27) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 27 27
export function addproduto27 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(28) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(28) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 28 28
export function addproduto28 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(29) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(29) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 29 29
export function addproduto29 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(30) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(30) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 30 30
export function addproduto30 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(31) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(31) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 31 31
export function addproduto31 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(32) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3500)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(32) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 32 32
export function addproduto32 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(33) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3600)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(33) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 33 33
export function addproduto33 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(34) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3700)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(34) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 34 34
export function addproduto34 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(35) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3800)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(35) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 35 35
export function addproduto35 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(36) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(3900)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(36) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 36 36
export function addproduto36 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(37) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4000)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(37) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 37 37
export function addproduto37 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(38) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4100)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(38) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 38 38
export function addproduto38 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(39) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4200)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(39) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 39 39
export function addproduto39 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(40) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4300)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(40) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}

//escolher voltagem, clicar botão Adicionar e tirar entrega - 1907 40 40
export function addproduto40 (selector) {

    //Card de voltagem - clicar
    cy.get(':nth-child(41) > div.md-button > .md-no-style')
        .click({force:true})

    cy.wait (500)

    //Botão adicionar produto após selecionar voltagem do produto, clicar no botão
    cy.get('[style="padding: 0px 5px;"] > .md-primary')
        .click({force:true})

    cy.wait(4400)

    //Botão Retirada / Entrega - texto Retirada / Entrega
    cy.get(':nth-child(41) > .md-whiteframe-2dp > :nth-child(3) > [ng-show="itemAtual._permiteEntrega"] > .md-auto-horizontal-margin > .md-label')
        .click({force:true})
}
