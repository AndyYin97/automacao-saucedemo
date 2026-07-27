// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    // Mapeamento dos elementos
    this.userInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Ações da página
  async navegar() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async realizarLogin(usuario, senha) {
    await this.userInput.fill(usuario);
    await this.passwordInput.fill(senha);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };