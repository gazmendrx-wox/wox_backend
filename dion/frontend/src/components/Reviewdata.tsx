import Link from "next/link"
import Formatetdata from "./Formatetdata"

export default function Reviewdata({data}){
return <>
{data.map(item =>(
<Link href={`/reviews/${item.id}`}key={item.id}>
    <h3>{item.id}-{item.value}created <Formatetdata dateString={item.created_at}></Formatetdata></h3>

</Link>
))}
</>
}