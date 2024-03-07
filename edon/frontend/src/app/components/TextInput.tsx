export default function TextInput({fieldName,text, changeText}){
    return <div>
        {fieldName}: <input type="text" value={text} placeholder="enter Text ..." onChange={(e) => changeText(e.target.value)}/>
    </div>
  }