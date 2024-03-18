import Person from "@/components/Person";
import { useState } from "react"

export default function StateDemo(){
    /**
     * name -> vlera
     * setName -> funksioni per ndryshimin e vleres
     * = useState() gjendja fillestare;
     */
    const [name, setName] = useState('Gazmend');
    return <>
        <h1>Parent component: {name}</h1>
        <Person name={name}  />
        <Person name={name} />
        <Person name={name}  />
        <Person name={name} />
        <button onClick={() => setName('Clirim')}>Change name</button>
    </>
}