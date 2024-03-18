import FifaData from "./FifaData" 
import CsgoData from "./CsgoData"

export default function GamesData({data}) {
    return <div>
        <FifaData data={data.fifa} />
        <CsgoData data={data.csgo} />
    </div>
}