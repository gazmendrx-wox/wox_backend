import Lojtari from "./Lojtari";

export default function Footballers({data}){
    return <div>
        {
            data.map((lojtari) => <Lojtari id={lojtari.id} name={lojtari.name} goals={lojtari.goals}/>)
        }
    </div>
}   