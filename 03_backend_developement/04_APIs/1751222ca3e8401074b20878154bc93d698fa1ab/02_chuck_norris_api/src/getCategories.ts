import * as request from "request";

function getCategories(): void {
  request("https://api.chucknorris.io/jokes/categories", (error, res, body) => {
    if (error) {
      console.error('error:', error);
    } else {
      console.log(body);
    }
  });
}

export { getCategories };

