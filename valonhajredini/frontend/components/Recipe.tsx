import Ingredients from "./Ingredients";

export default function Recipe({id,name,ingredients}){
    return <p key={id}>
        <div className="recipe"> 
            <p className="recipe-title">Recipe: {name}</p>
            <p className="recipe-ingredients">Ingredients:</p>
            <Ingredients data={ingredients} />
        </div>
    </p>
}