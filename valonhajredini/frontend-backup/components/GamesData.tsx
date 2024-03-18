import Fifa from "./Fifa"
export default function GamesData({data}){
    return <div>
        <Fifa data={data.fifa} />
    </div>
}