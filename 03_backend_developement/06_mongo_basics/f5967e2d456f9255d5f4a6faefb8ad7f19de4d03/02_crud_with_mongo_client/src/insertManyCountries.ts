import * as mongo from "mongodb";

export function insertManyCountries(db: mongo.Db) {
  const countries = [{
    name: "blabla",
    continent: "Europe",
    capital: "bla"
  },{
    name: "blabla",
    continent: "Europe",
    capital: "bla"
  },{
    name: "blabla",
    continent: "Europe",
    capital: "bla"
  }
]
return db.collection("worldAtlas").insertMany(countries).then(writeOpResult => {
  return writeOpResult.ops
})

}