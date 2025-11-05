import { GeneralClientComplete, ClickClientComplete } from '../../../pages/cadastro_cliente/cliente_completo/ClienteCompletoPage.js';
import { FillPerson } from '../../../pages/cadastro_cliente/cliente_completo/aba_Pessoa/PessoaPage.js';
import { GeneralRefFinance, FillRefFinance } from '../../../pages/cadastro_cliente/cliente_completo/aba_Referencia/ref_financeira/RefFinanceiraPage.js';
import { GeneralRefRoute, FillRefRoute } from '../../../pages/cadastro_cliente/cliente_completo/aba_Rota/RotaPage.js';
import { GeneralRefPhone, FillRefPhone } from '../../../pages/cadastro_cliente/cliente_completo/aba_Telefone/TelefonePage.js';
import { GeneralAdress, FillAdress } from '../../../pages/cadastro_cliente/cliente_completo/aba_endereco/EnderecoPage.js';

describe('Cadastrar cliente completo', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.clearAllSessionStorage()
        cy.login()
        cy.urlAposLogin()
        cy.tituloPagina()
    })

    context('Cadastro de cliente completo - incluindo referencia financeira', () => {

        it('1.Cliente completo CPF - caminho feliz', () => {

            GeneralClientComplete.iconMenuOptions()
            GeneralClientComplete.optionClientComplete()
            FillPerson.cpfClient()
            FillPerson.nameComplete()
            FillPerson.nameSocial()
            FillPerson.dataNascimento()
            FillPerson.sexClient()
            ClickClientComplete.saveClient()
            GeneralClientComplete.messAlertAdressMandatory() //mensagem de endereço obrigatório após tentar salvar sem adicionar um endereço
            GeneralAdress.clickAbaAdress() //CADASTRAR ENDEREÇO
            GeneralAdress.clickAddNewAdress()
            GeneralAdress.tipoEndereco()
            GeneralAdress.modalAdressEmptyValidade()
            GeneralAdress.clickOpenTypeAdress()
            FillAdress.typeAdress()
            FillAdress.cepAdress()
            FillAdress.numberAdress()
            GeneralClientComplete.buttonSaveDisabled()
            GeneralAdress.clickSaveAdress()
            GeneralAdress.infoAdressAdded()
            GeneralRefRoute.clickAbaRoute() //CADASTRAR ROTA
            GeneralRefRoute.clickAddedNewRoute()
            GeneralRefRoute.modalRouteEmptyValidade()
            FillRefRoute.typeAdressRoute()
            FillRefRoute.routaComplete()
            FillRefRoute.infoRouteAdded()
            GeneralRefPhone.clickAbaPhone() //CADASTRAR TELEFONE
            GeneralRefPhone.clickAddedNewPhone()
            GeneralRefPhone.modalPhoneEmptyValidade()
            FillRefPhone.typePhone()
            FillRefPhone.numberPhone()
            FillRefPhone.ramalPhone()
            GeneralRefPhone.clickSavePhone()
            GeneralRefPhone.infoPhoneAdded()
            GeneralRefPhone.messPhoneAddedSucess()
            ClickClientComplete.abaReferences() //REFERENCIA
            GeneralRefFinance.clickEmpty() //CADASTRAR REFERENCIA FINANCEIRA
            GeneralRefFinance.validateAbaEmpty()
            GeneralRefFinance.clickAddNew()
            GeneralRefFinance.modalEmpty()
            FillRefFinance.dateStart()
            FillRefFinance.localExp()
            FillRefFinance.flatExp()
            FillRefFinance.valuePrest()
            GeneralRefFinance.clicarSalvar()
            GeneralRefFinance.messRefFinanceAddedSucess()
            GeneralRefFinance.infoRefFinanceAdded()
            ClickClientComplete.saveClient()
            GeneralClientComplete.modalWaitingLoading()
            GeneralClientComplete.messRegisterSaveSucess()
        }) 
    })
})