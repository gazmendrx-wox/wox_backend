"use client"
import useFetch from "@/hooks/useFetch"
import { useRouter } from "next/router"

export default function ReviewById(){
    const router = useRouter()
    const { id } = router.query
    const { loading, data } = useFetch(`http://localhost:3001/review/${id}`)

    console.log(data)


    if(!loading){
        console.log(data, 'dataid')
    }
    if(loading){
        return <p>loading....</p>
    }

    return<div>
        <h1>{data.id} -  {data.value} {new Date(data.created_at).toLocaleDateString()}</h1>
    </div>
}