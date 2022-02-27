import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";

describe("Sample test", () => {
  it("Open Alpaca Store", () => {
    const homePage = new HomePage();
    const productDetailsPage = new ProductDetailsPage();

    const product = {
      name: "Carina Basic Capri",
      code: "SKU WP09",
      price: 51,
    };
    cy.visit("https://alpaca-community.snowdog.dev/");

    homePage.searchInput.searchByPhrase(product.name);
    productDetailsPage.productDetailsPanel.verifyProductDetails(product);
  });
});
