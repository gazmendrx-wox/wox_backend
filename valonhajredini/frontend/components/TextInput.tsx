export default function TextInput({fieldName, text, handleChangeText}){
    return <div>
        {fieldName}: <input type="text" value={text} placeholder="shkruani nje tekst" onChange={(e) => handleChangeText(e.target.value)}/>
    </div>
}