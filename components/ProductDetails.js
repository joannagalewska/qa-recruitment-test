export default class ProductDetails {
  constructor() {
    this.element = ".product-info-main";
    this.nameText = '[data-ui-id="page-title-wrapper"]';
    this.codeText = ".product-view__sku";
    this.priceText = ".product-view__price .price";
    this.addToCartButton = "#product-addtocart-button";
    this.sizeButton = ".product-options .size .swatch__option";
    this.colorButton = ".product-options .color";
    this.quantityInput = "#qty";
    this.colorErrorText = ".color div.mage-error";
    this.successMessage = '[data-ui-id="message-success"]';
  }

  getProductName() {
    return cy.get(this.element).find(this.nameText);
  }

  getProductCode() {
    return cy.get(this.element).find(this.codeText);
  }

  getProductPrice() {
    return cy.get(this.element).find(this.priceText);
  }

  clickAddToCart() {
    return cy.get(this.addToCartButton).click({ force: true });
  }

  setSize(size) {
    return cy.get(this.sizeButton).contains(size).click({ force: true });
  }

  setColor(color) {
    const selector = `div[data-option-label='${color}']`;

    return cy.get(this.colorButton).find(selector).click({ force: true });
  }

  setQuantity(quantity) {
    if (quantity > 1) {
      return cy.get(this.quantityInput).clear().type(quantity);
    }
  }

  getMessage() {
    return cy.get(this.successMessage);
  }

  verifyProductDetails({ name, code, price }) {
    this.getProductName().contains(name);
    this.getProductCode().contains(code);
    this.getProductPrice().contains(price);
  }

  addProductToCart({ size, color, quantity }) {
    this.setSize(size);
    this.setColor(color);
    this.setQuantity(quantity);
    this.clickAddToCart();
  }
}
