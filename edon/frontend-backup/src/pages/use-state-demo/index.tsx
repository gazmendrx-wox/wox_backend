import Checkbox from "@/app/components/Checkbox";
import Dropdown from "@/app/components/Dropdown";
import TextInput from "@/app/components/TextInput";
import { useState } from "react"


export default function StateHomeWork() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const cities = ['Prishtinë', 'Bujanovc', 'Gjilan', 'Preshevë'];
    const [city, setCity] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = ['Programer', 'Student', 'Praktikant'];

   
    return <>
        <TextInput fieldName='Name' text={name} changeText={setName}/>
        <TextInput fieldName='SurName' text={surname} changeText={setSurname}/>
        <Dropdown fieldName='City' selectedOption={city} options={cities} changeOption={setCity} />
        <Checkbox fieldName="Profesioni" changeOption={setSelectedOptions} selectedOptions={selectedOptions} options={options} />
        <div> Unë jam: {name} {surname} me vendbanim në: {city} me Profesion:{selectedOptions}</div>
    </>
}