import PlayerFootBall from "./PlayerFootBall";

export default function Fifa({data}) {
    return <div>
        {
            data.map((players) => <PlayerFootBall id={players.id} name={players.name} goals={players.goals}/>)
        }
    </div>
}