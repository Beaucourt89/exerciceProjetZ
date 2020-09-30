import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  return fetch("https://api.chucknorris.io/jokes/categories").then((Response) => Response.json());
}

function getChuckNorrisJoke(selectedCategory: string): Promise<string> {
  return fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`).then((Response) =>
    Response.json().then((value) => value.value),
  );
}

// Leave the line below for tests to work properly
export { getCategories, getChuckNorrisJoke };
