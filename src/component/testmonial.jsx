import React from "react";
import CardTestmonial from "./cardtestmonial";
import { testmonial } from "../lib/testmonialdata";

function Testmonial() {
  return (
    <div className="container my-20 py-20">
      <h2 className="text-4xl font-bold uppercase text-center">latest blog</h2>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">
        {testmonial.map((testmonial, index) => (
          <CardTestmonial key={index} {...testmonial} />
        ))}
      </div>
    </div>
  );
}

export default Testmonial;
