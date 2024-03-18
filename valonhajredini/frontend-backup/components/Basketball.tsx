import Basketballer from "./Basketballer";

export default function Basketball({data}){
    return <div>
        {
            data.map((basketballer) => <Basketballer id={basketballer.id} name={basketballer.name} baskets={basketballer.goals}/>)
        }
    </div>
}