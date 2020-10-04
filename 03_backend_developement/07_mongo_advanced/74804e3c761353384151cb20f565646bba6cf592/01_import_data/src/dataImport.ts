import * as fs from "fs";
import * as path from "path";
import { Db } from "mongodb";

type Platform = Record<string, unknown> & {
  games: Record<string, unknown>[];
};

type Game = {
  [key: string]: unknown;
};

//Pour lire les infos du fichier Json
function getDataFromFile(fileName: string): [Game[], Platform] {
  const filePath = path.resolve(`data/${fileName}`);
  const stringifiedPlatform = fs.readFileSync(filePath, "utf-8");
  const platform = JSON.parse(stringifiedPlatform);

  //destructuring qui enleve games du array platform
  const { games, ...platformWithoutGames } = platform;
  return [games, platformWithoutGames];
}

//CET FONCTION NE FAIT QU IMPORTER DE LA DONNÉE
//comme dans le fichier index la function dataImport est Associée a .then
//nous savons que c une promise
export default function dataImport(db: Db): Promise<boolean> {
  let allGames: Game[] = [];
  const allPlatforms: Platform[] = [];

  //prend le dossier data qui Contient nes, n-64 et gba 
  const dirPath = path.resolve("data");
  const fileNames = fs.readdirSync(dirPath);



  fileNames.forEach((fileName) => {
    const [games, platform] = getDataFromFile(fileName);
    allPlatforms.push(platform);
    allGames = [...allGames, ...games];
  });

  return db.createCollection<Platform>("platforms").then((platformCollection) => {
    return db.createCollection<Game>("games").then((gamesCollection) => {
      return platformCollection.insertMany(allPlatforms).then(() => {
        return gamesCollection.insertMany(allGames).then(() => {
          return true;
        });
      });
    });
  });
}
