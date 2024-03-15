import Address from "./Address";

export default function Recipe({id, firstName, lastname, address }){
    return <p key={id}>
        <div> 
            <p> Emri:{firstName} Mbiemri:{lastname} me vendbanim ne :<Address dataUsers={address} /></p>
            
        </div>
    </p>
}