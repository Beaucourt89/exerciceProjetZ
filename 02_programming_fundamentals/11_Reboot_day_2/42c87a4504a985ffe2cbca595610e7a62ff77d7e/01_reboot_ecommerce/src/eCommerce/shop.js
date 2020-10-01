const articles = [
  {
    label: "beer",
    quantity: 300,
    price: 4,
  },
  {
    label: "chips",
    quantity: 25,
    price: 2,
  },
  {
    label: "cheese",
    quantity: 50,
    price: 3,
  },
  {
    label: "olives",
    quantity: 200,
    price: 1,
  },
  {
    label: "waterBottle",
    quantity: 1000,
    price: 0.5,
  },
];

module.exports = function () {
  return {
    articles,
    checkQuantity: function (article, wantedQuantity) {
      return article.quantity >= wantedQuantity;
    },
    getArticles: function () {
      return this.articles;
    },
    buyArticle: function (index) {
      return this.articles[index];
    },
  };
};
