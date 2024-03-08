import Player from "./PlayerFootBall";

export default function Fifa({data}) {
    return <div>
        {
            data.map((players) => <Player id={players.id} name={players.name} goals={players.goals}/>)
        }
    </div>
}