import Atleti from "./Atleti";

export default function Basketballers({data}){
    return <div>
        {
            data.map((atleti) => <Atleti id={atleti.id} name={atleti.name} baskets={atleti.baskets}/>)
        }
    </div>
}