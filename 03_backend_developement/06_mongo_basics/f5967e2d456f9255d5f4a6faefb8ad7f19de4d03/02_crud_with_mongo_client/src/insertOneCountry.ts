import * as mongo from "mongodb";
import {Country} from "./types";

const ita = {
  name: "Italie",
  capital: "Rome",
  continent: "Europe",
}
type Country = {
  name: string, 
  capital: string,
  continent: string
}

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  return db.collection("worldAtlas").insertOne(ita).then(() => { return ita});
}
