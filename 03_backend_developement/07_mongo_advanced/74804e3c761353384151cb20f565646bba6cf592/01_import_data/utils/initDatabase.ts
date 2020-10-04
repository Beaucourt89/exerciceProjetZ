import * as mongo from "mongodb";

//supprime les collections de la BDD
export function dropAll(db: mongo.Db): Promise<boolean> {
  return db
    .listCollections()
    .toArray()
    .then((results) => {
      const collectionNames = results.map((result) => result.name);
      const dropPromises = collectionNames.map((name) => db.collection(name).drop());
      return Promise.all(dropPromises).then(() => true);
    });
}

export default function initDatabase(
  databaseUrl = `mongodb://mongo-advanced-app:password@localhost:27017/mongo-advanced`,
  options = { useNewUrlParser: true, useUnifiedTopology: true },
): Promise<mongo.MongoClient> {
  return new Promise((resolve, reject) => {
    mongo.MongoClient.connect(databaseUrl, options, function (error, client) {
      if (error) {
        reject(error);
      } else {
        resolve(client);
      }
    });
  });
}
