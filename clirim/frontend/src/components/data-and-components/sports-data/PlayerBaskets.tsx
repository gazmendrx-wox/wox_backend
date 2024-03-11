export default function PlayerBaskets({id, name, baskets}) {
    return <p key={id}>
        Player: {name} - team {baskets}
    </p>
} 