"use client"
import DateComponent from "@/components/DateComponent"
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
    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${day}/${month}/${year}`;
    }
    return<>
         <h1>List of Reviews</h1>
        {data.map(review => (
            <h3> <Link href={`/reviews/${review.id}`}  key={review.id}> {review.id} -{review.value} created <DateComponent dateString={review.created_at}/></Link></h3>
        ))}
    </>
}