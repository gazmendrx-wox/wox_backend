export default function Player({id, name, baskets}) {
    return <p key={id}>
        Player: {name} - team {baskets}
    </p>
} 