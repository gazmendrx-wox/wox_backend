import User from "./User";
export default function Users({data}) {
    return <div>
    {
        data.map((user) => <User id={user.id} firstName={user.firstName} lastName={user.lastName} maidenName={user.maidenName} age={user.age}/>)
    }
</div>
}