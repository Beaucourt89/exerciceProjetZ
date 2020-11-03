import React from "react";
import zelda from "../../../data/zelda";

const CardFooter = () => {
  return (
    <div>
      <a href={zelda.slug}>See more</a>
    </div>
  );
};

export default CardFooter;

// const footer = (props) => (
//   <footer className="bg-dark text-white text-center p-2">
//       @H2Prog - Tout droit rÃ©servÃ©
//   </footer>
// );
