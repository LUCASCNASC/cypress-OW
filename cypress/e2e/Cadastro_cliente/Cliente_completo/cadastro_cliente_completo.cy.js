import { iconeMenuOpcoes, opcaoClienteCompleto, clicarSalvarCliente, messRegistroSalvoSucesso, modalAguardeCarregando, botaoSalvarDesabilitado,
         clicarMenuCadastroClienteCompleto, clicarSalvarClienteCompleto, messAlertaEnderecoObrigatorio, clicarAbaReferencias } from '../../../support/para_cadastro_cliente/cliente_completo/para_cliente_completo.js';
import { clicarAbaRefBancaria, validarAbaRefBancariaVazia, clicarAddNovaRefBancaria, modalRefBancariaVazio, messRefBancariaChavePixAletoriaInvalida,
         selectBancoRefBancaria, selectAgenciaRefBancaria, selectContaRefBancaria, selectDataAberturaRefBancaria, selectBoletoRefBancaria,
         selectTelefoneRefBancaria,selectGerenteRefBancaria, selectEmailRefBancaria, selectCPFCorrentistaRefBancaria,
         selectNomeCorrentistaRefBancaria, selectTipoContaRefBancaria, selectOperacaoRefBancaria, selectFormaPagamentoRefBancaria,
         selectTipoChavePixTelefoneRefBancaria, selectChavePixTefefoneRefBancaria, clicarSalvarRefBancaria,
         messRefBancariaIncluidaSucesso, infosRefBancariaAdicionada, selectChavePixTelefoneErrada, messRefBancariaChavePixTelefoneInvalida, 
         messRefBancariaChavePixEmailInvalida, selectChavePixEmailErrada, selectTipoChavePixEmailRefBancaria, selectTipoChavePixCpfCnpjRefBancaria, 
         selectChavePixCpfCnpjErrada, messRefBancariaChavePixCpfCnpjInvalida, selectTipoChavePixAletoriaRefBancaria, arrastarEditarRefBancaria, 
         clicarEditarRefBancaria, selectChavePixTelefone, selectChavePixEmail, selectChavePixCPF, selectChavePixAleatorio } from '../../../support/para_cadastro_cliente/cliente_completo/aba_Referencia/referencia_bancaria.js';
import { clicarAbaRefPessoal, validarAbaRefPessoalVazia, clicarAddNovaRefPessoal, modalRefPessoalVazio, selectNomeRefPessoal, 
         selectEmailRefPessoal, selectTelefoneRefPessoal, selectRlacionamentoRefPessoal, clicarSalvarRefPessoal, messRefPessoalIncluidaSucesso,
         infosRefPessoalAdicionada } from '../../../support/para_cadastro_cliente/cliente_completo/aba_Referencia/referencia_pessoal.js'
import { clicarAbaRota, clicarAdicionarNovaRota, modalRotaVazioValidar, escolherTipoEnderecoRota, preencherRotaCompleta, infosRotaAdicionada,
         messRotaIncluidaSucesso } from '../../../support/para_cadastro_cliente/cliente_completo/aba_rota.js'
import { preecherDataNascimento, selecionarSexoCliente, preencherNomeCompleto, preencherNomeCNPJ, preencherCPFcliente, preencherNomeSocial,
         preencherCNPJcliente, preencherNomeFantasiaCNPJ } from '../../../support/para_cadastro_cliente/cliente_completo/aba_pessoa.js'
import { clicarAbaAnexo, validarAbaAnexoVazia, selecionarPrimeiroTipoAnexo, anexarArquivoPFD, confirmarEnvioArquivo, messAnexoIncluidoSucesso, 
         validarAnexoInserido } from '../../../support/para_cadastro_cliente/cliente_completo/aba_anexo.js'
import { clicarAbaEndereco, messEnderecoIncluidoSucesso, clicarAdicionarNovoEndereço, modalEnderecoVazioValidar, clicarAbrirTipoEndereco,
         infosEnderecoAdicionado, escolherTipoEndereco, clicarSalvarEndereco, preencherCampoCEPEndereco, preencherCampoNumeroEndereco,
         cardEnderecoVazioValidar } from '../../../support/para_cadastro_cliente/cliente_completo/aba_endereco.js'
import { clicarAbaTelefone, clicarAdicionarNovoTelefone, modalTelefoneVazioValidar, escolherTipoTelefone, preencherNumeroTelefone, 
         preencherRamalTelefone, clicarSalvarTelefone, infosTelefoneAdicionado, messTelefoneIncluidoSucesso } from '../../../support/para_cadastro_cliente/cliente_completo/aba_telefone.js'
import { clicarAbaRefComercial, validarAbaRefComercialVazia, clicarAddNovaRefComercial, modalRefComercialVazio, selectEmpresaRefComercial,
         selectContatoRefComercial, selectTelefoneRefComercial, selectEmailRefComercial, selectObservacaoRefComercial, clicarSalvarRefComercial,
         messRefComercialIncluidaSucesso, infosRefComercialAdicionada } from '../../../support/para_cadastro_cliente/cliente_completo/aba_Referencia/referencia_comercial.js'
import { clicarAbaRefFinanceira, validarAbaRefFinanceiraVazia, clicarAddNovaRefFinanceira, modalRefFinanceiraVazio, selectDataInicioRefFinanceira, 
         selectLocalExpRefFinanceira, selectPlanoExpRefFinanceira, selectValorPrestRefFinanceira, clicarSalvarRefFinanceira, 
         messRefFinanceiraIncluidaSucesso, infosRefFinanceiraAdicionada } from '../../../support/para_cadastro_cliente/cliente_completo/aba_Referencia/referencia_financeira.js'
import { clicarAbaEmpregaticio, validarAbaEmpregaticioVazia, clicarAddNovoEmpregaticio } from '../../../support/para_cadastro_cliente/cliente_completo/aba_empregaticio.js'

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

            iconeMenuOpcoes() //PESSOA
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

            preencherCPFcliente() //PESSOA
            preencherNomeCompleto()
            preencherNomeSocial()
            preecherDataNascimento()
            selecionarSexoCliente()
            cy.wait(500)

            clicarAbaEndereco() //ENDEREÇO
            cy.wait(5000)

            clicarSalvarClienteCompleto() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            clicarAdicionarNovoEndereço() //ENDEREÇO
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
            preencherCNPJcliente() //PESSOA
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
            preencherCPFcliente() //PESSOA
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
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //REFERENCIA
            clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            validarAbaRefBancariaVazia()
            clicarAddNovaRefBancaria()
            cy.wait(2000)
            modalRefBancariaVazio()
            selectBancoRefBancaria()
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
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefBancaria() //aba REFERENCIA BANCARIA
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

            // arrastarEditarRefBancaria() //Editar Referencia Bancaria
            // clicarEditarRefBancaria()
            // selectChavePixTelefone() //Chave Pix correta
            // clicarSalvarCliente()
            // cy.wait(2000)
            // modalAguardeCarregando()
            // cy.wait(2000)
            // messRegistroSalvoSucesso()
        })  

        it('7. Cliente completo CPF - validar tipo de chave PIX Email ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefBancaria() //aba REFERENCIA BANCARIA
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

            // arrastarEditarRefBancaria() //Editar Referencia Bancaria
            // clicarEditarRefBancaria()
            // selectChavePixEmail()
        })  

        it('8.Cliente completo CPF - validar tipo de chave CPF CNPJ ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefBancaria() //aba REFERENCIA BANCARIA
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

            // arrastarEditarRefBancaria() //Editar Referencia Bancaria
            // clicarEditarRefBancaria()
            // selectChavePixCPF()
        })  

        it('9.Cliente completo CPF - validar tipo de chave Aleatória ', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefBancaria() //aba REFERENCIA BANCARIA
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

            // arrastarEditarRefBancaria() //Editar Referencia Bancaria
            // clicarEditarRefBancaria()
            // selectChavePixAleatorio()
        })  
    })

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

        it('10. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            validarAbaRefPessoalVazia() //REFERENCIA PESSOAL
            clicarAddNovaRefPessoal()
            modalRefPessoalVazio()
            selectNomeRefPessoal()
            selectEmailRefPessoal()
            selectTelefoneRefPessoal()
            selectRlacionamentoRefPessoal()
            clicarSalvarRefPessoal()
            messRefPessoalIncluidaSucesso()
            infosRefPessoalAdicionada()
            clicarSalvarCliente()
            cy.wait(3000)
            messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia comercial', () => {

        it('11. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefComercial() //REFERENCIA COMERCIAL
            validarAbaRefComercialVazia()
            clicarAddNovaRefComercial()
            modalRefComercialVazio()
            selectEmpresaRefComercial()
            selectContatoRefComercial()
            selectTelefoneRefComercial()
            selectEmailRefComercial()
            selectObservacaoRefComercial()
            clicarSalvarRefComercial()
            infosRefComercialAdicionada()
            messRefComercialIncluidaSucesso()
            clicarSalvarCliente()
            cy.wait(3000)
            messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it('12. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaReferencias() //aba REFERENCIA
            clicarAbaRefFinanceira() //REFERENCIA FINANCEIRA
            validarAbaRefFinanceiraVazia()
            clicarAddNovaRefFinanceira()
            modalRefFinanceiraVazio()
            selectDataInicioRefFinanceira()
            selectLocalExpRefFinanceira()
            selectPlanoExpRefFinanceira()
            selectValorPrestRefFinanceira()
            clicarSalvarRefFinanceira()
            messRefFinanceiraIncluidaSucesso()
            infosRefFinanceiraAdicionada()
            clicarSalvarCliente()
            cy.wait(4000)
            messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it.only('13. Cliente completo CPF - caminho feliz', () => {

            iconeMenuOpcoes()
            opcaoClienteCompleto()
            preencherCPFcliente() //PESSOA
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

            clicarAbaEmpregaticio() //aba Empregatício
            validarAbaEmpregaticioVazia()
            clicarAddNovoEmpregaticio()
        }) 
    })
})