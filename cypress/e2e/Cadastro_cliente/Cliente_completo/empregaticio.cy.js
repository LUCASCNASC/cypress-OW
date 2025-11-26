import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { EmpregaticioPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Empregaticio/EmpregaticioPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Cadastro de cliente completo - incluindo Empregatício', () => {

        it('1.Cliente completo CPF - caminho feliz', () => {

            ClienteCompletoPage.clickMenuOpcoes()
            ClienteCompletoPage.clickOpcaoClienteCompleto()
            PessoaPage.fillCPFCliente()
            PessoaPage.fillNomeCompleto()
            PessoaPage.fillNomeSocial()
            PessoaPage.fillDataNascimento()
            PessoaPage.chooseSexoCliente()
            ClienteCompletoPage.clickSalvarClienteCompleto()
            ClienteCompletoPage.validateMessageEnderecoObrigatorio() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço
            EnderecoPage.clickAbaEndereco() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAdicionarNovoEndereco()
            EnderecoPage.tipoEndereco()
            EnderecoPage.validateEnderecoVazio()
            EnderecoPage.clickAbrirTipoEndereco()
            EnderecoPage.chooseTipoEndereco()
            EnderecoPage.fillCEPEndereco()
            EnderecoPage.fillNumeroEndereco()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSalvarEndereco()
            EnderecoPage.clickSalvarEndereco()
            EnderecoPage.infoEnderecoAdicionado()
            RotaPage.clickAbaRota() //CADASTRAR ROTA
            RotaPage.clickAdicionarNovaRota()
            RotaPage.validateRotaVazia()
            RotaPage.chooseTipoEnderecoRota()
            RotaPage.addRotaCompleta()
            RotaPage.validadeRotaAdicionada()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            EmpregaticioPage.clickAbaEmployment() //CADASTRAR EMPREGATÍCIO
            EmpregaticioPage.validateAbaEmploymentEmpty()
            EmpregaticioPage.clickAddNewEmployment()
        }) 
    })
})