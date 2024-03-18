/**
 * Informata e Pare = nje komponent Parent me emrin PersonalDetails, 
 * mrenda cilit, gjinden dy komponente tjere FirstName, edhe LastName
 * Ku, FirstName shfaq Emrin e personit, LastName shfaq Mbiemrin e Personit
 */

export default function PersonalDetails({fieldName, text, ChangeText}){
    return <div>
        {fieldName}: <input type="text" value={text} placeholder="enter a text" onChange={(e) => ChangeText(e.target.value)}/>
    </div>
}