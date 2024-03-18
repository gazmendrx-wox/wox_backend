export default function PlayerFootBall({id, name, goals}) {
    return <p key={id}>
        Player: {name} - division {goals}
    </p>
} 