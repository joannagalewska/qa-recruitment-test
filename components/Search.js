export default class Search {
  constructor() {
    this.searchPhraseInput = "#search";
    this.loopButton = '[data-testid="search-link"]';
  }

  getSearchInput() {
    return cy.get(this.searchPhraseInput);
  }

  clickSearchLoopButton() {
    return cy.get(this.loopButton).click();
  }

  searchByPhrase(text) {
    this.getSearchInput().clear();
    this.getSearchInput().type(text);
    this.clickSearchLoopButton();
  }
}
