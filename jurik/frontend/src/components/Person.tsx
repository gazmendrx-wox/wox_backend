


 export default function Person({name , setName}){
    return <>
        <h1>Hello I am {name} </h1>
        <button onClick={() => setName('Jurik')}> Revert</button>
    </>
}