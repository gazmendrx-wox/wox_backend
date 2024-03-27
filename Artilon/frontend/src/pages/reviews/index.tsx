"use client"
import DateComponent from "@/components/DateComponent"
import useFetch from "@/hooks/useFetch"
import Link from "next/link"

export default function Reviews(){
    const { loading, data } = useFetch('http://localhost:3001/reviews')
    if(!loading){
        console.log(data)
    }
    if(loading){
        return <p>loading...</p>
    }
    
    return<>
         <h1>List of Reviews</h1>
        {data.map(review => (
            <h3> <Link href={`/reviews/${review.id}`}  key={review.id}> {review.id} -{review.value} created <DateComponent dateString={review.created_at}/></Link></h3>
        ))}
    </>
}