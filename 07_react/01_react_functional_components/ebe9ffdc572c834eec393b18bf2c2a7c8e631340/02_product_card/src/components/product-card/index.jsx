import React from "react";
import CardHeader from "./header";
import CardBody from "./body";
import CardFooter from "./footer";
import zelda from "../../../data/zelda";

const ProductCard = () => {
  return (
    <div className="card">
      <CardHeader {}/>
      <CardBody />
      <CardFooter />
    </div>
  );
};

export default ProductCard;
