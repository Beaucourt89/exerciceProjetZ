import fetch, { FetchError, Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string | void> {
    return fetch(`https://api.github.com/users/${nickname}`, 
    { method: "GET"}
    ).then((response: Response) => {
      return response.json()
    })
    .then(json => json.repos_url)

    .catch(() => {
      console.warn("the user does not exist");
    });
  }

  static getRepos(url: string) {
    // You code goes here
    return fetch(url, {
      method: "GET",
    }).then((Response) => Response.json());
  }

  static printRepos() {
    // You code goes here
  }

  static printRepository() {
    // You code goes here
  }

  static getProjectInformations() {
    // You code goes here
  }
}
