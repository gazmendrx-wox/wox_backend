import User from "./User";

export default function UserData({data}){
    console.log({data},1)
    return <div>
        {
            data.users.map((user) => <User id={user.id} firstname={user.firstName} lastname={user.lastName} address={user.address}/>)
        }
    </div>
}