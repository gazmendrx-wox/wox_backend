"use client"
import useFetch from "@/hooks/useFetch"
import Link from "next/link"

export default function Home(){
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
            
        <h1><Link href='/reviews'  key={review.id}> {review.id} -{review.value} created {review.created_at}</Link></h1>
        ))}
    </>
}