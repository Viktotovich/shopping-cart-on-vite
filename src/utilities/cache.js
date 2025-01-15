const manualCacheController = {
  categories: {},
  setCache: function (category, data) {
    manualCacheController.categories[category] = data;
  },
  get: function (category) {
    return manualCacheController.categories[category];
  },
};

export default manualCacheController;
