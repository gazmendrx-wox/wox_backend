export default function CsPlayer({id, name, team}) {
    return <p key={id}>
        Player: {name} plays in {team}
    </p>
}