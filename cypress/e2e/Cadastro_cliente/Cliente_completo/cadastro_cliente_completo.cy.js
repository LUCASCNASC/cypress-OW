import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/geral_cliente_completo';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/geral_anexo';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/preencher_anexo';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/geral_empregaticio';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/preencher_empregaticio';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/geral_pessoa';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/preencher_pessoa';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/geral_ref_bancaria';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/preencher_ref_bancaria';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/geral_ref_comercial';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/preencher_ref_comercial';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/geral_ref_financeira';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/preencher_ref_financeira';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/geral_ref_pessoal';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/preencher_ref_pessoal';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/geral_rota';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/preencher_rota';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/geral_telefone';
import {  } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/preencher_telefone';


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
            modalEnderecoVazioValidar()
            cy.wait(200)
            clicarAbrirTipoEndereco()
            cy.wait(300)
            escolherTipoEndereco()
            preencherCampoCEPEndereco()
            preencherCampoNumeroEndereco()
            clicarSalvarEndereco()
            cy.wait(200)
            infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            //messTelefoneIncluidoSucesso()

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
            //cy.wait(5000)

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            //messTelefoneIncluidoSucesso()

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()
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
            
            //messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            messTelefoneIncluidoSucesso()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            //messRegistroSalvoSucesso()
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

        it('5. Cliente completo CPF - tipo de chave PIX Telefone correto', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
            selectChavePixTelefone()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            cy.wait(2000)
            messRegistroSalvoSucesso()
        })  

        it('6. Cliente completo CPF - tipo de chave PIX Email correto', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
            selectTipoChavePixEmailRefBancaria()
            selectChavePixEmail()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            cy.wait(2000)
            messRegistroSalvoSucesso()
        }) 

        it('7. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
            selectTipoChavePixCpfCnpjRefBancaria()
            selectChavePixCPF()
            clicarSalvarRefBancaria()
            //messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            cy.wait(2000)
            messRegistroSalvoSucesso()
        }) 

        //verificar 
        it.skip('8. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
            selectTipoChavePixAletoriaRefBancaria()
            selectChavePixAleatorio()
            clicarSalvarRefBancaria()
            messRefBancariaIncluidaSucesso()
            infosRefBancariaAdicionada()
            clicarSalvarCliente()
            cy.wait(2000)
            modalAguardeCarregando()
            cy.wait(2000)
            messRegistroSalvoSucesso()
        }) 

        it('9. Cliente completo CPF - validar tipo de chave PIX Telefone incorreto ', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
        })  

        it('10. Cliente completo CPF - validar tipo de chave PIX Email incorreto ', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
        })  

        it('11.Cliente completo CPF - validar tipo de chave CPF CNPJ incorreto ', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
        })  

        it('12.Cliente completo CPF - validar tipo de chave Aleatória incorreto ', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()

            //messTelefoneIncluidoSucesso()

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
        })  
    })

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

        it('13. Cliente completo CPF - caminho feliz', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
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
            //messTelefoneIncluidoSucesso()

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
        it('14. Cliente completo CPF - caminho feliz', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            //messTelefoneIncluidoSucesso()

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

        it('15. Cliente completo CPF - caminho feliz', () => {

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
            //messEnderecoIncluidoSucesso()

            clicarAbaRota() //ROTA
            clicarAdicionarNovaRota()
            modalRotaVazioValidar()
            escolherTipoEnderecoRota()
            preencherRotaCompleta()
            //messRotaIncluidaSucesso()
            infosRotaAdicionada()

            clicarAbaTelefone() //TELEFONE
            clicarAdicionarNovoTelefone()
            modalTelefoneVazioValidar()
            escolherTipoTelefone()
            preencherNumeroTelefone()
            preencherRamalTelefone()
            clicarSalvarTelefone()
            infosTelefoneAdicionado()
            //messTelefoneIncluidoSucesso()

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

    context('Cadastro de cliente completo - incluindo Empregatício', () => {

        //verificar 
        it.skip('16. Cliente completo CPF - caminho feliz', () => {

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