export default function Ingredients({dataRecipes}){
   
    return <ul className="ingredients-list"> 
          {dataRecipes.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient}</span>
              </li>
          ))}
      </ul>
  }