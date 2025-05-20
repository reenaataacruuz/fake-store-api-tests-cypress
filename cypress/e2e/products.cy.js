describe("Funcionalidade: Buscando produtos na API", () => {
  it("Listar todos os produtos (GET: /products)", () => {
    cy.request("/products").then((response) => {
      console.log("Body: ", JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("Busca por ID do produtos (GET: /products/1)", () => {
    cy.request("/products/1").then((response) => {
      console.log("Body: ", JSON.stringify(response.body, null, 2));
      expect(response.status).to.eq(200);
    });
  });
});

describe("Funcionalidade: Criando produto fake na API", () => {
  it("Enviar o payload para cadastro (POST: /products)", () => {
    const newProduct = {
      title: "Produto de Teste",
      price: 19.99,
      description: "Descrição de teste",
      image: "https://i.pravatar.cc",
      category: "electronics",
    };

    cy.request({
      method: "POST",
      url: "/products",
      body: newProduct,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body.title).to.eq(newProduct.title);
      cy.log("Produto criado:", JSON.stringify(response.body, null, 2));
    });
  });
});

describe("Funcionalidade: Atualizando um produto existente", () => {
  it("Enviar o payload atualizado para cadastro (PUT: /products)", () => {
    const updatedProduct = {
      title: "Produto atualizado",
      price: 19.99,
      description: "Descrição de teste atualizada",
      image: "https://i.pravatar.cc",
      category: "electronics",
    };

    cy.request({
      method: "PUT",
      url: "/products/1",
      body: updatedProduct,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", updatedProduct.title);
      expect(response.body).to.have.property("price", updatedProduct.price);
      expect(response.body).to.have.property(
        "description",
        updatedProduct.description
      );
      expect(response.body).to.have.property(
        "category",
        updatedProduct.category
      );
    });
  });
});

describe("Funcionalidade: Deletando um produto", () => {
  it("Deletar o produto selecionado (DELETE: /productsd/1)", () => {
    cy.request({
      method: "DELETE",
      url: "/products/1",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body.id).to.eq(1);
    });
  });
});