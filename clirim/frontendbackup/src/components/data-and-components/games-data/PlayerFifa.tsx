export default function PlayerFifa({id, name, goals}) {
    return <p key={id}>
        Player: {name} - division {goals}
    </p>
} 