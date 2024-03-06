export default function DetajetPersonale({fieldName, text, ChangeText}){
    return <div>
        {fieldName}: <input type="text" value={text} placeholder="Shkruani nje tekst" onChange={(e) => ChangeText(e.target.value)}/>
    </div>
}