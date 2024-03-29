import PlayerBaskets from "./PlayerBaskets";

export default function Basketball({data}) {
    return <div key={data.id}>
        {
            data.map((players) => <PlayerBaskets id={players.id} name={players.name} baskets={players.baskets}/>)
        }
    </div>
}