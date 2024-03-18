import PlayerCsgo from "./PlayerCsgo";

export default function Csgo({data}) {
    return <div key={data.id}>
        {
            data.map((players) => <PlayerCsgo id={players.id} name={players.name} team={players.team}/>)
        }
    </div>
}