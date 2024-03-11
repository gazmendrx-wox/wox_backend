export default function Footballer({id, name, goals}){
    return <p key={id}>
        player: {name} - goals {goals}
    </p>
}