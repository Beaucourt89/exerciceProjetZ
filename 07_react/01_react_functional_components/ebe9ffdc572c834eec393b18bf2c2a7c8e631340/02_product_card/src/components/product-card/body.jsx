import React from "react";
import zelda from "../../../data/zelda";

let genres = [];
for (let i = 0; i < zelda.genres.length; i++) {
  genres.push([zelda.genres[i].name]);
}

console.log(genres);
const CardBody = () => {
  return (
    <div className="card-body">
      <img
        className="card-img"
        src={zelda.cover.url}
        alt={zelda.name}
        style={{ width: "50%" }}
      />
      <p className="card-text ">{zelda.first_release_date}</p>
      <p className="card-text">{genres}</p>
      <p className="card-text">{zelda.summary}</p>
      <button className="">Show screeshotts</button>
    </div>
  );
};

export default CardBody;
