"use client"
import useFetch from "@/hooks/useFetch"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Home(){
    const router = useRouter();
    const { id } = router.query;

    const { loading, data } = useFetch(`http://localhost:3001/review/${id}`)
    if(!loading){
        console.log(data)
    }
    if(loading){
        return <p>loading...</p>
    }
    return<>
         <h1>List of Reviews</h1>
        {data.map(review => (
            
       <h3> <Link href='/reviews'  key={review.id}> {review.id} -{review.value} created {review.created_at}</Link></h3>
        ))}
    </>
}