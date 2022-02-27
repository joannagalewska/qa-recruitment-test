export default class SearchInput {
  getSearchInput() {
    return cy.get("#search");
  }

  clickSearchLoop() {
    return cy.get('[data-testid="search-link"]').click();
  }

  searchByPhrase(text) {
    this.getSearchInput().clear();
    this.getSearchInput().type(text);
    this.clickSearchLoop();
  }
}
