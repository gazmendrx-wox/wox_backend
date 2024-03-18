import RecipeItem from "./RecipeItem";

const Recipes = ({ recipes }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {recipes.map((recipe) => (
        <div className="col" key={recipe.id}>
          <RecipeItem name={recipe.name} image={recipe.image} id={recipe.id} />
        </div>
      ))}
    </div>
  );
};

export default Recipes;
