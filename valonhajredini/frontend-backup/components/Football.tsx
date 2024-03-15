import Footballer from "./Footballer";

export default function Football({data}){
    return <div>
        {
            data.map((footballer) => <Footballer id={footballer.id} name={footballer.name} goals={footballer.goals}/>)
        }
    </div>
}