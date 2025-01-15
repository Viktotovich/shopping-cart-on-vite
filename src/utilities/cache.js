const manualCacheController = {
  categories: {},
  setCache: function (data, category) {
    manualCacheController.categories[category] = data;
  },
  getCache: function (category) {
    return manualCacheController.categories[category];
  },
};

export default manualCacheController;
