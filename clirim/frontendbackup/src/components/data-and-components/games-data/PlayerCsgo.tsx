export default function PlayerCsgo({id, name, team}) {
    return <p key={id}>
        Player: {name} - team {team}
    </p>
} 