export default function Players({id, name, division}) {
    return <p key={id}>
        Player: {name} plays in {division}
    </p>
}