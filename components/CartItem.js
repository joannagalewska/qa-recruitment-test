export default class CartItem {
  getProductItem({ name }) {
    return cy.get(".cart-list-item__content").contains(name);
  }
}
