import Player from "./Players"

export default function FifaData ({data}) {
    return <div>
        
        {
        data.map((Players) => <Players id={Players.id} name={Players.name} division={Players.division} />)
    }
       
       
    </div>
}