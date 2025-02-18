import { GeralClienteCompleto } from '../../../../pages/para_cadastro_cliente/cliente_completo/geral_cliente_completo';
import { ClicarClienteCompleto } from '../../../../pages/para_cadastro_cliente/cliente_completo/clicar_cliente_completo';
import { GeralAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/geral_anexo';
import { PreencherCampoAnexo } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Anexo/preencher_anexo';
import { clicarAbaEmpregat } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/geral_empregaticio';
import { } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Empregaticio/preencher_empregaticio';
import { } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/geral_pessoa';
import { PreencherPessoa } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Pessoa/preencher_pessoa';
import { GeralRefBancaria } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/geral_ref_bancaria';
import { PreencherRefBancaria } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_bancaria/preencher_ref_bancaria';
import { GeralRefComercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/geral_ref_comercial';
import { PreencherRefComercial } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_comercial/preencher_ref_comercial';
import { GeralRefFinanceira } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/geral_ref_financeira';
import { PreencherRefFinanceira } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/preencher_ref_financeira';
import { GeralRefPessoal } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/geral_ref_pessoal';
import { PreencherRefPessoal } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/preencher_ref_pessoal';
import { GeralRota } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/geral_rota';
import { PreencherRota } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Rota/preencher_rota';
import { GeralTelefone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/geral_telefone';
import { PreencherTelefone } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_Telefone/preencher_telefone';
import { GeralEndereco } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/geral_endereco';
import { PreencherEndereco } from '../../../../pages/para_cadastro_cliente/cliente_completo/aba_endereco/preencher_endereco';


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

            GeralClienteCompleto.iconeMenuOpcoes() //PESSOA
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('2. Cliente completo CPF - mensagem de campos obrigatórios', () => {
    
            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            cy.wait(500)

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO

            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            ClicarClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeralEndereco.clicarAdicionarNovoEndereço() //ENDEREÇO
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('3. Cliente completo CNPJ', () => {
    
            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cnpjCliente() //PESSOA
            PreencherPessoa.nomeCNPJ()
            PreencherPessoa.nomeFantasiaCNPJ()

            ClicarClienteCompleto.salvarCliente() //tentar salvar cadastro, mas não deve permitir, pois ainda tem campo obrigatórios
            cy.wait(400)
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar em adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo anexo após salvar o cadastro de cliente', () => {

        it('4. Cliente completo CPF - caminho feliz', () => {GeralClienteCompleto.

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
            cy.wait(2000)

            ClicarClienteCompleto.menuCadastroClienteCompleto()
            GeralAnexo.clicarAbaAnexo()
            GeralAnexo.validarAbaAnexoVazia()
            GeralAnexo.selecionarPrimeiroTipoAnexo()
            cy.wait(500)
            PreencherCampoAnexo.anexarArquivoPFD()
            GeralAnexo.confirmarEnvioArquivo()
            cy.wait(1000)
            GeralAnexo.messAnexoIncluidoSucesso()
            GeralAnexo.validarAnexoInserido()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(3000)
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })
    })

    context('Cadastro de cliente completo - incluindo referencia bancária', () => {

        it('5. Cliente completo CPF - tipo de chave PIX Telefone correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()


            PreencherRefBancaria.tipoChavePixTelefone()
            PreencherRefBancaria.chavePixTelefone()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        })  

        it('6. Cliente completo CPF - tipo de chave PIX Email correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixEmail()
            PreencherRefBancaria.chavePixEmail()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('7. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixCpfCnpj()
            PreencherRefBancaria.chavePixCPF()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('8. Cliente completo CPF - tipo de chave PIX CPF CNPJ correto', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto() 
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixAletoria()
            PreencherRefBancaria.chavePixAleatorio()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(2000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 

        it('9. Cliente completo CPF - validar tipo de chave PIX Telefone incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixTelefone()
            PreencherRefBancaria.chavePixTelefoneErrada()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixTelefoneInvalida()
        })  

        it('10. Cliente completo CPF - validar tipo de chave PIX Email incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixEmail()
            PreencherRefBancaria.chavePixEmailErrada()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixEmailInvalida()
        })  

        it('11.Cliente completo CPF - validar tipo de chave CPF CNPJ incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixCpfCnpj()
            PreencherRefBancaria.tipoChavePixAletoria()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixCpfCnpjInvalida()
        })  

        it('12.Cliente completo CPF - validar tipo de chave Aleatória incorreto ', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefBancaria.clicarAbaRefBancaria() //REFERENCIA BANCÁRIA
            GeralRefBancaria.validarAbaRefBancariaVazia()
            GeralRefBancaria.clicarAddNovaRefBancaria()
            cy.wait(2000)
            GeralRefBancaria.modalRefBancariaVazio()
            PreencherRefBancaria.banco()
            PreencherRefBancaria.agencia()
            PreencherRefBancaria.conta()
            PreencherRefBancaria.dataAbertura()
            PreencherRefBancaria.telefone()
            PreencherRefBancaria.gerente()
            PreencherRefBancaria.email()
            PreencherRefBancaria.cpfCorrentista()
            PreencherRefBancaria.nomeCorrentista()
            PreencherRefBancaria.tipoConta()
            PreencherRefBancaria.operacao()
            PreencherRefBancaria.formaPagamento()

            PreencherRefBancaria.tipoChavePixAletoria()
            GeralRefBancaria.clicarSalvarRefBancaria()
            GeralRefBancaria.messRefBancariaIncluidaSucesso()
            GeralRefBancaria.infosRefBancariaAdicionada()
            ClicarClienteCompleto.salvarCliente()
            GeralRefBancaria.messRefBancariaChavePixAletoriaInvalida()
        })  
    })

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

        it('13. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefPessoal.clicarAbaRefPessoal()
            GeralRefPessoal.validarAbaRefPessoalVazia() //REFERENCIA PESSOAL
            GeralRefPessoal.clicarAddNovaRefPessoal()
            GeralRefPessoal.modalRefPessoalVazio()
            PreencherRefPessoal.nome()
            PreencherRefPessoal.email()
            PreencherRefPessoal.telefone()
            PreencherRefPessoal.relacionamento()
            GeralRefPessoal.clicarSalvar()
            GeralRefPessoal.messRefPessoalIncluidaSucesso()
            GeralRefPessoal.infosAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(3000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia comercial', () => {

        it('14. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefComercial.clicarAbaRefComercial() //REFERENCIA COMERCIAL
            GeralRefComercial.validarAbaRefComercialVazia()
            GeralRefComercial.clicarAddNovaRefComercial()
            GeralRefComercial.modalRefComercialVazio()
            PreencherRefComercial.empresa()
            PreencherRefComercial.contato()
            PreencherRefComercial.telefone()
            PreencherRefComercial.email()
            PreencherRefComercial.observacao()
            GeralRefComercial.clicarSalvarRefComercial()
            GeralRefComercial.infosRefComercialAdicionada()
            GeralRefComercial.messRefComercialIncluidaSucesso()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(3000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it('15. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()
            //messEnderecoIncluidoSucesso()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()

            ClicarClienteCompleto.abaReferencias() //REFERENCIA
            GeralRefFinanceira.clicarAba() //REFERENCIA FINANCEIRA
            GeralRefFinanceira.validarAbaVazia()
            GeralRefFinanceira.clicarAddNova()
            GeralRefFinanceira.modalVazio()
            PreencherRefFinanceira.dataInicio()
            PreencherRefFinanceira.localExp()
            PreencherRefFinanceira.planoExp()
            PreencherRefFinanceira.valorPrest()
            GeralRefFinanceira.clicarSalvar()
            GeralRefFinanceira.messRefFinanceiraIncluidaSucesso()
            GeralRefFinanceira.infosRefFinanceiraAdicionada()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(4000)
            GeralClienteCompleto.modalAguardeCarregando()
            GeralClienteCompleto.messRegistroSalvoSucesso()
        }) 
    })

    context('Cadastro de cliente completo - incluindo Empregatício', () => {

        it('16. Cliente completo CPF - caminho feliz', () => {

            GeralClienteCompleto.iconeMenuOpcoes()
            GeralClienteCompleto.opcaoClienteCompleto()
            PreencherPessoa.cpfCliente()
            PreencherPessoa.nomeCompleto()
            PreencherPessoa.nomeSocial()
            PreencherPessoa.dataNascimento()
            PreencherPessoa.sexoCliente()
            ClicarClienteCompleto.salvarCliente()
            cy.wait(500)
            
            GeralClienteCompleto.messAlertaEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço

            GeralEndereco.clicarAbaEndereco() //ENDEREÇO
            GeralEndereco.clicarAdicionarNovoEndereço()
            cy.wait(200)
            GeralEndereco.tipoEndereco()
            GeralEndereco.modalEnderecoVazioValidar()
            cy.wait(200)
            GeralEndereco.clicarAbrirTipoEndereco()
            cy.wait(300)
            PreencherEndereco.tipoEndereco()
            PreencherEndereco.cepEndereco()
            PreencherEndereco.numeroEndereco()

            GeralClienteCompleto.botaoSalvarDesabilitado()
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.clicarSalvarEndereco()
            cy.wait(200)
            GeralEndereco.infosEnderecoAdicionado()

            GeralRota.clicarAbaRota() //ROTA
            GeralRota.clicarAdicionarNovaRota()
            GeralRota.modalRotaVazioValidar()
            PreencherRota.tipoEnderecoRota()
            PreencherRota.rotaCompleta()
            PreencherRota.infosRotaAdicionada()

            GeralTelefone.clicarAbaTelefone() //TELEFONE
            GeralTelefone.clicarAdicionarNovoTelefone()
            GeralTelefone.modalTelefoneVazioValidar()
            PreencherTelefone.tipoTelefone()
            PreencherTelefone.numeroTelefone()
            PreencherTelefone.ramalTelefone()
            GeralTelefone.clicarSalvarTelefone()
            GeralTelefone.infosTelefoneAdicionado()
            cy.wait(4000)
            GeralTelefone.messTelefoneIncluidoSucesso()
            GeralTelefone()

            GeralEmpregaticio.clicarAbaEmpregat() //aba Empregatício
            GeralEmpregaticio.validarAbaEmpregatVazia()
            GeralEmpregaticio.clicarAddNovoEmpregat()
        }) 
    })
})