import { MongoClient } from "mongodb";
import dataImport from "./dataImport";
import initDatabase, { dropAll } from "../utils/initDatabase";

initDatabase()
  .then((client: MongoClient) => {
    const db = client.db();
    return dropAll(db).then(() => {
      return dataImport(db).then(() => {
        client.close();
      });
    });
  })
  .catch((e) => console.warn(e));
