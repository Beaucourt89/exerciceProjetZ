let articles = [
  {
    label: "chips",
    quantity: 2,
    price: 2,
  },
];

module.exports = function () {
  return {
    articles,
    addArticle: function (article) {
      this.articles.push(article);
    },
    getArticles: function () {
      return this.articles;
    },
    computeTotal: function () {
      const total = this.articles.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
      return total;
    },
  };
};
