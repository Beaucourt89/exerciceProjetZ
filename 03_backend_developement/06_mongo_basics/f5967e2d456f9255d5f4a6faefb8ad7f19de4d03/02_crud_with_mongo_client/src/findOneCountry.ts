import * as mongo from "mongodb";
import { Country } from "./types";

export function findOneCountry(db: mongo.Db): Promise<Country> {
  return db.collection("worldAtlas").findOne({ name: "Iceland" })
}
