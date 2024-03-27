"use client"
import DateComponent from "@/components/DateComponent"
import useFetch from "@/hooks/useFetch"
import Link from "next/link"

export default function Home() {

  const {loading , data} = useFetch('http://localhost:3001/reviews')
  
  if(loading){
    return <h1> Loading </h1>
  }
 
  return <>

  <div> {data.map(review => (
        <h3> <Link href='/reviews' key={review.id}> {review.id} -{review.value} created <DateComponent dateString={review.created_at}/></Link></h3>
        )
    )}
  </div>

  </>
   
}
