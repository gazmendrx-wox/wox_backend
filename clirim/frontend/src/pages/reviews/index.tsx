"use client"

import useFetch from "@/hooks/useFetch";
import Link from "next/link";

export default function Revies() {
    const { loading, data } = useFetch('http://localhost:3001/reviews')
    if(!loading){
        console.log(data)
    }
    if(loading){
        return <p>loading...</p>
    }
    return<>
         <h1>Hello world</h1>
        {data.map(review => (
            
        <h1 key={review.id}><Link href={`/reviews/${review.id}`}> {review.id} -{review.value} created {new Date(review.created_at).toLocaleDateString()}</Link></h1>
        ))}
    </>
}