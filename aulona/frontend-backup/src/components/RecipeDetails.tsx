const RecipeDetails = ({ recipe }) => {
  return (
    <>
      <h1>{recipe.name}</h1>
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h4>Instructions</h4>
      <ul>
        {recipe.instructions.map((instructions, index) => (
          <li key={index}>{instructions}</li>
        ))}
      </ul>
    </>
  );
};

export default RecipeDetails;
