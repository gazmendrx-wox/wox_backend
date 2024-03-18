export default function Address({dataUsers}){
    console.log(dataUsers.address , 1)
    return <div>
        <p>{dataUsers.address} {dataUsers.city}</p>
    </div>
}