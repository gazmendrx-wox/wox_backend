import User from "./User";

export default function UserData({data}){
    console.log({data},1)
    return <div>
        {
            data.map((user) => <User id={user.id} firstname={user.firstName} lastname={user.lastName}/>)
        }
    </div>
}