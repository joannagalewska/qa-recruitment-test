export default class ProductDetailsPanel {
  getProductName() {
    return cy.get('[data-ui-id="page-title-wrapper"]');
  }

  getProductCode() {
    return cy.get(".product-view__sku");
  }

  getProductPrice() {
    return cy.get(".price");
  }

  verifyProductDetails({ name, code, price }) {
    this.getProductName().contains(name);
    this.getProductCode().contains(code);
    this.getProductPrice().contains(price);
  }
}
