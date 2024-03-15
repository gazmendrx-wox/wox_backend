import Recipe from "./Recipe";



export default function Recipes({ data }) {

    return (
        <div>
            {
                data.recipes.map((recipe) => <Recipe key={recipe.id} id={recipe.id} name={recipe.name} ingredients={recipe.ingredients} />)
            }
        </div>
    )
}