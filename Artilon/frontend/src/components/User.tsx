import Address from "./Address"

export default function User({id,firstname,lastname,address}){
    
    return <p key={id}>
        <p className="Info">Emri:{firstname} Mbiemri:{lastname} me vendbanim në  : <Address data={address}/></p>
    </p>
}