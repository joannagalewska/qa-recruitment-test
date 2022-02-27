import Search from "../components/Search";

export default class BasePage {
  constructor() {
    this.searchInput = new Search();
  }

  searchProductByName({ name }) {
    this.searchInput.searchByPhrase(name);
  }
}
