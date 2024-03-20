import useFetch from "@/hooks/useFetch";
import Reviewdata from "@/components/Reviewdata";
import { useRouter } from "next/router";


export default function Review(){

   const router=useRouter()
    const {id}=router.query
    const {loading,data}=useFetch(id ? `http://localhost:3001/review/${id}` : null)

    if(loading){
        return <h1>loading</h1> 
    }
    return <>
    <Reviewdata data={data}></Reviewdata>
    </>
   
}