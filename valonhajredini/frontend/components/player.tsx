export default function Player({id, name, division}){
    return <p key={id}>
        player: {name} - division {division}
    </p>
}