import PlayerFifa from "./PlayerFifa";

export default function Fifa({data}) {
    return <div>
        {
            data.map((players) => <PlayerFifa id={players.id} name={players.name} goals={players.goals}/>)
        }
    </div>
}