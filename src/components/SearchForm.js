import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
  
      <form onSubmit={handleSubmit} className="d-flex" >
          <input
            className="form-control me-8"
            placeholder="search your favourite cocktail"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />


      </form>

  );
};

export default SearchForm;
