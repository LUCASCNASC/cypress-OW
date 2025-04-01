import { GeneralClientComplete } from '../../../../pages/para_cadastro_cliente/cliente_completo/geral_cliente_completo';
import { ClickClientComplete } from '../../../../pages/para_cadastro_cliente/cliente_completo/clicar_cliente_completo';
import { GeneralAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/geral_anexo';
import { GeneralEmployment } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/geral_empregaticio';
import { FillFieldAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/preencher_anexo';
import { clicarAbaEmpregat } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/geral_empregaticio';
import { FillPerson } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/preencher_pessoa';
import { GeneralRefBanking } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/geral_ref_bancaria';
import { FillRefBanking } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/preencher_ref_bancaria';
import { GeneralRefCommercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/geral_ref_comercial';
import { FillRefCommercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/preencher_ref_comercial';
import { GeneralRefFinance } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/geral_ref_financeira';
import { FillRefFinance } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/preencher_ref_financeira';
import { GeneralRefGuys } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/geral_ref_pessoal';
import { FillRefGuys } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/preencher_ref_pessoal';
import { GeneralRefRoute } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/geral_rota';
import { FillRefRoute } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/preencher_rota';
import { GeneralRefPhone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/geral_telefone';
import { FillRefPhone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/preencher_telefone';
import { GeneralAdress } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/geral_endereco';
import { FillAdress } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/preencher_endereco';


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

            GeneralClientComplete.iconeMenuOpcoes() //PESSOA
            GeralClienteCoGeneralClientCompletempleto.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        })  

        it('2. Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            ClickClientComplete.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()

            ClickClientComplete.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClickClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        })  

        it('3. Cliente completo CNPJ', () => {
    
            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cnpjCliente() //PESSOA
            FillPerson.nomeCNPJ()
            FillPerson.nomeFantasiaCNPJ()

            ClickClientComplete.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4. Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()

            ClickClientComplete.menuCadastroClienteCompleto()
            GeneralAnexo.clicarAbaAnexo() //CADASTRAR ANEXO 
            GeneralAnexo.validarAbaAnexoVazia()
            GeneralAnexo.selecionarPrimeiroTipoAnexo()
            FillFieldAnexo.anexarArquivoPFD()
            GeneralAnexo.confirmarEnvioArquivo()
            GeneralAnexo.messAnexoIncluidoSucesso()
            GeneralAnexo.validarAnexoInserido()
            
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.messRegistroSalvoSucesso()
        })
    })

    context('Cadastro de cliente completo - incluindo referencia bancária', () => {

        it('5. Cliente completo CPF - tipo de chave PIX Telefone correto', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()


            FillRefBanking.tipoChavePixTelefone()
            FillRefBanking.chavePixTelefone()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        })  

        it('6. Cliente completo CPF - tipo de chave PIX Email correto', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixEmail()
            FillRefBanking.chavePixEmail()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 

        it('7. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixCpfCnpj()
            FillRefBanking.chavePixCPF()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 

        it('8. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto() 
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixAletoria()
            FillRefBanking.chavePixAleatorio()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 

        it('9. Cliente completo CPF - validar tipo de chave PIX Telefone incorreto ', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixTelefone()
            FillRefBanking.chavePixTelefoneErrada()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralRefBanking.messRefBancariaChavePixTelefoneInvalida()
        })  

        it('10. Cliente completo CPF - validar tipo de chave PIX Email incorreto ', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixEmail()
            FillRefBanking.chavePixEmailErrada()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralRefBanking.messRefBancariaChavePixEmailInvalida()
        })  

        it('11.Cliente completo CPF - validar tipo de chave CPF CNPJ incorreto ', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixCpfCnpj()
            FillRefBanking.tipoChavePixAletoria()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralRefBanking.messRefBancariaChavePixCpfCnpjInvalida()
        })  

        it('12.Cliente completo CPF - validar tipo de chave Aleatória incorreto ', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefBanking.clicarAbaRefBancaria() //CADASTRAR REFERENCIA BANCÁRIA
            GeneralRefBanking.validarAbaRefBancariaVazia()
            GeneralRefBanking.clicarAddNovaRefBancaria()
            GeneralRefBanking.modalRefBancariaVazio()
            FillRefBanking.banco()
            FillRefBanking.agencia()
            FillRefBanking.conta()
            FillRefBanking.dataAbertura()
            FillRefBanking.telefone()
            FillRefBanking.gerente()
            FillRefBanking.email()
            FillRefBanking.cpfCorrentista()
            FillRefBanking.nomeCorrentista()
            FillRefBanking.tipoConta()
            FillRefBanking.operacao()
            FillRefBanking.formaPagamento()

            FillRefBanking.tipoChavePixAletoria()
            GeneralRefBanking.clicarSalvarRefBancaria()
            GeneralRefBanking.messRefBancariaIncluidaSucesso()
            GeneralRefBanking.infosRefBancariaAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralRefBanking.messRefBancariaChavePixAletoriaInvalida()
        })  
    })

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

        it('13. Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefGuys.clicarAbaRefPessoal()
            GeneralRefGuys.validarAbaRefPessoalVazia() //CADASTRAR REFERENCIA PESSOAL
            GeneralRefGuys.clicarAddNovaRefPessoal()
            GeneralRefGuys.modalRefPessoalVazio()
            FillRefGuys.nome()
            FillRefGuys.email()
            FillRefGuys.telefone()
            FillRefGuys.relacionamento()
            GeneralRefGuys.clicarSalvar()
            GeneralRefGuys.messRefPessoalIncluidaSucesso()
            GeneralRefGuys.infosAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia comercial', () => {

        it('14. Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefCommercial.clicarAbaRefComercial() //CADASTRAR REFERENCIA COMERCIAL
            GeneralRefCommercial.validarAbaRefComercialVazia()
            GeneralRefCommercial.clicarAddNovaRefComercial()
            GeneralRefCommercial.modalRefComercialVazio()
            FillRefCommercial.empresa()
            FillRefCommercial.contato()
            FillRefCommercial.telefone()
            FillRefCommercial.email()
            FillRefCommercial.observacao()
            GeneralRefCommercial.clicarSalvarRefComercial()
            GeneralRefCommercial.infosRefComercialAdicionada()
            GeneralRefCommercial.messRefComercialIncluidaSucesso()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it('15. Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            ClickClientComplete.abaReferencias() //REFERENCIA
            GeneralRefFinance.clicarAba() //CADASTRAR REFERENCIA FINANCEIRA
            GeneralRefFinance.validarAbaVazia()
            GeneralRefFinance.clicarAddNova()
            GeneralRefFinance.modalVazio()
            FillRefFinance.dataInicio()
            FillRefFinance.localExp()
            FillRefFinance.planoExp()
            FillRefFinance.valorPrest()
            GeneralRefFinance.clicarSalvar()
            GeneralRefFinance.messRefFinanceiraIncluidaSucesso()
            GeneralRefFinance.infosRefFinanceiraAdicionada()
            ClickClientComplete.salvarCliente()
            GeneralClientComplete.modalAguardeCarregando()
            GeneralClientComplete.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo Empregatício', () => {

        it('16. Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconeMenuOpcoes()
            GeneralClientComplete.opcaoClienteCompleto()
            FillPerson.cpfCliente()
            FillPerson.nomeCompleto()
            FillPerson.nomeSocial()
            FillPerson.dataNascimento()
            FillPerson.sexoCliente()
            ClickClientComplete.salvarCliente()
            
            GeneralClientComplete.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeneralAdress.clicarAbaEndereco() //CADASTRAR ENDEREÇO
            GeneralAdress.clicarAdicionarNovoEndereço()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalEnderecoVazioValidar()
            GeneralAdress.clicarAbrirTipoEndereco()
            FillAdress.tipoEndereco()
            FillAdress.cepEndereco()
            FillAdress.numeroEndereco()

            GeneralClientComplete.botaoSalvarDesabilitado()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.clicarSalvarEndereco()
            GeneralAdress.infosEnderecoAdicionado()

            GeneralRefRoute.clicarAbaRota() //CADASTRAR ROTA
            GeneralRefRoute.clicarAdicionarNovaRota()
            GeneralRefRoute.modalRotaVazioValidar()
            FillRefRoute.tipoEnderecoRota()
            FillRefRoute.rotaCompleta()
            FillRefRoute.infosRotaAdicionada()

            GeneralRefPhone.clicarAbaTelefone() //CADASTRAR TELEFONE
            GeneralRefPhone.clicarAdicionarNovoTelefone()
            GeneralRefPhone.modalTelefoneVazioValidar()
            FillRefPhone.tipoTelefone()
            FillRefPhone.numeroTelefone()
            FillRefPhone.ramalTelefone()
            GeneralRefPhone.clicarSalvarTelefone()
            GeneralRefPhone.infosTelefoneAdicionado()
            GeneralRefPhone.messTelefoneIncluidoSucesso()

            GeneralEmployment.clicarAbaEmpregat() //CADASTRAR EMPREGATÍCIO
            GeneralEmployment.validarAbaEmpregatVazia()
            GeneralEmployment.clicarAddNovoEmpregat()
        }) 
    })
})