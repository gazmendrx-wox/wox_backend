//data per produktet
import Produkti from "./produkti";
export default function Data({data}) {
    return<>
        <Produkti data={data.products}/>
    </>
}