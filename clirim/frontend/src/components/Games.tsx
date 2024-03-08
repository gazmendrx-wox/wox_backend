import Csgo from "./Csgo";
import Fifa from "./Fifa";

export default function Games({data}) {
    return <>
        <Fifa data={data.fifa}/>
        <Csgo data={data.csgo} />
    </>
}