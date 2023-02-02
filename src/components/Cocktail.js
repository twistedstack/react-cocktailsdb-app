import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <article className="card container">

      <img className="img-container" src={image} alt={name} />

      <div className="card-body">
  
        <div clasName="card-text">
          <div className="d-flex justify-content-between">
              <div>
                <h3 className="card-title">{name}</h3>
                <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
                  Details
                </Link>
              </div>
              <div>
                <p>{glass}</p>
                <p>{info}</p>
              </div>
              </div>
        </div>

      </div>
    </article>
  );
};

export default Cocktail;
