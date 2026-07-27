// pages/CheckoutPage.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Mapeamento dos elementos
    this.tituloPagina = page.locator('.title');
    this.addMochilaBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.carrinhoIcone = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    
    // Formulário de Checkout
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
    this.finishBtn = page.locator('[data-test="finish"]');
    this.mensagemSucesso = page.locator('.complete-header');
  }

  async adicionarProdutoECaminharParaCheckout() {
    await this.addMochilaBtn.click();
    await this.carrinhoIcone.click();
    await this.checkoutBtn.click();
  }

  async preencherDadosEFinalizar(nome, sobrenome, cep) {
    await this.firstNameInput.fill(nome);
    await this.lastNameInput.fill(sobrenome);
    await this.postalCodeInput.fill(cep);
    await this.continueBtn.click();
    await this.finishBtn.click();
  }
}

module.exports = { CheckoutPage };