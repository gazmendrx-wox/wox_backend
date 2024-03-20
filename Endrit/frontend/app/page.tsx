"use client"
import useFetch from "../hooks/useFetch"
import Link from "next/link"


export default function Home() {

  const {loading , data} = useFetch('http://localhost:3001/reviews')
  
  if(loading){
    return <h1> Loading </h1>
  }
  
  return <>

  <div> {data.map(review => (
    <h1 key={review.id}>{review.id} : {review.value} - created: {review.created_at} <Link href='/reviews'>Go to Reviews</Link></h1>
    

  ))}</div>
  

  </>
   
}
