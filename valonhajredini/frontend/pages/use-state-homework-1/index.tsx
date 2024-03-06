/**
 * Detyra; 
 * 
 * Ne kete page use-state-homework-1 duhet te shfaqet 3 informata
 * 
 * Informata e pare Emri dhe Mbiemri i personit
 * 
 * Informata e dyte Vendbanimi i personit
 * 
 * Informata e trete Profesioni i personit
 *
 * Informata e Pare = nje komponent Parent me emrin PersonalDetails, 
 * mrenda cilit, gjinden dy komponente tjere FirstName, edhe LastName
 * Ku, FirstName shfaq Emrin e personit, LastName shfaq Mbiemrin e Personit
 * 
 * Informata e Dyte = nje komponent me emrin Vendbanim, i cili shfaq vendbanimit e selektuar
 * nga Parent component
 * 
 * Informata e trete = nje komponent me emrin Profesion, i cili shfaq profesionin e cekur
 * nga Parent component
 * 
 * Te gjitha informatat duhet te delegohen nga use-state-homework-1 page a.k.a StateHomeWork() component
 * 
 * Emri edhe Mbiemri jane input fields, type text
 * Vendbanimi eshte dropdown/select, me vlera nga nje array of locations, Prishtina, Bujanovc, Gjilan,
 * Preshev. Cdohere ce te ndrrohet dropdown vlera, do te behet update edhe shfaqja nga komponenti Vendbanim;
 * 
 * Profesioni eshte nje checkbox, me vlera nga nje array of professions, Programer, Student, Praktikant.
 * Selektimi i checkboxes ben update shfaqjen e tyre ne use-state-homework-1 page.
 * 
 * Te gjitha informatat ne fund te shfaqen mrenda nje 
 * <div>{Informata e pare} {Informata e dyte} {Informata e trete}</div>
 */
import DetajetPersonale from "@/components/DetajetPersonale";
import VendBanimi from "@/components/VendBanimi";
import { useState } from "react";
import Profesioni from "@/components/Profesioni";

export default function StateHomeWork() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')

    const cities = ['Prishtinë', 'Bujanovc', 'Gjilan', 'Preshevë', 'Osllarë'];
    const [city, setCity] = useState('');

    const profesionet = ['Programer' , 'Student' , 'Praktikant'];
    const [profesion, setProfesion] = useState('');

    return <>
        <DetajetPersonale fieldName={'Emri'} text={name} ChangeText={setName}/>
        <DetajetPersonale fieldName={'Mbiemri'} text={surname} ChangeText={setSurname}/>

        <VendBanimi fieldName="City" selectedOption={city} options={cities} changeOption={setCity} />

        <Profesioni fieldName="Profesioni" selectedOption={profesion} options={profesionet} changeOption={setProfesion}/>

        { name && surname && city && profesion.length > 0 && (
            <h1>Unë jam {name} {surname} i lindur në {city}, profesioni im është {profesion}.</h1>
        )}
    </>
    
}