import Player from "./Players";

export default function Fifa({data}){
    return <div>
        {
            data.map((players)=> <Player id={players.id} name={players.name} division={players.id}/>)
        }
    </div>
}