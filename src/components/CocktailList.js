import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const {cocktails} = useGlobalContext ();
  return (
    <div class="container">
    <section className="album py-5 bg-light">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 drinks">
        {cocktails.map((item) => {
          return <Cocktail className="col drink" key={item.id} {...item} />;
        })}
      </div>
    </section>
    </div>
  );
};

export default CocktailList;


// TODO
// Add condition that if no cocktails are found, display a message -- kelly will help here