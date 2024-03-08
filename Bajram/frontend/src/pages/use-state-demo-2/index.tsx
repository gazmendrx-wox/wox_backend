import Person from "@/components/Person";
import TextInput from "@/components/TextInput";
import { useState } from "react";

export default function StateDemoTwo() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    return <>
        <TextInput fieldName={'Name'} text={name} handleChangeText={setName}/>
        <TextInput fieldName={'Surname'} text={surname} handleChangeText={setSurname}/>
        <Person name={name} setName={undefined} />
        <button onClick={() => alert(`hello i am ${name} ${surname}`)}>Show Selected Values</button>
    </>
}