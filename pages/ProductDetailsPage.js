import BasePage from "./BasePage";
import ProductDetailsPanel from "../components/ProductDetailsPanel";

export default class ProductDetailsPage extends BasePage {
  constructor() {
    super();
    this.productDetailsPanel = new ProductDetailsPanel();
  }
}
