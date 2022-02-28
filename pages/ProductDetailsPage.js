import BasePage from "./BasePage";
import ProductDetails from "../components/ProductDetails";

export default class ProductDetailsPage extends BasePage {
  constructor() {
    super();
    this.productDetails = new ProductDetails();
  }

  addToCart(product) {
    this.productDetails.verifyProductDetails(product);
    this.productDetails.addProductToCart(product);
  }
}
