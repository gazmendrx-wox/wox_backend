"use client"
import useFetch from "@/hooks/useFetch"
import React from "react"
import Link from "next/link"

export default function Home(){
    const { loading, data } = useFetch('http://localhost:3001/reviews')
    if(!loading){
        console.log(data)
    }

    if(loading){
        return <h1>loading</h1>
    }
    return <div>
        <ol>
          {data.map(item => (
            <li key={item.id}>This review " {item.value} " is created at : {item.created_at} <b><Link href='./reviews'>Go to reviews</Link></b></li>
          ))}
        
        </ol>

      </div>
}