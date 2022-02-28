import Search from "../components/Search";

export default class BasePage {
  constructor() {
    this.searchInput = new Search();
    this.cartButton = '[data-testid="minicart-link"]';
  }

  searchProductByName({ name }) {
    return this.searchInput.searchByPhrase(name);
  }

  goToCart() {
    return cy.get(this.cartButton).click();
  }
}
