export default function Address({data}){
    console.log(data.address , 1)
    return <div>
        <p>{data.address} {data.city}</p>
    </div>
}