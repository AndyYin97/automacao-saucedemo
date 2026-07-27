const { test, expect } = require('@playwright/test');

test.describe('Testes de API REST - JSONPlaceholder', () => {

  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  // 1. CENÁRIO POSITIVO - GET (200)
  test('CT01 - Buscar usuario por ID com sucesso (GET 200)', async ({ request }) => {
    // Envia a requisição GET para buscar o usuário 1
    const response = await request.get(`${BASE_URL}/users/1`);

    // Valida o Status Code (esperado: 200)
    expect(response.status()).toBe(200);

    // Converte a resposta para JSON
    const body = await response.json();

    // Validações no Payload de retorno
    expect(body.id).toBe(1);
    expect(body.name).toBe('Leanne Graham');
    expect(body.username).toBe('Bret');
  });

  // 2. CENÁRIO POSITIVO - POST (201)
  test('CT02 - Criar um novo post/recurso com sucesso (POST 201)', async ({ request }) => {
    // Payload enviado na requisição
    const novoPost = {
      title: 'Automação de API com Playwright',
      body: 'Treino de QA Pleno focado em testes backend',
      userId: 1
    };

    // Envia a requisição POST com o body JSON
    const response = await request.post(`${BASE_URL}/posts`, {
      data: novoPost
    });

    // Valida o Status Code de criação (esperado: 201)
    expect(response.status()).toBe(201);

    const body = await response.json();

    // Valida os dados retornados no body
    expect(body.title).toBe('Automação de API com Playwright');
    expect(body.userId).toBe(1);
    expect(body).toHaveProperty('id');
  });

  // 3. CENÁRIO NEGATIVO - GET (404)
  test('CT03 - Validar erro ao buscar recurso inexistente (GET 404)', async ({ request }) => {
    // Busca um usuário/post que não existe (ID 9999)
    const response = await request.get(`${BASE_URL}/users/9999`);

    // Valida que o servidor retornou Not Found (404)
    expect(response.status()).toBe(404);
  });

});