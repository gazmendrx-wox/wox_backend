
export default function Person({name, setName}) {
    return <>
        <h1>Child component: {name}</h1>
        <button onClick={() => setName('Gazmend')}>Revert</button>
    </>
}