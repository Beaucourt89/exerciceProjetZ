import React from "react";
import { Platform, Game } from "../../types/Platform";
type PlatformSelectProps = {
  setSelectedPlatform: React.Dispatch<
    React.SetStateAction<Platform | undefined>
  >;
  platforms: Platform[];
};
const PlatformSelect: React.FC<PlatformSelectProps> = ({
  platforms,
  setSelectedPlatform,
}) => {
  const choosePlatform = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedPlatform(platforms.find((p) => p.slug === event.target.value));
  };
  return (
    <select className="custom-select" onChange={choosePlatform}>
      {platforms.map((platform) => (
        <option key={platform.slug} value={platform.slug}>
          {platform.name}
        </option>
      ))}
    </select>
  );
};
const PlatformPage = (): JSX.Element => {
  const [platforms, setPlatforms] = React.useState<Platform[]>([]);
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform>();
  const [selectedGame, setSelectedGame] = React.useState<Game>();
  const apiUrl = "https://videogames-sparta.herokuapp.com/";
  const getGame = (slug: string): void => {
    fetch(apiUrl + "games/" + slug, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
        setSelectedGame(body);
      });
  };
  React.useEffect(() => {
    console.log(Date.now());
    fetch(apiUrl + "platforms", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((body) => {
        setPlatforms(body);
        setSelectedPlatform(body[0]);
      });
  }, []);
  return (
    <div className="border w-100 row p-2">
      <div className="col-4">
        <PlatformSelect
          platforms={platforms}
          setSelectedPlatform={setSelectedPlatform}
        />
        <ul className="list-group mt-2">
          {selectedPlatform && selectedPlatform.games
            ? selectedPlatform.games.map((game) => (
                <li
                  className="list-group-item"
                  key={game.slug}
                  onClick={(): void => getGame(game.slug)}
                >
                  {game.name}
                </li>
              ))
            : null}
        </ul>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        {selectedGame ? <h4>{selectedGame.name}</h4> : "Please select a game"}
      </div>
    </div>
  );
};
export default PlatformPage;
