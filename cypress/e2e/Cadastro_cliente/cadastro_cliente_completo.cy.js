import { iconeMenuOpcoes, opcaoClienteCompleto, preecherDataNascimento, selecionarSexoCliente, preencherNomeCompleto, preencherNomeCNPJ,
         clicarSalvarCliente, clicarAbaEndereco, preencherCPFcliente, preencherCNPJcliente, messEnderecoIncluidoSucesso, 
         preencherNomeFantasiaCNPJ, clicarAdicionarNovoEndereço, modalEnderecoVazioValidar, clicarAbrirTipoEndereco, botaoSalvarDesabilitado,
         infosEnderecoAdicionado, clicarSalvarClienteCompleto, clicarAbaRota, clicarAdicionarNovaRota, messTelefoneIncluidoSucesso,
         modalRotaVazioValidar, escolherTipoEnderecoRota, escolherTipoEndereco, messAlertaEnderecoObrigatorio, clicarSalvarEndereco,
         preencherCampoCEPEndereco, preencherCampoNumeroEndereco, preencherRotaCompleta, messRotaIncluidaSucesso, infosRotaAdicionada,
         clicarAbaTelefone, clicarAdicionarNovoTelefone, modalTelefoneVazioValidar, escolherTipoTelefone, preencherNumeroTelefone,
         preencherRamalTelefone, clicarSalvarTelefone, infosTelefoneAdicionado, modalAguardeCarregando, messRegistroSalvoSucesso, 
         cardEnderecoVazioValidar, clicarMenuCadastroClienteCompleto, clicarAbaAnexo, validarAbaAnexoVazia, selecionarPrimeiroTipoAnexo,
         messAnexoIncluidoSucesso, validarAnexoInserido, anexarArquivoPFD, confirmarEnvioArquivo, preencherNomeSocial } from '../../support/para_cadastro_cliente/cliente_completo/para_cliente_completo.js';
import { clicarAbaReferencias, clicarAbaRefBancaria, validarAbaRefBancariaVazia, clicarAddNovaRefBancaria, modalRefBancariaVazio, 
         selectBancoRefBancaria, selectAgenciaRefBancaria, selectContaRefBancaria, selectDataAberturaRefBancaria, selectBoletoRefBancaria,
         selectTelefoneRefBancaria,selectGerenteRefBancaria, selectEmailRefBancaria, selectCPFCorrentistaRefBancaria,
         selectNomeCorrentistaRefBancaria, selectTipoContaRefBancaria, selectOperacaoRefBancaria, selectFormaPagamentoRefBancaria,
         selectTipoChavePixTelefoneRefBancaria, selectChavePixTefefoneRefBancaria, clicarSalvarRefBancaria,
         messRefBancariaIncluidaSucesso, infosRefBancariaAdicionada, selectChavePixTelefoneErrada, messRefBancariaChavePixTelefoneInvalida, 
         messRefBancariaChavePixEmailInvalida, selectChavePixEmailErrada, selectTipoChavePixEmailRefBancaria, selectTipoChavePixCpfCnpjRefBancaria,
         selectChavePixCpfCnpjErrada, messRefBancariaChavePixCpfCnpjInvalida, selectTipoChavePixAletoriaRefBancaria,
         messRefBancariaChavePixAletoriaInvalida } from '../../support/para_cadastro_cliente/cliente_completo/cliente_completo_refBancaria.js';

describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Cadastro de cliente completo - básico ', () => {

        it('1. Cliente completo CPF', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(4000)

            messTelefoneIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        })  

        it('2. Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            iconeMenuOpcoes()
            opcaoClienteCompleto()
            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            cy.wait(500)

            clicarAbaEndereco() //ENDEREÇO
            cy.wait(5000)

            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            clicarAdicionarNovoEndereço()
            cardEnderecoVazioValidar()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            botaoSalvarDesabilitado()
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(4000)

            messTelefoneIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        })  

        it('3. Cliente completo CNPJ', () => {
    
            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCNPJcliente()
            preencherNomeCNPJ()
            preencherNomeFantasiaCNPJ()

            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            cy.wait(400)
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            botaoSalvarDesabilitado()
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(4000)

            messTelefoneIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(4000)

            messTelefoneIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            messRegistroSalvoSucesso()
            cy.wait(2000)

            clicarMenuCadastroClienteCompleto()
            clicarAbaAnexo()
            validarAbaAnexoVazia()
            selecionarPrimeiroTipoAnexo()
            cy.wait(500)
            anexarArquivoPFD()
            confirmarEnvioArquivo()
            cy.wait(1000)
            messAnexoIncluidoSucesso()
            validarAnexoInserido()
            clicarSalvarClienteCompleto()
            cy.wait(3000)
            messRegistroSalvoSucesso()
        })
    })

    context('Cadastro de cliente completo - incluindo referencia bancária', () => {


        it('5. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(4000)

            messTelefoneIncluidoSucesso()

            clicarAbaReferencias() //aba Referencias
            clicarAbaRefBancaria() //aba Bancaria, dentro de Referencias
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria() //preencher campo BANCO
            selectAgenciaRefBancaria()
            selectContaRefBancaria()
            selectDataAberturaRefBancaria()
            //selectBoletoRefBancaria()
            selectTelefoneRefBancaria()
            selectGerenteRefBancaria()
            selectEmailRefBancaria()
            selectCPFCorrentistaRefBancaria()
            selectNomeCorrentistaRefBancaria()
            selectTipoContaRefBancaria()
            selectOperacaoRefBancaria()
            selectFormaPagamentoRefBancaria()
            selectTipoChavePixTelefoneRefBancaria()
            selectChavePixTefefoneRefBancaria()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            cy.wait(2000)
            messRegistroSalvoSucesso()
        })  

        it('6. Cliente completo CPF - validar tipo de chave PIX Telefone ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(5000)

            messTelefoneIncluidoSucesso()

            clicarAbaReferencias() //aba Referencias
            clicarAbaRefBancaria() //aba Bancaria, dentro de Referencias
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria() //preencher campo BANCO
            selectAgenciaRefBancaria()
            selectContaRefBancaria()
            selectDataAberturaRefBancaria()
            //selectBoletoRefBancaria()
            selectTelefoneRefBancaria()
            selectGerenteRefBancaria()
            selectEmailRefBancaria()
            selectCPFCorrentistaRefBancaria()
            selectNomeCorrentistaRefBancaria()
            selectTipoContaRefBancaria()
            selectOperacaoRefBancaria()
            selectFormaPagamentoRefBancaria()
            selectTipoChavePixTelefoneRefBancaria()
            selectChavePixTelefoneErrada()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            messRefBancariaChavePixTelefoneInvalida()
        })  

        it('7. Cliente completo CPF - validar tipo de chave PIX Email ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(5000)

            messTelefoneIncluidoSucesso()

            clicarAbaReferencias() //aba Referencias
            clicarAbaRefBancaria() //aba Bancaria, dentro de Referencias
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria() //preencher campo BANCO
            selectAgenciaRefBancaria()
            selectContaRefBancaria()
            selectDataAberturaRefBancaria()
            //selectBoletoRefBancaria()
            selectTelefoneRefBancaria()
            selectGerenteRefBancaria()
            selectEmailRefBancaria()
            selectCPFCorrentistaRefBancaria()
            selectNomeCorrentistaRefBancaria()
            selectTipoContaRefBancaria()
            selectOperacaoRefBancaria()
            selectFormaPagamentoRefBancaria()
            selectTipoChavePixEmailRefBancaria()
            selectChavePixEmailErrada()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            messRefBancariaChavePixEmailInvalida()
        })  

        it('8.Cliente completo CPF - validar tipo de chave CPF CNPJ ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(5000)

            messTelefoneIncluidoSucesso()

            clicarAbaReferencias() //aba Referencias
            clicarAbaRefBancaria() //aba Bancaria, dentro de Referencias
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria() //preencher campo BANCO
            selectAgenciaRefBancaria()
            selectContaRefBancaria()
            selectDataAberturaRefBancaria()
            //selectBoletoRefBancaria()
            selectTelefoneRefBancaria()
            selectGerenteRefBancaria()
            selectEmailRefBancaria()
            selectCPFCorrentistaRefBancaria()
            selectNomeCorrentistaRefBancaria()
            selectTipoContaRefBancaria()
            selectOperacaoRefBancaria()
            selectFormaPagamentoRefBancaria()
            selectTipoChavePixCpfCnpjRefBancaria()
            selectChavePixCpfCnpjErrada()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            messRefBancariaChavePixCpfCnpjInvalida()
        })  

        it('9.Cliente completo CPF - validar tipo de chave Aleatória ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente()
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            clicarSalvarCliente()
            cy.wait(500)
            
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            clicarAbaEndereco() //ENDEREÇO
            clicarAdicionarNovoEndereço()
            cy.wait(200)
            escolherTipoEndereco()
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            cy.wait(300)
            preencherCampoNumeroEndereco()

            botaoSalvarDesabilitado()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            cy.wait(5000)

            messTelefoneIncluidoSucesso()

            clicarAbaReferencias() //aba Referencias
            clicarAbaRefBancaria() //aba Bancaria, dentro de Referencias
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria() //preencher campo BANCO
            selectAgenciaRefBancaria()
            selectContaRefBancaria()
            selectDataAberturaRefBancaria()
            //selectBoletoRefBancaria()
            selectTelefoneRefBancaria()
            selectGerenteRefBancaria()
            selectEmailRefBancaria()
            selectCPFCorrentistaRefBancaria()
            selectNomeCorrentistaRefBancaria()
            selectTipoContaRefBancaria()
            selectOperacaoRefBancaria()
            selectFormaPagamentoRefBancaria()
            selectTipoChavePixAletoriaRefBancaria()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            messRefBancariaChavePixAletoriaInvalida()
        })  
    })

})