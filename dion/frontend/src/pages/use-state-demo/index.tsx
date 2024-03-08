

import { useState } from "react"
import Person from "../../src/components/Person";

export default function StateDemo(){
    /**
     * name -> vlera
     * setName -> funksioni per ndryshimin e vleres
     * = useState() gjendja fillestare;
     */
    const [name, setName] = useState('Gazmend');
    return <>
        <h1>Parent component: {name}</h1>
        <Person name={name} setName={setName} />
        <Person name={name} setName={setName} />
        <Person name={name} setName={setName} />
        <Person name={name} setName={setName} />
        <button onClick={() => setName('Clirim')}>Change name</button>
    </>
} 