import Recipe from "./Recipe";

export default function Recipies({dataRecipes}) {
    return <div>
         {
            dataRecipes.map((recipe) => <Recipe id={recipe.id} name={recipe.name} ingredients={recipe.ingredients}/>)
        }
        </div>
}