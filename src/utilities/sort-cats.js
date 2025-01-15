import manualCacheController from "./cache";

const sortCats = {
  init: function (data) {
    let electronics = [];
    let jewelery = [];
    let mens = [];
    let womens = [];

    data.map((product) => {
      switch (product.category) {
        case "men's clothing":
          mens.push(product);
          break;
        case "women's clothing":
          womens.push(product);
          break;
        case "electronics":
          electronics.push(product);
          break;
        case "jewelery":
          jewelery.push(product);
          break;
        default:
          console.warn("Unknown product" + product);
      }

      manualCacheController.setCache("electronics", electronics);
      manualCacheController.setCache("jewelery", jewelery);
      manualCacheController.setCache("womens", womens);
      manualCacheController.setCache("mens", mens);
    });
  },
};

export default sortCats;
