export default function Ingredients({data}){
   
      return <ul className="ingredients-list"> 
            {data.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                    <span className="ingredient-name">{ingredient}</span>
                </li>
            ))}
        </ul>
    }