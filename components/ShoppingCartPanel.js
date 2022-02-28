export default class ShoppingCartPanel {
  constructor() {
    this.itemNameText = ".minicart-product__name .minicart-product__link";
  }

  verifyIfProductAdded({ name }) {
    return cy.get(this.itemNameText).contains(name).should("be.visible");
  }
}
