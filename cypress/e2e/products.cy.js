describe("Funcionalidade: Buscando produtos na API", () => {
  it("Listar todos os produtos (GET: /products)", () => {
    cy.getProducts();
  });

  it("Busca por ID do produtos (GET: /products/1)", () => {
    cy.getProductsParams();
  });
});

describe("Funcionalidade: Criando produto fake na API", () => {
  it("Enviar o payload para cadastro (POST: /products)", () => {
    cy.postForms();
  });
});

describe("Funcionalidade: Atualizando um produto existente", () => {
  it("Enviar o payload atualizado para cadastro (PUT: /products)", () => {
    cy.putProducts();
  });
});

describe("Funcionalidade: Deletando um produto", () => {
  it("Deletar o produto selecionado (DELETE: /productsd/1)", () => {
    cy.deleteProduct();
  });
});