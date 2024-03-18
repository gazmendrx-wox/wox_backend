export default function User({id, firstName, lastName, maidenName, age}) {
    
    return <p key={id}>
        <div className="recipe"> 
            <p className="recipe-title">FirstName: {firstName}</p>
            <p className="recipe-ingredients">lastName: {lastName}</p>
            <p className="recipe-ingredients">maidenName: {maidenName}</p>
            <p className="recipe-ingredients">age: {age}</p>
        </div>
    </p>
}