import Address from "./Address"

export default function Hair({dataUsers}){
    console.log(dataUsers.bank , 1)
    return <div>
       <h3>- color: {dataUsers.color}
        - type: {dataUsers.type}
        </h3>
    </div>
}