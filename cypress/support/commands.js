Cypress.Commands.add('getProducts', () => {
    cy.request("/products").then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an("array");
    });
})

Cypress.Commands.add('getProductsParams', () => {
    cy.request("/products/1").then((response) => {
        expect(response.status).to.eq(200);
    });
})

Cypress.Commands.add('postForms', () => {
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
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("id");
        expect(response.body.title).to.eq(newProduct.title);
    });
})

Cypress.Commands.add('putProducts', () => {
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
})

Cypress.Commands.add('deleteProduct', () => {
    cy.request({
        method: "DELETE",
        url: "/products/1",
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
        expect(response.body.id).to.eq(1);
    });
})