"use client"
import useFetch from "@/hooks/useFetch"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import useDynamicFetch from "@/hooks/useDynamicFetch";

export default function Home(){
    const router = useRouter();
    const { id } = router.query;
    const { handleSubmitForm } = useDynamicFetch('http://localhost:3001/reviews/delete')
    const { loading, data } = useFetch('http://localhost:3001/reviews')

    const handleDeleteReview = () => {
        const postData = {
            id: id
        }

        handleSubmitForm(postData, 'DELETE')
        console.log(data)
    }

    if(!loading){
        console.log(data)
    }
    if(loading){
        return <p>loading...</p>
    }
    console.log(data)
    return<>
         <h1>Review</h1>
        {data.map(item => (
            
       <h3 key={item.id}> {item.id} -{item.value} created {item.created_at} <Link href={'/'}><b>Go to reviews</b></Link><button type="submit" name="deletebtn" onClick={handleDeleteReview}>DELETE</button></h3>
        ))}
    </>
}
