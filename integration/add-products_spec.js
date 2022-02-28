import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartItem from "../components/CartItem";

import defaultUrls from "../data/urls";
import { orders } from "../fixtures/orders_spec.json";

describe("Adding products to the cart", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/checkout/cart/**").as("addProduct");
    cy.visit(defaultUrls.home);
  });

  orders.forEach((order) => {
    it(`should ${order.context}`, () => {
      const homePage = new HomePage();
      const productDetailsPage = new ProductDetailsPage();
      const cartItem = new CartItem();

      order.products.forEach((product) => {
        homePage.searchProductByName(product);
        productDetailsPage.addToCart(product);
        cy.wait("@addProduct");
        cy.visit(defaultUrls.home);
      });
    });
  });
});
