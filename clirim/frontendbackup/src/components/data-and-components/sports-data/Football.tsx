import PlayerFootBall from "./PlayerFootBall";

export default function Football({data}) {
    return <div key={data.id}>
        {
            data.map((players) => <PlayerFootBall id={players.id} name={players.name} goals={players.goals}/>)
        }
    </div>
}