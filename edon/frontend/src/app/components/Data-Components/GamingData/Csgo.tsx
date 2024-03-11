import Gamer from "./Gamer";


export default function Csgo({data}){
    return <div>
        {
            data.map((gamer) => <Gamer id={gamer.id} name={gamer.name} team={gamer.team} />)
        }
    </div>
}