import React from "react";
import zelda from "../../../data/zelda";

let logo = [];
for (let i = 0; i < zelda.platforms.length; i++) {
  logo.push([zelda.platforms[i].platform_logo]);
}
const CardHeader = () => {
  return (
    <div className="card-header">
      {zelda.name}
      <img
        className="card-img"
        src={logo}
        alt={zelda.platform_logo}
        style={{ width: "50%" }}
      />
      {/* <p className="card-text">{logo}</p> */}
    </div>
  );
};
export default CardHeader;

// import React from “react”;
// const CardHeader = (props) => {
//   return <div className=“card-header”>{props.name}</div>;
// };
// export default CardHeader;
