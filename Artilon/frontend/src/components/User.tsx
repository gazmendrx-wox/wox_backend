export default function User({id,firstname,lastname}){
    
    return <p key={id}>
        <p className="Info">Emri:{firstname} Mbiemri:{lastname}</p>
    </p>
}