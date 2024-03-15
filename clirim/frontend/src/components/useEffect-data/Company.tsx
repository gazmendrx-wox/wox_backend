import Address from "./Address"

export default function Company({dataUsers, address}){
    console.log(dataUsers.bank , 1)
    return <div>
        <h1>
        - companyAdress     <Address dataUsers={address} />
        </h1>
       <h3>- department: {dataUsers.department}
        - companyName: {dataUsers.name}
        - companyTitle: {dataUsers.title}
        </h3>
       
    </div>
}