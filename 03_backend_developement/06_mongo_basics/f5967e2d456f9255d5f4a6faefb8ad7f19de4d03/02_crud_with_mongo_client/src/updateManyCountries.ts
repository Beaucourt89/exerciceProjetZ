import * as mongo from "mongodb";
import { Country } from "./types";

export function updateManyCountries(db: mongo.Db): Promise<Country[]> {
  return db
    .collection("worldAtlas")
    .updateMany({ continent: "Europe" }, { $set: { continent: "EU" } })
    .then(() => {
      return db.collection("worldAtlas").find({ continent: "EU" }).toArray();
    });
  // code your function here
}
