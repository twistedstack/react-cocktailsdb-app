import React from "react";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {
    async function getCocktail() {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      if (data.drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    }
    getCocktail();
  }, [id]);

  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  }
  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>

      <div class="container">
        <div class="row">
          <div className="drink col">
            
            <img src={image} alt={name} />
          </div>
          <div className="drink-info col">
          <h2 className="section-title">{name}</h2>
            <p>
              <span className="drink-data">category: </span>
              {category}
            </p>
            <p>
              <span className="drink-data">info: </span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass: </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions: </span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">ingredients: </span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span>:  null;
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
