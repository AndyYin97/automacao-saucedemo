const { test, expect } = require('@playwright/test');

test.describe('Testes E2E - SauceDemo E-Commerce', () => {

  // CENÁRIO POSITIVO
  test('CT01 - Realizar compra de produto com sucesso (Cenário Positivo)', async ({ page }) => {
    // 1. Acessar a aplicação
    await page.goto('https://www.saucedemo.com/');

    // 2. Login com credenciais válidas
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    // Valida que entrou na página de produtos
    await expect(page.locator('.title')).toHaveText('Products');

    // 3. Adicionar produto ao carrinho
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');

    // 4. Ir para Checkout
    await page.click('[data-test="checkout"]');

    // 5. Preencher dados do comprador
    await page.fill('[data-test="firstName"]', 'Andrey');
    await page.fill('[data-test="lastName"]', 'QA');
    await page.fill('[data-test="postalCode"]', '14000000');
    await page.click('[data-test="continue"]');

    // 6. Finalizar Compra
    await page.click('[data-test="finish"]');

    // 7. Validação da mensagem de sucesso
    const mensagemSucesso = page.locator('.complete-header');
    await expect(mensagemSucesso).toHaveText('Thank you for your order!');

    // 📷 Captura de Evidência em Print
    await page.screenshot({ path: 'evidencias/sucesso_compra.png', fullPage: true });
  });

  // CENÁRIO NEGATIVO
  test('CT02 - Validar mensagem de erro no login com senha incorreta (Cenário Negativo)', async ({ page }) => {
    // 1. Acessar a aplicação
    await page.goto('https://www.saucedemo.com/');

    // 2. Tentar login com senha errada
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'senha_incorreta');
    await page.click('#login-button');

    // 3. Validar mensagem de erro exibida na tela
    const mensagemErro = page.locator('[data-test="error"]');
    await expect(mensagemErro).toBeVisible();
    await expect(mensagemErro).toContainText('Username and password do not match');

    // 📷 Captura de Evidência em Print
    await page.screenshot({ path: 'evidencias/falha_login_senha_invalida.png', fullPage: true });
  });

});