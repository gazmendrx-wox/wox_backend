export default function Player({id, name, team}) {
    return <p key={id}>
        Player: {name} - team {team}
    </p>
} 