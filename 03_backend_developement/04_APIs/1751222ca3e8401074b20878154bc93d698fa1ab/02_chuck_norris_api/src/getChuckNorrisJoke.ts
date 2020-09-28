import * as request from "request";

function getChuckNorrisJoke(selectedCategory: string): void {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`,
    (error, res, body) => {
      if (error) {
        console.error("error:", error);
      } else {
        console.log(body);
      }
    }
  );
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
