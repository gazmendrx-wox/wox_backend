import Address from "./Address"

export default function Crypto({dataUsers}){
    console.log(dataUsers.bank , 1)
    return <div>
       <h3>- coin: {dataUsers.coin}
        - network: {dataUsers.network}
        - wallet: {dataUsers.wallet}
        </h3>
    </div>
}