import Basketball from "./Basketball"
import Football from "./Football"
export default function SportsData({data}){
    return <div>
    <Football data={data.football} />
    <Basketball data={data.basketball} />
</div>
}