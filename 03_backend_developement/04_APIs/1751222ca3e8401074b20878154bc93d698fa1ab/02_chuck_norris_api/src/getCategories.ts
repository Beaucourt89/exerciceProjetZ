import * as request from "request";

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, res) => {
    if (error) {
      console.error(error);
    } else {
      const categories = JSON.parse(res.body)
      console.log(categories);
    }
  });
}

export { getCategories };

