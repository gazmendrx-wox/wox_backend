import Address from "./Address";
import Bank from "./Bank";
import Company from "./Company";

export default function User({id, firstName, lastname, address, bank, company }){
    return <p key={id}>
        <div> 
            <p> Emri:{firstName} Mbiemri:{lastname} me vendbanim ne :<Address dataUsers={address}/><Bank dataUsers={bank}/><Company dataUsers={company} address={address}/></p>
            
        </div>
    </p>
}