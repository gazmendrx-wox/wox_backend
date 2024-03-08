import Basketball from "./Basketball";
import Football from "./Football";


export default function Sports({data}) {
    return <>
        <Football data={data.football}/>
        <Basketball data={data.basketball} />
    </>
}