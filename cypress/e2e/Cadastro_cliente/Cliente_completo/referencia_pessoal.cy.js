import { ClienteCompletoPage } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { PessoaPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { RefPessoalPage } from '../../../pages/cadastro_cliente/cliente_completo/aba_Referencia/ref_pessoal/RefPessoalPage.js';
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

    context('Cadastro de cliente completo - incluindo referencia pessoal', () => {

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
            EnderecoPage.clickAbaAdress() //CADASTRAR ENDEREÇO
            EnderecoPage.clickAddNewAdress()
            EnderecoPage.tipoEndereco()
            EnderecoPage.modalAdressEmptyValidade()
            EnderecoPage.clickOpenTypeAdress()
            EnderecoPage.typeAdress()
            EnderecoPage.cepAdress()
            EnderecoPage.numberAdress()
            ClienteCompletoPage.validarBotaoSalvarDesabilitado()
            EnderecoPage.clickSaveAdress()
            EnderecoPage.infoAdressAdded()
            RotaPage.clickAbaRoute() //CADASTRAR ROTA
            RotaPage.clickAddedNewRoute()
            RotaPage.modalRouteEmptyValidade()
            RotaPage.typeAdressRoute()
            RotaPage.routaComplete()
            RotaPage.infoRouteAdded()
            TelefonePage.clickAbaPhone() //CADASTRAR TELEFONE
            TelefonePage.clickAddedNewPhone()
            TelefonePage.modalPhoneEmptyValidade()
            TelefonePage.typePhone()
            TelefonePage.numberPhone()
            TelefonePage.ramalPhone()
            TelefonePage.clickSavePhone()
            TelefonePage.infoPhoneAdded()
            TelefonePage.messPhoneAddedSucess()
            ClienteCompletoPage.ClickAbaReferencias() //REFERENCIA
            RefPessoalPage.clickAbaRefGuys()
            RefPessoalPage.validateAbaEmpty() //CADASTRAR REFERENCIA PESSOAL
            RefPessoalPage.clickAddNew()
            RefPessoalPage.modalEmpty()
            RefPessoalPage.name()
            RefPessoalPage.email()
            RefPessoalPage.phone()
            RefPessoalPage.relationship()
            RefPessoalPage.clickSave()
            RefPessoalPage.messRefGuysAddedSucess()
            RefPessoalPage.infoAdded()
            ClienteCompletoPage.clickSalvarClienteCompleto()
            ClienteCompletoPage.validateModalAguardeCarregando()
            ClienteCompletoPage.validateMessageSalvoSucesso()
        }) 
    })

})