export default function Basketballer({id, name, baskets}){
    return <p key={id}>
        player: {name} - baskets {baskets}
    </p>
}