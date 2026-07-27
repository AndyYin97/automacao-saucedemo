const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('Testes E2E - SauceDemo (com Page Object Model)', () => {

  test('CT01 - Realizar compra de produto com sucesso (Cenário Positivo)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const checkoutPage = new CheckoutPage(page);

    // 1. Acessar e Logar
    await loginPage.navegar();
    await loginPage.realizarLogin('standard_user', 'secret_sauce');
    await expect(checkoutPage.tituloPagina).toHaveText('Products');

    // 2. Fluxo de Compra
    await checkoutPage.adicionarProdutoECaminharParaCheckout();
    await checkoutPage.preencherDadosEFinalizar('Andy', 'QA', '14000000');

    // 3. Validação final e Evidência
    await expect(checkoutPage.mensagemSucesso).toHaveText('Thank you for your order!');
    await page.screenshot({ path: 'evidencias/pom_sucesso_compra.png', fullPage: true });
  });

  test('CT02 - Validar mensagem de erro no login com senha incorreta (Cenário Negativo)', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Acessar e tentar Login com erro
    await loginPage.navegar();
    await loginPage.realizarLogin('standard_user', 'senha_incorreta');

    // 2. Validação da mensagem de erro e Evidência
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    await page.screenshot({ path: 'evidencias/pom_falha_login.png', fullPage: true });
  });

});