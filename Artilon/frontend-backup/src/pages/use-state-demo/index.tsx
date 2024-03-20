import Person from "@/components/Person";
import { useState } from "react"

export default function StateDemo(){
    const [name, setName] = useState('Artilon');
    
    return<> 
    <h1>Hello I am {name}</h1>
    <Person name={name} setName={setName} />
    <Person name={name} setName={setName} />
    <Person name={name} setName={setName} />
    <Person name={name} setName={setName} />
    <button onClick={() => setName('Clirim')}>Change Name</button>
    </>
    
}