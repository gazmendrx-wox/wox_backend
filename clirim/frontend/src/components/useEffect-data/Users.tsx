import User from "./User";

export default function Users({dataUsers}) {
    return <div>
         {
            dataUsers.users.map((user) => <User id={user.id} firstName={user.firstName}  lastname={user.lastName} address={user.address} bank={user.bank} company={user.company} crypto={user.crypto} hair={user.hair}/>)
        }
        </div>
}