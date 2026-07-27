# 🎭 Automação de Testes E2E & API com Playwright

![Playwright Tests Pipeline](https://github.com/AndyYin97/automacao-saucedemo/actions/workflows/playwright.yml/badge.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green)
![Playwright](https://img.shields.io/badge/Playwright-1.x-blue)

Projeto de automação de testes cobrindo testes de interface de usuário (E2E) e testes de API REST backend, desenvolvido com **Playwright** e **JavaScript**, integrado a uma pipeline de **CI/CD no GitHub Actions**.

---

## 🚀 Tecnologias e Ferramentas

- **Linguagem:** JavaScript (Node.js)
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **Arquitetura UI:** Page Object Model (POM)
- **API Testada:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- **Target UI:** [SauceDemo](https://www.saucedemo.com/)
- **CI/CD:** GitHub Actions

---

## 🧪 Cenários de Teste Cobertos

### 💻 Testes de UI (End-to-End)
- **CT01 - Realizar compra de produto com sucesso (Cenário Positivo):** Fluxo completo de login, adição de item ao carrinho, preenchimento do formulário de checkout e validação do pedido com captura de evidência em screenshot.
- **CT02 - Validar mensagem de erro no login com senha incorreta (Cenário Negativo):** Validação de tratamento de exceção ao tentar autenticar com credenciais inválidas.

### 🌐 Testes de API REST
- **CT01 - GET 200:** Busca de usuário por ID com validação do payload retornado.
- **CT02 - POST 201:** Criação de novo recurso enviando body JSON e validando o status code de sucesso.
- **CT03 - GET 404:** Validação de busca de recurso inexistente garantindo o retorno correto de erro do servidor.

---

## 📁 Estrutura do Projeto

```text
automacao-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml      # Pipeline de CI/CD (GitHub Actions)
├── evidencias/                 # Screenshots gerados automaticamente
├── pages/                      # Padrão Page Object Model (POM)
│   ├── LoginPage.js
│   └── CheckoutPage.js
├── tests/                      # Suítes de testes
│   ├── checkout.spec.js        # Testes de UI
│   └── api.spec.js             # Testes de API Backend
├── playwright.config.js        # Configurações do Playwright
└── package.json

🛠️ Como Executar o Projeto Localmente
Pré-requisitos
Node.js (versão 18 ou superior)

Git instalado

1. Clonar o repositório
git clone [https://github.com/AndyYin97/automacao-saucedemo.git](https://github.com/AndyYin97/automacao-saucedemo.git)
cd automacao-saucedemo

2. Instalar as dependências
npm install
npx playwright install --with-deps

3. Executar os testes
Executar todos os testes (UI + API):
npx playwright test
    Executar apenas os testes de UI (SauceDemo):
npx playwright test checkout
    Executar apenas os testes de API:
npx playwright test api
    Executar no modo visual/headed (vendo o navegador abrir):
npx playwright test checkout --headed

4. Visualizar o Relatório de Testes (HTML Report)
npx playwright show-report

⚙️ Integração Contínua (CI/CD)
O projeto conta com um workflow do GitHub Actions (playwright.yml) configurado para rodar a suíte completa de testes de forma automatizada em ambiente headless (Ubuntu) a cada push ou pull request na branch main.

Desenvolvido por Andrey 🚀