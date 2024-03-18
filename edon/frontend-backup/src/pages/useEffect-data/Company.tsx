import Address from "./Address"


export default function Company({dataUsers,address,department}){
    console.log(dataUsers.company , 1)
    return <div>
        <h1><Address dataUsers={address}/>
        Datadepartment:{department}
        name:{dataUsers.name}
        title:{dataUsers.title}
        </h1>
    </div>
}