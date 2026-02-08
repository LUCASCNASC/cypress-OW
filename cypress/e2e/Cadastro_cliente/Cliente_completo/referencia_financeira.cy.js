import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RefFinanceiraPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/RefFinanceiraPage.js';
import { RotaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { TelefonePage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { EnderecoPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Register complete client', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        cy.validateTitlePage();
    })

    context('Complete customer registration - including financial references', () => {

        it('1.Complete customer CPF - happy path', () => {

            ClienteCompletoPage.clickMenuOpcoes();
            ClienteCompletoPage.clickOpcaoClienteCompleto();
            PessoaPage.fillCPFCliente();
            PessoaPage.fillNomeCompleto();
            PessoaPage.fillNomeSocial();
            PessoaPage.dataNascimento()
            PessoaPage.chooseSexoCliente();
            ClienteCompletoPage.clickSalvarClienteCompleto()
            ClienteCompletoPage.validateMessageEnderecoObrigatorio(); 
            EnderecoPage.clickAbaEndereco(); 
            EnderecoPage.clickAdicionarNovoEndereco();
            EnderecoPage.tipoEndereco();
            EnderecoPage.validateEnderecoVazio();
            EnderecoPage.clickAbrirTipoEndereco();
            EnderecoPage.chooseTipoEndereco();
            EnderecoPage.fillCEPEndereco();
            EnderecoPage.fillNumeroEndereco();
            ClienteCompletoPage.validarBotaoSalvarDesabilitado();
            EnderecoPage.clickSalvarEndereco();
            EnderecoPage.infoEnderecoAdicionado();
            RotaPage.registerRota();
            TelefonePage.registerTelefone();
            ClienteCompletoPage.ClickAbaReferencias();
            RefFinanceiraPage.clickEmpty();
            RefFinanceiraPage.validateAbaEmpty();
            RefFinanceiraPage.clickAddNew();
            RefFinanceiraPage.modalEmpty();
            RefFinanceiraPage.dateStart();
            RefFinanceiraPage.localExp();
            RefFinanceiraPage.flatExp();
            RefFinanceiraPage.valuePrest();
            RefFinanceiraPage.clicarSalvar();
            RefFinanceiraPage.messRefFinanceAddedSucess();
            RefFinanceiraPage.infoRefFinanceAdded();
            ClienteCompletoPage.clickSalvarClienteCompleto();
            ClienteCompletoPage.validateModalAguardeCarregando();
            ClienteCompletoPage.validateMessageSalvoSucesso();
        }) 
    })
})