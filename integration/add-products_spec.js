import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import defaultUrls from "../data/urls";
import { orders } from "../fixtures/orders_spec.json";

describe("Adding products to the cart", () => {
  beforeEach(() => {
    return cy.visit(defaultUrls.home);
  });

  orders.forEach((order) => {
    it(`should ${order.context}`, () => {
      const homePage = new HomePage();
      const productDetailsPage = new ProductDetailsPage();

      order.products.forEach((product) => {
        homePage.searchProductByName(product);
        productDetailsPage.addToCart(product);
      });
    });
  });
});
