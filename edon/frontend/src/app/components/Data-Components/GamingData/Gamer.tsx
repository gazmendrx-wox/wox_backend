export default function Gamer ({id,name,team}){
    return <p key={id}>
        gamer: {name} -team {team}
    </p>
}