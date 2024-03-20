import User from "./User";
import '../css/user.css'

export default function UserData({data}){
    console.log({data},1)
    return <div>
        {
            data.users.map((user) => <User key={user.id} firstname={user.firstName} lastname={user.lastName} address={user.address} company={user.company}/>)
        }
    </div>
}