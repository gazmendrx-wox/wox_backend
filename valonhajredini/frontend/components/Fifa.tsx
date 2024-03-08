import Player from "./player"
export default function Fifa({data}){
    return <div>
        {
            data.map((players) => <Player id={players.id} name={players.name} division={players.division}/>)
        }
    </div>
}