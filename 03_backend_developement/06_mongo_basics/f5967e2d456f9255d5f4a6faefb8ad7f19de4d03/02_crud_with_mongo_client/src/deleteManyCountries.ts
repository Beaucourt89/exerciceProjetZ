import * as mongo from "mongodb";

export function deleteManyCountries(db: mongo.Db): Promise<boolean> {
  return db
    .collection("worldAtlas")
    .find({ continent: "Europe" })
    .count()
    .then((n) => {
      return db
        .collection("worldAtlas")
        .deleteMany({ continent: "Europe" })
        .then((result) => {
          if (n !== 0) {
            return result.deletedCount === n;
          } else {
            return false;
          }
        });
    });
}
