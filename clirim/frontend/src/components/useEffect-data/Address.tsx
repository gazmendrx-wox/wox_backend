export default function Address({dataUsers}){
    console.log(dataUsers.address , 1)
    return <div>
        <p>address: {dataUsers.address} - city: {dataUsers.city}</p>
    </div>
}