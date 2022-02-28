import BasePage from "./BasePage";
import ProductDetails from "../components/ProductDetails";

export default class ProductDetailsPage extends BasePage {
  constructor() {
    super();
    this.productDetails = new ProductDetails();
  }

  verifySuccessMessage({ name }) {
    return this.productDetails
      .getMessage()
      .contains(`added ${name}`)
      .should("be.visible");
  }

  addToCart(product) {
    this.productDetails.verifyProductDetails(product);
    this.productDetails.addProductToCart(product);
  }
}
