import CsPlayer from "./Csplayer"

export default function CsgoData ({data}) {
    return <div>
      
        {data.map((Players) => <Players id={Players.id} name={Players.name} division={Players.division}/> )}
      
       
    </div>
}