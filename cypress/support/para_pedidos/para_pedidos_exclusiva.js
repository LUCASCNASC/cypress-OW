//produto normal com saldo, para exclusiva - 1896 0 0 - com intercept
export function primeiroPrdNormalExclusiva (selector) {

    const produto_exclusiva = '1896'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1896*%20codigo:1896%20OR%20nome:*1896*%20OR%20codigo:*1896*%20OR%20nomeecommerce:*1896*%20OR%20marca_descricao:*1896*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_exclusiva)
        .wait(100)
        .should('have.value', produto_exclusiva)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//produto kit normal sem saldo, para exclusiva e sem saldo a receber - 1900 0 0 - com intercept
export function kitSemSaldoAgendamento (selector) {

    const kit_semsaldo = '1900'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1900*%20codigo:1900%20OR%20nome:*1900*%20OR%20codigo:*1900*%20OR%20nomeecommerce:*1900*%20OR%20marca_descricao:*1900*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_semsaldo)
        .wait(100)
        .should('have.value', kit_semsaldo)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//produto kit com 6 volumes e com saldo, para exclusiva e sem saldo a receber - 1903 0 0 - com intercept
export function kitVolumes (selector) {

    const kit_volumes = '1903'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1903*%20codigo:1903%20OR%20nome:*1903*%20OR%20codigo:*1903*%20OR%20nomeecommerce:*1903*%20OR%20marca_descricao:*1903*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Limpando campo com o produto anterior
    cy.get('#searchText')
        .clear()
        .wait(100)
        .should('have.value', '')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('have.value', '')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(kit_volumes)
        .wait(100)
        .should('have.value', kit_volumes)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//produto normal com saldo a receber, para exclusiva - 1905 0 0 - com intercept
export function produtoSaldoReceber (selector) {

    const produto_saldoreceber = '1905'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1905*%20codigo:1905%20OR%20nome:*1905*%20OR%20codigo:*1905*%20OR%20nomeecommerce:*1905*%20OR%20marca_descricao:*1905*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber)
        .wait(100)
        .should('have.value', produto_saldoreceber)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//produto normal com saldo a receber e outra parte solicitar compra, para exclusiva
export function prdSaldoReceberDuasLinhas (selector) {

    const produto_saldoreceber_duaslinhas = '1906'

    cy.intercept('GET', '/consultaprodutos/10050/10006%20OR%2010050%20OR%2010102%20OR%2010032%20OR%2010048/(servico:false%20OR%20(servico:true%20AND%20processos:*9869*))%20AND%20(codigo:*1906*%20codigo:1906%20OR%20nome:*1906*%20OR%20codigo:*1906*%20OR%20nomeecommerce:*1906*%20OR%20marca_descricao:*1906*)%20AND%20valor_filial_10050:%5B0%20TO%20*%5D/ativo:true/max(termfreq(filiais_com_saldo,10006),termfreq(filiais_com_saldo,10050),termfreq(filiais_com_saldo,10102),termfreq(filiais_com_saldo,10032),termfreq(filiais_com_saldo,10048))%20DESC,max(termfreq(filiais_com_promocao,10006),termfreq(filiais_com_promocao,10050),termfreq(filiais_com_promocao,10102),termfreq(filiais_com_promocao,10032),termfreq(filiais_com_promocao,10048))%20DESC,score%20DESC,valor_filial_10050%20ASC/50/0').as('apiConsultaProdutos')

    //Validando campo Buscar produto
    cy.get('#searchText')
        .should('be.visible')
        .and('not.be.disabled')

    //Validando campo Buscar produto - validando mensagem dentro do campo antes de preencher
    cy.get('label[for="searchText"]')
        .should('have.text', 'Buscar produtos')

    //Prenchendo campo Buscar produto
    cy.get('#searchText')
        .type(produto_saldoreceber_duaslinhas)
        .wait(100)
        .should('have.value', produto_saldoreceber_duaslinhas)

    cy.wait('@apiConsultaProdutos', { timeout: 40000 })
}

//aumentar quantidade a ser vendida, 5 unidades
export function aumentarQuantVendaCinco (selector) {

    //botão para diminuir quantidade
    cy.get('[ng-click="delItem()"]')
        .should('be.visible')
        .and('not.be.disabled')

    //validar campo Quantidade
    cy.get('[ng-model="quantidadeShow"]')
        .should('be.visible')
        .and('be.disabled')
        .and('have.value', '1')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .should('be.visible')
        .and('not.be.disabled')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
}

//aumentar quantidade a ser vendida, 10 unidades
export function aumentarQuantVendaDez (selector) {

    //botão para diminuir quantidade
    cy.get('[ng-click="delItem()"]')
        .should('be.visible')
        .and('not.be.disabled')

    //validar campo Quantidade
    cy.get('[ng-model="quantidadeShow"]')
        .should('be.visible')
        .and('be.disabled')
        .and('have.value', '1')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .should('be.visible')
        .and('not.be.disabled')

    //botão para aumentar quantidade
    cy.get('[ng-click="addItem()"]')
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
        .click()
}

//Validando produto com saldo indisponível
export function saldoRemotoAReceber (selector) {
    
    //Validando imagem
    cy.get('.resultado-imagem')
        .should('be.visible')

    //Validando "Saldo disponivel"
    cy.get('.label')
        .should('be.visible')
        .and('have.text','Saldo disponivel')
        .invoke('css', 'background-color') // Obtém a cor do elemento
        .should('equal', 'rgb(240, 173, 78)')

    //Validando nome do produto dentro card
    cy.get('.md-resultado-titulo')
        .should('be.visible')

    //Validado código do produto dentro do card
    cy.get('.badge-saldo.ng-binding')
        .should('be.visible')

    //Validando R$ dentro do card
    cy.get('sup')
        .should('be.visible')
        .and('have.text','R$')

    //Validando valor do produto dentro do card
    cy.get('.valor-busca')
        .should('be.visible')

    //Validando check box dentro do card
    cy.get('.expandeIcone')
        .should('be.visible')
}