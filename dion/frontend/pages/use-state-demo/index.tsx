import { useState } from "react"
import Person from "../../components/courses";


export default function StateDemo(){

    const[name,setName] = useState('Dion');

    return <><h1>Hello I am {name}</h1>
    <Person name={name} length_of_weeks={undefined}/>
    <button onClick={() => setName('Clirim')}>Change name</button></>
}